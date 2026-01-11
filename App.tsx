
import React, { useState, useEffect, useCallback } from 'react';
import { Task, AppState } from './types';
import { INITIAL_TASKS, STORAGE_KEY } from './constants';
import TaskCard from './components/TaskCard';
import MissionTracker from './components/MissionTracker';
import Icon from './components/Icon';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  // Utility to clean non-printable control characters
  const sanitizeInput = (str: string) => {
    return str.replace(/[\x00-\x1F\x7F]/g, "").substring(0, 2000);
  };

  // Load state from local storage with schema validation
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        
        // Hardened validation: Verify parsed is an object with a tasks array
        if (parsed && typeof parsed === 'object' && Array.isArray(parsed.tasks)) {
          const validatedTasks = parsed.tasks.map((t: any) => {
            const original = INITIAL_TASKS.find(it => it.id === t.id);
            if (!original) return null; // Drop tasks that no longer exist in missions

            // Basic type checking and field fallback
            return {
              ...original,
              completed: typeof t.completed === 'boolean' ? t.completed : original.completed,
              completedDate: typeof t.completedDate === 'string' ? t.completedDate : (t.completed ? new Date().toLocaleDateString() : null),
              notes: sanitizeInput(typeof t.notes === 'string' ? t.notes : ""),
            } as Task;
          }).filter((t): t is Task => t !== null);

          // Ensure we have all current missions even if some were missing from storage
          const finalSet = INITIAL_TASKS.map(it => {
            const existing = validatedTasks.find(vt => vt.id === it.id);
            return existing || it;
          });

          setTasks(finalSet);
        } else {
          throw new Error("Invalid structure");
        }
      } catch (e) {
        console.warn("Storage corruption detected. Reverting to mission defaults.");
        setTasks(INITIAL_TASKS);
      }
    } else {
      setTasks(INITIAL_TASKS);
    }
    setLoading(false);
  }, []);

  // Save state whenever tasks change
  useEffect(() => {
    if (!loading) {
      const stateToSave: AppState = {
        tasks,
        userName: 'Operator'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }
  }, [tasks, loading]);

  const handleToggleTask = useCallback((id: number) => {
    const targetTask = tasks.find(t => t.id === id);
    if (!targetTask) return;

    const willBeCompleted = !targetTask.completed;

    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          const nowCompleted = !task.completed;
          return {
            ...task,
            completed: nowCompleted,
            completedDate: nowCompleted ? new Date().toLocaleDateString() : null
          };
        }
        return task;
      });
    });

    if (willBeCompleted) {
      const fire = (window as any).confetti;
      if (typeof fire === 'function') {
        fire({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0d9488', '#4f46e5', '#f59e0b', '#10b981', '#6366f1'],
          zIndex: 9999,
          disableForReducedMotion: true
        });
      }
    }
  }, [tasks]);

  const handleUpdateNotes = useCallback((id: number, notes: string) => {
    // Sanitize and cap during update
    const cleanedNotes = sanitizeInput(notes);
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === id ? { ...task, notes: cleanedNotes } : task
    ));
  }, []);

  const resetAll = () => {
    if (confirm('System override: Are you sure you want to reset all progress?')) {
      setTasks(INITIAL_TASKS);
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;

  if (loading) return null;

  return (
    <div className="min-h-screen pb-20">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-indigo-700">
                AI
              </div>
              <div className="hidden sm:block leading-tight">
                <span className="block font-bold text-slate-900 tracking-tighter text-lg">DAILY BRIEF</span>
                <span className="block text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">Mastery Program</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={resetAll}
                className="text-xs font-mono font-bold text-slate-400 hover:text-red-500 transition-colors uppercase"
              >
                [ RESET_DATA ]
              </button>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                </div>
                <span className="text-xs font-bold text-slate-700">OPERATOR_01</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="text-center mb-12">
          <p className="text-sm font-bold text-indigo-600 uppercase tracking-[0.3em] mb-3">Target Objective: Level Up</p>
          <h1 className="text-5xl font-extrabold tracking-tighter text-slate-900 mb-4">
            10-Week Challenge
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto font-medium">
            Master the cutting edge of artificial intelligence. Your progress is saved locally. Complete missions to unlock the full potential of AI.
          </p>
        </header>

        <MissionTracker 
          completedCount={completedCount} 
          totalCount={tasks.length} 
        />

        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Mission Registry</h2>
            <span className="text-xs font-mono text-slate-400">{completedCount} of {tasks.length} missions active</span>
          </div>
          
          {tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onToggle={handleToggleTask} 
              onUpdateNotes={handleUpdateNotes}
            />
          ))}

          <div className="mt-12 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-slate-200"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Classified</span>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            <div className="retro-card p-6 rounded-xl bg-slate-50 border-dashed">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center border-2 border-slate-300 bg-slate-200 text-slate-400">
                  <Icon name="Trophy" className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Final Evaluation</span>
                  </div>
                  <h3 className="font-bold text-slate-700">The Grand Synthesis</h3>
                  <p className="text-sm text-slate-500">Available upon completion of all 10 core missions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs font-mono text-slate-400">
            SYSTEM_STATUS: STABLE | BUILD: 2025.1.5
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
