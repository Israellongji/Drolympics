import React from 'react';
import { Mail, Hash, Globe } from 'lucide-react';

const Organizers: React.FC = () => {
  const team = [
    {
      name: 'Dr. Emily Chen',
      role: 'League Commissioner',
      bg: 'Deep Tech Innovator. Former aerospace engineer with 15 years experience in autonomous flight systems.',
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Operations',
      bg: 'Ensures the competition runs smoothly. Veteran logistics director for international racing events.',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Chief Safety Officer',
      bg: 'Writes and enforces the rules that keep pilots and spectators safe during high-speed maneuvers.',
    },
    {
      name: 'Jaxon "Jet" Lee',
      role: 'Community Lead',
      bg: 'The voice of Drolympics. Handles community outreach, broadcast commentary, and pilot relations.',
    }
  ];

  return (
    <div className="section container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="text-center mb-xl">
        <h1 className="hero-title animate-fade-in" style={{ fontSize: '3.5rem' }}>
          MEET THE <span className="text-blue">ORGANIZERS</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          The brilliant minds behind the world's most advanced aerial racing competition.
        </p>
      </div>

      <div className="organizers-grid animate-fade-in flex-center flex-wrap gap-xl" style={{ animationDelay: '0.2s', alignItems: 'stretch' }}>
        {team.map((person, index) => (
          <div key={index} className="glass-panel organizer-card text-center p-xl">
            <div className="avatar mx-auto mb-md"></div>
            <h2 className="text-xl font-bold">{person.name}</h2>
            <p className="text-cyan mb-md text-sm font-bold uppercase tracking-wide">{person.role}</p>
            <p className="text-muted leading-relaxed mb-lg flex-1">{person.bg}</p>
            
            <div className="social-links flex-center gap-md">
              <a href="#" className="social-btn"><Globe size={18} /></a>
              <a href="#" className="social-btn"><Hash size={18} /></a>
              <a href="#" className="social-btn"><Mail size={18} /></a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .mb-xl { margin-bottom: 48px; }
        .p-xl { padding: 40px; }
        .mb-md { margin-bottom: 16px; }
        .mb-lg { margin-bottom: 24px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-xl { font-size: 1.5rem; color: #FFF; }
        .font-bold { font-weight: 700; }
        .text-sm { font-size: 0.85rem; }
        .uppercase { text-transform: uppercase; }
        .tracking-wide { letter-spacing: 1px; }
        .leading-relaxed { line-height: 1.6; }
        .flex-1 { flex: 1; }

        .organizer-card {
          width: 300px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .organizer-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 136, 255, 0.2);
        }

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--bg-card), rgba(0, 136, 255, 0.4));
          border: 2px solid var(--primary-cyan);
        }

        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: var(--primary-cyan);
          color: #000;
          box-shadow: 0 0 10px var(--primary-cyan-glow);
        }
      `}</style>
    </div>
  );
};

export default Organizers;
