import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Standings', path: '/standings' },
    { name: 'Vault', path: '/vault' },
    { name: 'News', path: '/news' },
    { name: 'Rules', path: '/rules' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container flex-between h-full">
        {/* Logo */}
        <Link to="/" className="logo flex-center gap-sm">
          <Rocket className="text-cyan" size={28} />
          <span className="logo-text">
            DROLYM<span className="text-cyan">PICS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav flex-center gap-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="nav-divider"></div>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="btn btn-primary">
            Register Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} color="#00F0FF" /> : <Menu size={28} color="#00F0FF" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel animate-fade-in">
          <div className="flex-col gap-md">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="mobile-divider" />
            <Link to="/login" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
              Register Now
            </Link>
          </div>
        </div>
      )}

      {/* Scoped Styles for Navbar */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-height);
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        
        .navbar.scrolled {
          height: 70px;
          border-radius: 0;
          border-left: none;
          border-right: none;
          border-top: none;
        }

        .h-full { height: 100%; }
        
        .logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 1px;
        }

        .logo-text { color: #FFF; }
        
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: #FFF;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-cyan);
          transition: width 0.3s ease;
          box-shadow: 0 0 10px var(--primary-cyan-glow);
        }

        .nav-link.active::after, .nav-link:hover::after {
          width: 100%;
        }

        .nav-divider {
          width: 1px;
          height: 24px;
          background: var(--border-light);
          margin: 0 8px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 24px;
          right: 24px;
          padding: 24px;
          margin-top: 8px;
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: #FFF;
          padding: 8px 0;
        }

        .mobile-divider {
          border: none;
          border-top: 1px solid var(--border-light);
          margin: 16px 0;
        }

        .w-full { width: 100%; }

        @media (max-width: 992px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          .mobile-menu { display: block; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
