import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { loginUser } from '../services/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      if (data.user.role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section container flex-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      <div className="glass-panel auth-card animate-fade-in p-xl w-full max-w-md">
        <div className="text-center mb-lg">
          <h2 className="text-3xl font-bold mb-sm">Welcome Back</h2>
          <p className="text-muted">Enter your credentials to access the command center.</p>
        </div>

        <form onSubmit={handleLogin} className="flex-col gap-md">
          {error && <div style={{ color: '#ff6b6b', background: 'rgba(255,107,107,0.1)', padding: '10px 16px', borderRadius: '8px', fontSize: '0.9rem' }}>{error}</div>}
          <div className="input-group mb-0">
            <label className="input-label">Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                className="input-field with-icon" 
                placeholder="pilot@team.com" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label flex-between">
              Password
              <a href="#" className="text-cyan text-sm">Forgot?</a>
            </label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input 
                type="password" 
                className="input-field with-icon" 
                placeholder="••••••••" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-sm flex-center" disabled={loading}>
            {loading ? 'Signing in...' : <>Login to Dashboard <ArrowRight size={18} /></>}
          </button>
        </form>

        <div className="text-center mt-lg text-muted text-sm border-t pt-md">
          Don't have a team account? <Link to="/register" className="text-cyan font-bold">Register Now</Link>
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
          background: linear-gradient(45deg, var(--primary-cyan), transparent, var(--primary-blue));
          z-index: -1;
          border-radius: 18px;
          opacity: 0.3;
        }

        .max-w-md { max-width: 450px; }
        .w-full { width: 100%; }
        .p-xl { padding: 40px; }
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

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          color: var(--text-muted);
        }

        .input-field.with-icon {
          padding-left: 48px;
        }
      `}</style>
    </div>
  );
};

export default Login;
