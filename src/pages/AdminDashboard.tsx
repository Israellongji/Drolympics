import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Database, ShieldAlert, Edit, Users, UploadCloud, Bell, LogOut } from 'lucide-react';
import { fetchTeams, createNews } from '../services/api';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
  const [activeTab, setActiveTab] = useState<'overview' | 'teams' | 'content'>('overview');
  
  const [teams, setTeams] = useState<any[]>([]);
  const [totalPilots, setTotalPilots] = useState(0);

  // News form state
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    fetchTeams().then((data) => {
      if (data && Array.isArray(data)) {
        setTeams(data);
        setTotalPilots(data.reduce((sum: number, t: any) => sum + (t.pilots?.length || 0), 0));
      }
    }).catch(() => {});
  }, []);

  const handlePublishNews = async () => {
    if (!newsTitle || !newsContent) return;
    setPublishing(true);
    try {
      await createNews({ title: newsTitle, content: newsContent });
      setNewsTitle('');
      setNewsContent('');
      alert('News published successfully!');
    } catch {
      alert('Failed to publish news.');
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="section container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      <div className="dashboard-header mb-xl">
        <div className="header-text">
          <h1 className="text-3xl font-bold text-orange">Admin <span className="text-white">Central</span></h1>
          <p className="text-muted">Master control system for Drolympics.</p>
        </div>
        <div className="header-actions">
          <div className="badge border-orange px-md py-sm status-badge">
            <ShieldAlert size={16} className="text-orange" />
            <span className="text-orange">Level 5 Access</span>
          </div>
          <button onClick={handleLogout} className="btn btn-logout flex-center gap-sm">
            <LogOut size={16} /> <span className="logout-text">Sign Out</span>
          </button>
        </div>
      </div>

      <div className="tabs-container flex-center gap-md mb-lg" style={{ justifyContent: 'flex-start', overflowX: 'auto', paddingBottom: '8px' }}>
        <button 
          className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-outline-sleek'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`btn ${activeTab === 'teams' ? 'btn-primary' : 'btn-outline-sleek'}`}
          onClick={() => setActiveTab('teams')}
        >
          Manage Teams
        </button>
        <button 
          className={`btn ${activeTab === 'content' ? 'btn-primary' : 'btn-outline-sleek'}`}
          onClick={() => setActiveTab('content')}
        >
          Manage Content
        </button>
      </div>

      <div className="glass-panel p-xl sleek-card">
        
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in flex-col gap-xl">
            <h2 className="text-xl font-bold flex-center justify-start gap-sm border-b pb-md">
              <Database className="text-cyan" /> System Analytics
            </h2>
            <div className="grid-3 gap-lg">
              <div className="stat-card sleek-stat">
                <p className="text-muted text-xs uppercase letter-spacing">Total Registered Teams</p>
                <p className="text-4xl font-bold mt-sm text-cyan">{teams.length}</p>
              </div>
              <div className="stat-card sleek-stat">
                <p className="text-muted text-xs uppercase letter-spacing">Total Active Pilots</p>
                <p className="text-4xl font-bold mt-sm text-blue">{totalPilots}</p>
              </div>
              <div className="stat-card sleek-stat">
                <p className="text-muted text-xs uppercase letter-spacing">System Uptime</p>
                <p className="text-4xl font-bold mt-sm text-orange">99.9%</p>
              </div>
            </div>
          </div>
        )}

        {/* MANAGE TEAMS TAB */}
        {activeTab === 'teams' && (
          <div className="animate-fade-in flex-col gap-lg">
            <h2 className="text-xl font-bold flex-center justify-start gap-sm border-b pb-md">
              <Users className="text-blue" /> Team Management
            </h2>
            <p className="text-muted text-sm mb-sm">Adjust maximum roster sizes or ban teams from the competition.</p>
            
            <div className="table-responsive">
              <table className="admin-table w-full">
                <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Category</th>
                    <th className="text-center">Pilots</th>
                    <th className="text-center">Score</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map(team => (
                    <tr key={team.id} className="sleek-tr">
                      <td className="font-bold">{team.name}</td>
                      <td><span className="badge">{team.category?.name || 'N/A'}</span></td>
                      <td className="text-center">{team.pilots?.length || 0}</td>
                      <td className="text-center font-bold text-cyan">{team.score}</td>
                      <td className="text-right flex-center gap-sm" style={{ justifyContent: 'flex-end' }}>
                         <button className="icon-btn-sleek"><Edit size={14} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CONTENT MANAGEMENT TAB */}
        {activeTab === 'content' && (
          <div className="animate-fade-in flex-col gap-lg">
            <h2 className="text-xl font-bold flex-center justify-start gap-sm border-b pb-md">
              <UploadCloud className="text-purple" /> Content Publishing
            </h2>
            
            <div className="grid-2 gap-lg">
              
              {/* Post News */}
              <div className="content-box bg-dark-sleek p-lg rounded border-light">
                <h3 className="font-bold flex-center justify-start gap-sm mb-md"><Bell size={18} className="text-cyan" /> Push News Update</h3>
                <form className="flex-col gap-sm" onSubmit={(e) => { e.preventDefault(); handlePublishNews(); }}>
                  <input type="text" className="input-field" placeholder="Headline" value={newsTitle} onChange={e => setNewsTitle(e.target.value)} />
                  <textarea className="input-field" rows={4} placeholder="Article content..." value={newsContent} onChange={e => setNewsContent(e.target.value)}></textarea>
                  <button type="submit" className="btn btn-primary mt-sm" disabled={publishing}>{publishing ? 'Publishing...' : 'Publish Post'}</button>
                </form>
              </div>

              {/* Upload to Vault */}
              <div className="content-box bg-dark-sleek p-lg rounded border-light">
                <h3 className="font-bold flex-center justify-start gap-sm mb-md"><UploadCloud size={18} className="text-orange" /> Upload to Vault</h3>
                <div className="upload-dropzone flex-center flex-col gap-sm text-center">
                  <UploadCloud size={32} className="text-muted" />
                  <p className="text-muted text-sm">Drag and drop media files here, or click to browse</p>
                  <button type="button" className="btn btn-outline-sleek text-sm mt-sm">Browse Files</button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      <style>{`
        .mb-xl { margin-bottom: 40px; }
        .mb-lg { margin-bottom: 32px; }
        .mb-md { margin-bottom: 16px; }
        .mb-sm { margin-bottom: 8px; }
        .mt-sm { margin-top: 16px; }
        .p-xl { padding: 40px; }
        .p-lg { padding: 24px; }
        .pb-md { padding-bottom: 16px; }
        
        .align-start { align-items: flex-start; }
        .justify-start { justify-content: flex-start; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        
        .text-4xl { font-size: 2.8rem; }
        .text-3xl { font-size: 2.2rem; }
        .text-xl { font-size: 1.3rem; }
        .text-sm { font-size: 0.95rem; }
        .text-xs { font-size: 0.75rem; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .letter-spacing { letter-spacing: 1px; }
        .w-full { width: 100%; }

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
          background: rgba(255, 109, 0, 0.05);
          font-weight: 600;
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

        .btn-outline-sleek {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
        }

        .btn-outline-sleek:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #FFF;
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
          border-color: rgba(255, 109, 0, 0.3);
          transform: translateY(-2px);
        }

        .sleek-tr {
          transition: background 0.3s ease;
        }

        .sleek-tr:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .icon-btn-sleek {
          background: rgba(255, 255, 255, 0.05);
          border: none;
          color: var(--text-muted);
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .icon-btn-sleek:hover {
          background: rgba(0, 240, 255, 0.1);
          color: var(--primary-cyan);
        }

        .bg-dark-sleek {
          background: rgba(0, 0, 0, 0.2);
        }

        .admin-table { border-collapse: collapse; }
        .admin-table th { 
          padding: 16px; 
          border-bottom: 2px solid var(--border-light); 
          color: var(--text-muted); 
          text-align: left; 
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .admin-table td { 
          padding: 16px; 
          border-bottom: 1px solid var(--border-glass); 
          vertical-align: middle;
        }

        .upload-dropzone {
          border: 2px dashed rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 40px 20px;
          background: rgba(255,255,255,0.01);
          transition: border 0.3s ease;
        }
        .upload-dropzone:hover { border-color: var(--accent-orange); }

        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

        /* Mobile Responsiveness Improvements */
        @media (max-width: 992px) {
          .grid-3 { grid-template-columns: 1fr; }
          .grid-2 { grid-template-columns: 1fr; }
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
          .p-xl { padding: 24px; }
          .status-badge { font-size: 0.8rem; }
          .stat-card .text-4xl { font-size: 2rem; }
        }

        @media (max-width: 480px) {
          .header-actions { flex-direction: column; gap: 10px; align-items: flex-start; }
          .btn-logout { width: 100%; justify-content: center; }
          .status-badge { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
