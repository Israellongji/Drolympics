import React, { useState, useEffect } from 'react';
import { Database, ShieldAlert, Edit, Users, UploadCloud, Bell } from 'lucide-react';
import { fetchTeams, createNews } from '../services/api';

const AdminDashboard: React.FC = () => {
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
      
      <div className="flex-between mb-xl align-start">
        <div>
          <h1 className="text-3xl font-bold text-orange">Admin <span className="text-white">Central</span></h1>
          <p className="text-muted">Master control system for Drolympics.</p>
        </div>
        <div className="badge border-orange px-md py-sm flex-center gap-sm">
          <ShieldAlert size={16} className="text-orange" />
          <span className="text-orange">Level 5 Access</span>
        </div>
      </div>

      <div className="tabs-container flex-center gap-md mb-lg" style={{ justifyContent: 'flex-start' }}>
        <button 
          className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`btn ${activeTab === 'teams' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('teams')}
        >
          Manage Teams
        </button>
        <button 
          className={`btn ${activeTab === 'content' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('content')}
        >
          Manage Content
        </button>
      </div>

      <div className="glass-panel p-xl">
        
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in flex-col gap-xl">
            <h2 className="text-xl font-bold flex-center justify-start gap-sm border-b pb-md">
              <Database className="text-cyan" /> System Analytics
            </h2>
            <div className="grid-3 gap-lg">
              <div className="stat-card">
                <p className="text-muted text-sm uppercase">Total Registered Teams</p>
                <p className="text-4xl font-bold mt-sm text-cyan">{teams.length}</p>
              </div>
              <div className="stat-card">
                <p className="text-muted text-sm uppercase">Total Active Pilots</p>
                <p className="text-4xl font-bold mt-sm text-blue">{totalPilots}</p>
              </div>
              <div className="stat-card">
                <p className="text-muted text-sm uppercase">System Uptime</p>
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
                    <th>Pilots</th>
                    <th>Score</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map(team => (
                    <tr key={team.id}>
                      <td className="font-bold">{team.name}</td>
                      <td><span className="badge">{team.category?.name || 'N/A'}</span></td>
                      <td className="text-center">{team.pilots?.length || 0}</td>
                      <td className="text-center font-bold text-cyan">{team.score}</td>
                      <td className="text-right flex-center gap-sm" style={{ justifyContent: 'flex-end' }}>
                         <button className="btn btn-outline py-xs px-sm text-sm"><Edit size={14} /></button>
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
              <div className="content-box bg-dark p-lg rounded border-light">
                <h3 className="font-bold flex-center justify-start gap-sm mb-md"><Bell size={18} className="text-cyan" /> Push News Update</h3>
                <form className="flex-col gap-sm" onSubmit={(e) => { e.preventDefault(); handlePublishNews(); }}>
                  <input type="text" className="input-field" placeholder="Headline" value={newsTitle} onChange={e => setNewsTitle(e.target.value)} />
                  <textarea className="input-field" rows={4} placeholder="Article content..." value={newsContent} onChange={e => setNewsContent(e.target.value)}></textarea>
                  <button type="submit" className="btn btn-primary mt-sm" disabled={publishing}>{publishing ? 'Publishing...' : 'Publish Post'}</button>
                </form>
              </div>

              {/* Upload to Vault */}
              <div className="content-box bg-dark p-lg rounded border-light">
                <h3 className="font-bold flex-center justify-start gap-sm mb-md"><UploadCloud size={18} className="text-orange" /> Upload to Vault</h3>
                <div className="upload-dropzone flex-center flex-col gap-sm text-center">
                  <UploadCloud size={32} className="text-muted" />
                  <p className="text-muted text-sm">Drag and drop media files here, or click to browse</p>
                  <button type="button" className="btn btn-outline text-sm mt-sm">Browse Files</button>
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
        .py-xs { padding-top: 4px; padding-bottom: 4px; }
        .px-sm { padding-left: 12px; padding-right: 12px; }
        .px-md { padding-left: 16px; padding-right: 16px; }
        .py-sm { padding-top: 8px; padding-bottom: 8px; }
        
        .align-start { align-items: flex-start; }
        .justify-start { justify-content: flex-start; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        
        .text-4xl { font-size: 2.8rem; }
        .text-3xl { font-size: 2.2rem; }
        .text-xl { font-size: 1.3rem; }
        .text-sm { font-size: 0.85rem; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .w-full { width: 100%; }
        .w-20 { width: 24px; display: inline-block; }
        
        .border-orange { border: 1px solid var(--accent-orange); border-radius: 20px; }
        .border-light { border: 1px solid var(--border-light); }
        .border-b { border-bottom: 1px solid var(--border-light); }
        .rounded { border-radius: 8px; }
        .bg-dark { background: rgba(0, 0, 0, 0.3); }

        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

        .stat-card {
          padding: 24px;
          background: rgba(0,240,255,0.05);
          border: 1px solid rgba(0,240,255,0.1);
          border-radius: 12px;
        }

        .admin-table { border-collapse: collapse; }
        .admin-table th { 
          padding: 16px; 
          border-bottom: 2px solid var(--border-light); 
          color: var(--text-muted); 
          text-align: left; 
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        .admin-table td { 
          padding: 16px; 
          border-bottom: 1px solid var(--border-glass); 
          vertical-align: middle;
        }

        .limit-btn {
          width: 28px; height: 28px;
          border-radius: 4px;
          background: rgba(255,255,255,0.1);
          border: none;
          color: #FFF;
          cursor: pointer;
        }
        .limit-btn:hover:not(:disabled) { background: var(--primary-cyan); color: #000; }
        .limit-btn:disabled { opacity: 0.3; cursor: not-allowed; }

        .upload-dropzone {
          border: 2px dashed rgba(255,255,255,0.2);
          border-radius: 8px;
          padding: 40px 20px;
          background: rgba(255,255,255,0.02);
          transition: border 0.3s ease;
        }
        .upload-dropzone:hover { border-color: var(--accent-orange); }

        @media (max-width: 992px) {
          .grid-3, .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
