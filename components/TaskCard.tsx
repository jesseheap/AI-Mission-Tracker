
import React, { useState } from 'react';
import { Task } from '../types';
import Icon from './Icon';

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onUpdateNotes: (id: number, notes: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onUpdateNotes }) => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div 
      className={`retro-card p-6 rounded-xl cursor-pointer select-none overflow-hidden transition-all duration-300 ${task.completed ? 'checked-card' : 'bg-white'}`}
      onClick={(e) => {
        // Prevent toggling completion if clicking buttons or textarea
        if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).tagName === 'TEXTAREA') return;
        onToggle(task.id);
      }}
    >
      <div className="flex items-start gap-4">
        {/* Week Icon Badge */}
        <div className="relative flex-shrink-0">
          <div 
            className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 transition-colors
              ${task.completed ? 'bg-slate-200 border-slate-300 text-slate-400' : 'bg-indigo-600 border-indigo-700 text-white'}
            `}
            style={{ boxShadow: task.completed ? 'none' : '3px 3px 0px rgba(0,0,0,0.2)' }}
          >
            <Icon name={task.icon} className="w-7 h-7" />
          </div>
          {task.completed && (
            <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-1 border-2 border-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${task.completed ? 'text-slate-400' : 'text-indigo-600'}`}>
              {task.week}
            </span>
            {task.completedDate && (
              <span className="text-[10px] font-mono text-slate-400 italic">
                COMPLETED: {task.completedDate}
              </span>
            )}
          </div>
          <h3 className={`text-lg font-bold leading-tight mb-1 ${task.completed ? 'text-slate-500 line-through decoration-slate-300' : 'text-slate-900'}`}>
            {task.title}
          </h3>
          <p className={`text-sm ${task.completed ? 'text-slate-400' : 'text-slate-600'}`}>
            {task.description}
          </p>

          {/* Action Row */}
          <div className="mt-3 flex items-center gap-3">
            <button 
              onClick={() => setShowNotes(!showNotes)}
              className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide transition-colors
                ${showNotes ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}
              `}
            >
              <Icon name="FileText" className="w-3 h-3" />
              {showNotes ? 'Hide Notes' : (task.notes ? 'Edit Notes' : 'Add Note')}
            </button>
            {task.notes && !showNotes && (
              <span className="text-[10px] font-mono text-indigo-400 truncate max-w-[150px]">
                {task.notes}
              </span>
            )}
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center self-start pt-6">
          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all
            ${task.completed ? 'bg-green-500 border-green-500' : 'bg-white border-slate-300'}
          `}>
            {task.completed && (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Notes Area */}
      {showNotes && (
        <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <textarea
            value={task.notes}
            onChange={(e) => onUpdateNotes(task.id, e.target.value)}
            placeholder="Type your notes here... links, key takeaways, progress thoughts..."
            className="w-full h-24 p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none placeholder:text-slate-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
