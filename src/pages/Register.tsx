import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Info, Settings, Shield, ArrowRight } from 'lucide-react';
import { registerTeam } from '../services/api';

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [engineerName, setEngineerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('multi-rotor');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await registerTeam({
        name: teamName,
        captainName,
        engineerName,
        email,
        password,
        category,
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section container flex-center" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '40px' }}>
      
      <div className="glass-panel auth-card animate-fade-in p-xl w-full max-w-lg">
        
        {/* Progress Tracker */}
        <div className="progress-tracker flex-between mb-xl relative">
          <div className="progress-line" style={{ width: step === 1 ? '0%' : '100%' }}></div>
          
          <div className={`step-circle ${step >= 1 ? 'active' : ''}`}>
            <Info size={16} />
            <span className="step-label">Basic Info</span>
          </div>
          <div className={`step-circle ${step >= 2 ? 'active' : ''}`}>
            <Settings size={16} />
            <span className="step-label">Category</span>
          </div>
        </div>

        <div className="text-center mb-lg">
          <h2 className="text-3xl font-bold mb-sm">
            {step === 1 ? 'Register Your Team' : 'Flight Category'}
          </h2>
          <p className="text-muted">
            {step === 1 ? 'Join the ultimate aerial racing league.' : 'Select the class you will compete in for the 2026 season.'}
          </p>
        </div>

        {error && <div style={{ color: '#ff6b6b', background: 'rgba(255,107,107,0.1)', padding: '10px 16px', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '16px' }}>{error}</div>}

        <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} className="flex-col gap-md">
          
          {step === 1 && (
            <div className="animate-fade-in flex-col gap-md">
              <div className="input-group mb-0">
                <label className="input-label">Team Name</label>
                <input type="text" className="input-field" placeholder="E.g. Neon Flight" required value={teamName} onChange={e => setTeamName(e.target.value)} />
              </div>

              <div className="grid-2 gap-md">
                <div className="input-group mb-0">
                  <label className="input-label">Lead Pilot Name</label>
                  <input type="text" className="input-field" placeholder="Pilot Name" required value={captainName} onChange={e => setCaptainName(e.target.value)} />
                </div>
                <div className="input-group mb-0">
                  <label className="input-label">Chief Engineer Name</label>
                  <input type="text" className="input-field" placeholder="Engineer Name" value={engineerName} onChange={e => setEngineerName(e.target.value)} />
                </div>
              </div>

              <div className="input-group mb-0">
                <label className="input-label">Contact Email</label>
                <input type="email" className="input-field" placeholder="team@domain.com" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              
              <div className="input-group mb-0">
                <label className="input-label">Password</label>
                <input type="password" className="input-field" placeholder="••••••••" required value={password} onChange={e => setPassword(e.target.value)} />
              </div>

              <button type="submit" className="btn btn-primary w-full mt-sm flex-center">
                Next Step <ArrowRight size={18} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in flex-col gap-md">
              
              <div className="category-select-grid">
                <label className="category-option">
                  <input type="radio" name="category" value="multi-rotor" checked={category === 'multi-rotor'} onChange={e => setCategory(e.target.value)} />
                  <div className="option-card flex-center gap-sm">
                    <Shield className="text-cyan" /> <span>Multi-Rotor</span>
                  </div>
                </label>
                
                <label className="category-option">
                  <input type="radio" name="category" value="fixed-wing" checked={category === 'fixed-wing'} onChange={e => setCategory(e.target.value)} />
                  <div className="option-card flex-center gap-sm">
                    <Shield className="text-orange" /> <span>Fixed-Wing</span>
                  </div>
                </label>

                <label className="category-option">
                  <input type="radio" name="category" value="single-rotor" checked={category === 'single-rotor'} onChange={e => setCategory(e.target.value)} />
                  <div className="option-card flex-center gap-sm">
                    <Shield className="text-blue" /> <span>Single-Rotor</span>
                  </div>
                </label>

                <label className="category-option">
                  <input type="radio" name="category" value="hybrid-vtol" checked={category === 'hybrid-vtol'} onChange={e => setCategory(e.target.value)} />
                  <div className="option-card flex-center gap-sm">
                    <Shield className="text-purple" /> <span>Hybrid VTOL</span>
                  </div>
                </label>

                <label className="category-option" style={{ gridColumn: 'span 2' }}>
                  <input type="radio" name="category" value="blimps" checked={category === 'blimps'} onChange={e => setCategory(e.target.value)} />
                  <div className="option-card flex-center gap-sm">
                    <Users className="text-cyan" /> <span>Unmanned Blimps / Aerostats</span>
                  </div>
                </label>
              </div>

              <div className="flex-between mt-sm gap-md">
                <button type="button" onClick={handlePrev} className="btn btn-outline" style={{ flex: 1 }}>
                  Back
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 2 }} disabled={loading}>
                  {loading ? 'Registering...' : 'Complete Registration'}
                </button>
              </div>
            </div>
          )}

        </form>

        <div className="text-center mt-lg text-muted text-sm border-t pt-md">
          Already registered? <Link to="/login" className="text-cyan font-bold">Login Here</Link>
        </div>
      </div>

      <style>{`
        .auth-card {
          position: relative;
          z-index: 10;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .auth-card::before {
          content: '';
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          background: linear-gradient(135deg, var(--primary-cyan), transparent, var(--accent-orange));
          z-index: -1;
          border-radius: 18px;
          opacity: 0.3;
        }

        .max-w-lg { max-width: 600px; }
        .w-full { width: 100%; }
        .p-xl { padding: 40px; }
        .mb-xl { margin-bottom: 40px; }
        .mb-lg { margin-bottom: 24px; }
        .mb-sm { margin-bottom: 12px; }
        .mb-0 { margin-bottom: 0; }
        .mt-sm { margin-top: 16px; }
        .mt-lg { margin-top: 24px; }
        .pt-md { padding-top: 16px; }
        
        .text-3xl { font-size: 2rem; color: #FFF; }
        .font-bold { font-weight: 700; }
        .text-sm { font-size: 0.85rem; }
        .border-t { border-top: 1px solid var(--border-light); }
        .text-purple { color: var(--secondary-purple); }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* Progress Tracker */
        .progress-tracker {
          position: relative;
          padding: 0 40px;
        }

        .progress-line {
          position: absolute;
          top: 19px;
          left: 60px;
          height: 2px;
          background: var(--primary-cyan);
          transition: width 0.4s ease;
          z-index: 1;
          box-shadow: 0 0 10px var(--primary-cyan-glow);
        }

        .progress-tracker::after {
          content: '';
          position: absolute;
          top: 19px;
          left: 60px;
          right: 60px;
          height: 2px;
          background: var(--border-light);
          z-index: 0;
        }

        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .step-circle.active {
          border-color: var(--primary-cyan);
          color: var(--primary-cyan);
          box-shadow: 0 0 15px var(--primary-cyan-glow);
        }

        .step-label {
          position: absolute;
          top: 50px;
          white-space: nowrap;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        /* Category Radio Cards */
        .category-select-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .category-option input[type="radio"] {
          display: none;
        }

        .option-card {
          padding: 16px;
          background: rgba(0,0,0,0.3);
          border: 1px solid var(--border-glass);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          color: var(--text-muted);
        }

        .category-option input[type="radio"]:checked + .option-card {
          border-color: var(--primary-cyan);
          background: rgba(0, 240, 255, 0.05);
          color: #FFF;
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.15);
        }

        @media (max-width: 576px) {
          .grid-2 { grid-template-columns: 1fr; }
          .category-select-grid { grid-template-columns: 1fr; }
          .category-option[style] { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </div>
  );
};

export default Register;
