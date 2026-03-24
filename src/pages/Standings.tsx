import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import { fetchStandings } from '../services/api';

// Mock Data (fallback)
const mockTeamStandings = [
  { id: '1', name: 'Aero Dynamics X', category: { name: 'Multi-Rotor' }, score: 4250 },
  { id: '2', name: 'Sky Predators', category: { name: 'Fixed-Wing' }, score: 4100 },
  { id: '3', name: 'Velocity Drones', category: { name: 'Multi-Rotor' }, score: 3950 },
  { id: '4', name: 'Neon Flight', category: { name: 'Hybrid VTOL' }, score: 3800 },
  { id: '5', name: 'Silent Blades', category: { name: 'Single-Rotor' }, score: 3500 },
];

const Standings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'teams' | 'individuals'>('teams');
  const [teamStandings, setTeamStandings] = useState(mockTeamStandings);

  useEffect(() => {
    fetchStandings().then((data) => {
      if (data && data.length > 0) setTeamStandings(data);
    }).catch(() => {});
  }, []);

  return (
    <div className="section container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="text-center mb-xl">
        <h1 className="hero-title animate-fade-in" style={{ fontSize: '3.5rem' }}>
          GLOBAL <span className="text-cyan">STANDINGS</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Track the live leaderboard. Season 2026 is heating up as teams fight for the championship title.
        </p>
      </div>

      <div className="tabs-container flex-center gap-md mb-lg">
        <button 
          className={`btn ${activeTab === 'teams' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('teams')}
        >
          Team Rankings
        </button>
        <button 
          className={`btn ${activeTab === 'individuals' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('individuals')}
        >
          Individual Pilots
        </button>
      </div>

      <div className="glass-panel p-lg animate-fade-in" style={{ animationDelay: '0.2s', padding: '32px' }}>
        <div className="table-responsive">
          <table className="standings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>{activeTab === 'teams' ? 'Team Name' : 'Pilot Name'}</th>
                {activeTab === 'individuals' && <th>Team</th>}
                <th>Category</th>
                <th className="text-right">Total Points</th>
              </tr>
            </thead>
            <tbody>
              {teamStandings.map((team, index) => (
                <tr key={team.id} className="table-row">
                  <td className="rank-cell">
                    {index === 0 && <Trophy size={20} className="text-orange" />}
                    {index === 1 && <Medal size={20} style={{ color: '#C0C0C0' }} />}
                    {index === 2 && <Award size={20} style={{ color: '#CD7F32' }} />}
                    {index > 2 && <span className="text-muted">#{index + 1}</span>}
                  </td>
                  <td className="font-bold">{team.name}</td>
                  <td>
                    <span className="badge">{team.category?.name || 'N/A'}</span>
                  </td>
                  <td className="text-right font-bold text-cyan text-lg">
                    {team.score.toLocaleString()} PTS
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scoped Styles */}
      <style>{`
        .mb-xl { margin-bottom: 48px; }
        .max-w-2xl { max-width: 800px; }
        .font-bold { font-weight: 700; }
        .text-lg { font-size: 1.1rem; }
        .text-right { text-align: right; }

        .standings-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .standings-table th {
          padding: 16px 24px;
          border-bottom: 2px solid var(--border-light);
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
        }

        .standings-table td {
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-glass);
          vertical-align: middle;
        }

        .table-row {
          transition: background 0.3s ease;
        }

        .table-row:hover {
          background: rgba(0, 240, 255, 0.05);
        }

        .rank-cell {
          width: 80px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .table-responsive {
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
};

export default Standings;
