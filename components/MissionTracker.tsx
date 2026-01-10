
import React from 'react';

interface MissionTrackerProps {
  completedCount: number;
  totalCount: number;
}

const MissionTracker: React.FC<MissionTrackerProps> = ({ completedCount, totalCount }) => {
  const percentage = (completedCount / totalCount) * 100;

  return (
    <div className="retro-card p-6 rounded-xl mb-12 bg-slate-900 text-white border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-1 text-teal-400">Mission Status</h2>
          <p className="text-slate-400 text-sm font-mono">
            OPERATOR: USER_01 | PHASE: {completedCount === totalCount ? 'COMPLETE' : `WK_${completedCount + 1}`}
          </p>
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-mono text-slate-400">PROGRESS: {percentage.toFixed(0)}%</span>
            <span className="text-xs font-mono text-slate-400">{completedCount} / {totalCount} MISSIONS</span>
          </div>
          <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700 p-0.5">
            <div 
              className="h-full bg-teal-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
          <div className={`w-3 h-3 rounded-full ${completedCount === totalCount ? 'bg-green-500 animate-pulse' : 'bg-teal-500 animate-pulse'}`}></div>
          <span className="text-sm font-mono font-bold tracking-widest">
            {completedCount === totalCount ? 'SYSTEMS_MAXED' : 'SYSTEMS_ONLINE'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MissionTracker;
