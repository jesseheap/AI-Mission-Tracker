
import React from 'react';
import { Task } from '../types';
import Icon from './Icon';

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle }) => {
  return (
    <div 
      className={`retro-card p-6 rounded-xl cursor-pointer select-none ${task.completed ? 'checked-card' : 'bg-white'}`}
      onClick={() => onToggle(task.id)}
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
        </div>

        {/* Checkbox */}
        <div className="flex items-center self-center pl-2">
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
    </div>
  );
};

export default TaskCard;
