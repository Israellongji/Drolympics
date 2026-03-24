import React, { useState } from 'react';
import { Users, Activity, Crosshair, Award, Plus, Trash2 } from 'lucide-react';

const TeamDashboard: React.FC = () => {
  const [pilots, setPilots] = useState([
    { id: 1, name: 'Alex "Maverick" Chen', role: 'Lead Pilot' },
    { id: 2, name: 'Samantha Vance', role: 'Chief Engineer' }
  ]);
  const [newPilot, setNewPilot] = useState('');

  const addPilot = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPilot.trim()) {
      setPilots([...pilots, { id: Date.now(), name: newPilot, role: 'Support Pilot' }]);
      setNewPilot('');
    }
  };

  const removePilot = (id: number) => {
    setPilots(pilots.filter(p => p.id !== id));
  };

  return (
    <div className="section container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      <div className="flex-between mb-xl align-start">
        <div>
          <h1 className="text-3xl font-bold">Neon <span className="text-cyan">Flight</span> Command</h1>
          <p className="text-muted">Welcome to your team telemetry dashboard.</p>
        </div>
        <div className="badge border-cyan px-md py-sm">
          Status: <span className="text-cyan">Online & Cleared for Flight</span>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="flex-col gap-lg">
          
          {/* Competition Stats */}
          <div className="glass-panel p-lg">
            <h2 className="text-xl font-bold flex-center justify-start gap-sm mb-md">
              <Activity className="text-orange" /> Competition Status
            </h2>
            <div className="grid-2 gap-md mt-sm">
              <div className="stat-box">
                <p className="text-muted text-sm uppercase">Category</p>
                <p className="text-lg font-bold">Hybrid VTOL</p>
              </div>
              <div className="stat-box">
                <p className="text-muted text-sm uppercase">Global Rank</p>
                <p className="text-lg font-bold text-cyan">#4</p>
              </div>
              <div className="stat-box">
                <p className="text-muted text-sm uppercase">Total Points</p>
                <p className="text-lg font-bold">3,800 PTS</p>
              </div>
              <div className="stat-box">
                <p className="text-muted text-sm uppercase">Next Race</p>
                <p className="text-lg font-bold">Neo-Tokyo Cir.</p>
              </div>
            </div>
          </div>

          {/* Telemetry/Awards Placeholder */}
          <div className="glass-panel p-lg">
             <h2 className="text-xl font-bold flex-center justify-start gap-sm mb-md">
              <Award className="text-blue" /> Team Achievements
            </h2>
            <div className="flex-col gap-sm">
              <div className="achievement-row flex-between p-sm glass-bg rounded">
                <span className="flex-center gap-sm"><Crosshair size={16} className="text-cyan" /> Fastest Lap - Season 2025</span>
                <span className="text-muted text-sm">Oct 2025</span>
              </div>
              <div className="achievement-row flex-between p-sm glass-bg rounded">
                <span className="flex-center gap-sm"><Crosshair size={16} className="text-orange" /> Perfect Landing Series</span>
                <span className="text-muted text-sm">Sep 2025</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Roster) */}
        <div className="glass-panel p-lg">
          <h2 className="text-xl font-bold flex-center justify-start gap-sm mb-lg">
            <Users className="text-cyan" /> Active Roster
          </h2>

          <div className="roster-list flex-col gap-md mb-lg">
            {pilots.map(pilot => (
              <div key={pilot.id} className="pilot-card flex-between p-md glass-bg border-light rounded">
                <div>
                  <h3 className="font-bold">{pilot.name}</h3>
                  <p className="text-muted text-sm">{pilot.role}</p>
                </div>
                {pilot.role === 'Support Pilot' && (
                  <button onClick={() => removePilot(pilot.id)} className="icon-btn text-muted hover-red">
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={addPilot} className="add-pilot-form p-md border-light rounded border-dashed">
            <p className="text-sm font-bold mb-sm text-muted">Register New Pilot</p>
            <div className="flex-center gap-sm">
              <input 
                type="text" 
                className="input-field w-full" 
                placeholder="Pilot Name" 
                value={newPilot}
                onChange={e => setNewPilot(e.target.value)}
              />
              <button type="submit" className="btn btn-outline p-sm flex-center">
                <Plus size={20} />
              </button>
            </div>
          </form>

        </div>
      </div>

      <style>{`
        .mb-xl { margin-bottom: 40px; }
        .mb-lg { margin-bottom: 24px; }
        .mb-md { margin-bottom: 16px; }
        .mb-sm { margin-bottom: 8px; }
        .mt-sm { margin-top: 16px; }
        .p-lg { padding: 32px; }
        .p-md { padding: 16px; }
        .p-sm { padding: 12px; }
        .px-md { padding-left: 16px; padding-right: 16px; }
        .py-sm { padding-top: 8px; padding-bottom: 8px; }
        
        .align-start { align-items: flex-start; }
        .justify-start { justify-content: flex-start; }
        
        .text-3xl { font-size: 2.2rem; }
        .text-xl { font-size: 1.3rem; }
        .text-lg { font-size: 1.1rem; }
        .text-sm { font-size: 0.85rem; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .w-full { width: 100%; }
        
        .border-cyan { border: 1px solid var(--primary-cyan); border-radius: 20px; }
        .border-light { border: 1px solid var(--border-light); }
        .border-dashed { border-style: dashed; }
        .rounded { border-radius: 8px; }
        .glass-bg { background: rgba(255, 255, 255, 0.03); }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .stat-box {
          padding: 16px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          border: 1px solid rgba(0, 240, 255, 0.1);
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hover-red:hover { color: var(--accent-orange); }

        @media (max-width: 992px) {
          .dashboard-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default TeamDashboard;
