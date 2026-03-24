import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Activity, Crosshair, Award, Plus, Trash2, LogOut } from 'lucide-react';

const TeamDashboard: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

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
      
      <div className="dashboard-header mb-xl">
        <div className="header-text">
          <h1 className="text-3xl font-bold">Neon <span className="text-cyan">Flight</span> Command</h1>
          <p className="text-muted">Welcome to your team telemetry dashboard.</p>
        </div>
        <div className="header-actions">
          <div className="badge border-cyan px-md py-sm status-badge">
            <span className="pulse-dot"></span> Status: <span className="text-cyan">Flight Ready</span>
          </div>
          <button onClick={handleLogout} className="btn btn-logout flex-center gap-sm">
            <LogOut size={16} /> <span className="logout-text">Sign Out</span>
          </button>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="flex-col gap-lg">
          
          {/* Competition Stats */}
          <div className="glass-panel p-lg sleek-card">
            <h2 className="text-xl font-bold flex-center justify-start gap-sm mb-md">
              <Activity className="text-orange" /> Competition Status
            </h2>
            <div className="grid-2-mobile gap-md mt-sm">
              <div className="stat-box sleek-stat">
                <p className="text-muted text-xs uppercase letter-spacing">Category</p>
                <p className="text-lg font-bold">Hybrid VTOL</p>
              </div>
              <div className="stat-box sleek-stat">
                <p className="text-muted text-xs uppercase letter-spacing">Global Rank</p>
                <p className="text-lg font-bold text-cyan">#4</p>
              </div>
              <div className="stat-box sleek-stat">
                <p className="text-muted text-xs uppercase letter-spacing">Total Points</p>
                <p className="text-lg font-bold">3,800 PTS</p>
              </div>
              <div className="stat-box sleek-stat">
                <p className="text-muted text-xs uppercase letter-spacing">Next Race</p>
                <p className="text-lg font-bold">Neo-Tokyo Cir.</p>
              </div>
            </div>
          </div>

          {/* Telemetry/Awards Placeholder */}
          <div className="glass-panel p-lg sleek-card">
             <h2 className="text-xl font-bold flex-center justify-start gap-sm mb-md">
              <Award className="text-blue" /> Team Achievements
            </h2>
            <div className="flex-col gap-sm">
              <div className="achievement-row flex-between p-sm sleek-item rounded">
                <span className="flex-center gap-sm"><Crosshair size={16} className="text-cyan" /> Fastest Lap - Season 2025</span>
                <span className="text-muted text-xs">Oct 2025</span>
              </div>
              <div className="achievement-row flex-between p-sm sleek-item rounded">
                <span className="flex-center gap-sm"><Crosshair size={16} className="text-orange" /> Perfect Landing Series</span>
                <span className="text-muted text-xs">Sep 2025</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Roster) */}
        <div className="glass-panel p-lg sleek-card">
          <h2 className="text-xl font-bold flex-center justify-start gap-sm mb-lg">
            <Users className="text-cyan" /> Active Roster
          </h2>

          <div className="roster-list flex-col gap-md mb-lg">
            {pilots.map(pilot => (
              <div key={pilot.id} className="pilot-card flex-between p-md sleek-item border-light rounded">
                <div>
                  <h3 className="font-bold">{pilot.name}</h3>
                  <p className="text-muted text-xs">{pilot.role}</p>
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
            <p className="text-xs font-bold mb-sm text-muted uppercase letter-spacing">Register New Pilot</p>
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
        .text-sm { font-size: 0.95rem; }
        .text-xs { font-size: 0.75rem; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .letter-spacing { letter-spacing: 1px; }
        .w-full { width: 100%; }
        
        .border-cyan { border: 1px solid var(--primary-cyan); border-radius: 20px; }
        .border-light { border: 1px solid var(--border-light); }
        .border-dashed { border-style: dashed; }
        .rounded { border-radius: 8px; }

        /* Sleek Dashboard Enhancements */
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 20px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 240, 255, 0.05);
          font-weight: 600;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: var(--primary-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary-cyan);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        .btn-logout {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #FFF;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .btn-logout:hover {
          background: rgba(255, 109, 0, 0.1);
          border-color: var(--accent-orange);
          color: var(--accent-orange);
          box-shadow: 0 0 15px rgba(255, 109, 0, 0.2);
        }

        .sleek-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .sleek-stat {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .sleek-stat:hover {
          border-color: rgba(0, 240, 255, 0.3);
          transform: translateY(-2px);
        }

        .sleek-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .sleek-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
        }

        .grid-2-mobile {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .hover-red:hover { color: var(--accent-orange); transform: scale(1.1); }

        /* Mobile Responsiveness Improvements */
        @media (max-width: 992px) {
          .dashboard-grid { 
            grid-template-columns: 1fr; 
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .section.container { 
            padding-top: 40px !important;
            padding-left: 20px;
            padding-right: 20px;
          }

          .text-3xl { font-size: 1.8rem; }
          .dashboard-header { flex-direction: column; align-items: flex-start; }
          .header-actions { width: 100%; justify-content: space-between; margin-top: 10px; }
          .p-lg { padding: 24px; }
          .status-badge { font-size: 0.8rem; }
        }

        @media (max-width: 480px) {
          .grid-2-mobile { grid-template-columns: 1fr; }
          .header-actions { flex-direction: column; gap: 10px; align-items: flex-start; }
          .btn-logout { width: 100%; justify-content: center; }
          .status-badge { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default TeamDashboard;
