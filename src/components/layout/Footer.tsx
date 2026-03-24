import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Hash, Camera, Globe, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link to="/" className="logo flex-center gap-sm" style={{ justifyContent: 'flex-start', marginBottom: '16px' }}>
              <Rocket className="text-cyan" size={28} />
              <span className="logo-text" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem' }}>
                DROLYM<span className="text-cyan">PICS</span>
              </span>
            </Link>
            <p className="footer-desc">
              The premier championship for Unmanned Aerial Vehicles. Bringing together the brightest minds and fastest thumbs in the drone racing and engineering world.
            </p>
            <div className="social-links flex-center gap-md" style={{ justifyContent: 'flex-start', marginTop: '24px' }}>
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Camera size={20} /></a>
              <a href="#" className="social-icon"><Hash size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Competition</h4>
            <ul>
              <li><Link to="/rules">Rules & Guidelines</Link></li>
              <li><Link to="/standings">Current Standings</Link></li>
              <li><Link to="/vault">The Vault (Gallery)</Link></li>
              <li><Link to="/news">Latest News</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">About</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/organizers">Organizers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <ul className="flex-col gap-sm">
              <li className="flex-center gap-sm" style={{ justifyContent: 'flex-start' }}>
                <Mail size={16} className="text-cyan" />
                <span>info@drolympics.com</span>
              </li>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>
                Based in the future.
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom flex-between">
          <p>&copy; {new Date().getFullYear()} Drolympics. All rights reserved.</p>
          <div className="flex-center gap-md">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-card);
          border-top: 1px solid var(--border-glass);
          padding-top: 80px;
          padding-bottom: 32px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }

        .footer-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: #FFF;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: var(--primary-cyan);
          color: #000;
          transform: translateY(-3px);
          box-shadow: 0 0 15px var(--primary-cyan-glow);
        }

        .footer-title {
          font-size: 1.1rem;
          margin-bottom: 24px;
          color: #FFF;
        }

        .footer-links ul li {
          margin-bottom: 12px;
        }

        .footer-links ul li a {
          color: var(--text-muted);
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-links ul li a:hover {
          color: var(--primary-cyan);
        }

        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid var(--border-light);
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-bottom a {
          transition: color 0.3s ease;
        }

        .footer-bottom a:hover {
          color: var(--primary-cyan);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
