import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Shield, Zap, Crosshair, Award, Users, Camera } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero flex-center">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        
        <div className="container flex-center flex-col text-center hero-content">
          <div className="badge mb-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            🚀 Season 2026 Registration Open
          </div>
          
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
            THE FUTURE OF <br />
            <span className="text-gradient">AERIAL RACING</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Welcome to Drolympics — where engineering brilliance meets aerial speed. 
            Join teams from around the globe across five thrilling flight categories.
          </p>
          
          <div className="hero-actions flex-center gap-md animate-fade-in flex-wrap" style={{ animationDelay: '0.4s' }}>
            <Link to="/register" className="btn btn-primary">
              <Rocket size={20} /> Register to Compete
            </Link>
            <Link to="/vault" className="btn btn-secondary">
              <Camera size={20} /> View The Vault
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Flight <span className="text-gradient">Categories</span></h2>
            <p className="section-subtitle mx-auto">Compete in your specialty. We support all major classes of unmanned aerial vehicles.</p>
          </div>

          <div className="glass-grid">
            <div className="glass-panel glass-card text-center hover-lift" style={{ backgroundImage: "url('/cat-multirotor.png')" }}>
              <div className="category-overlay"></div>
              <div className="icon-wrapper cyan mx-auto mb-md"><Zap size={32} /></div>
              <h3 className="category-text">Multi-Rotor</h3>
              <p className="text-sm mt-sm category-text" style={{ color: "rgba(255,255,255,0.85)" }}>Quadcopters and octocopters pushing the limits of agility and speed.</p>
            </div>
            
            <div className="glass-panel glass-card text-center hover-lift" style={{ backgroundImage: "url('/cat-fixedwing.png')" }}>
              <div className="category-overlay"></div>
              <div className="icon-wrapper orange mx-auto mb-md"><Rocket size={32} /></div>
              <h3 className="category-text">Fixed-Wing</h3>
              <p className="text-sm mt-sm category-text" style={{ color: "rgba(255,255,255,0.85)" }}>High-speed aerodynamic designs built for endurance and straight-line velocity.</p>
            </div>

            <div className="glass-panel glass-card text-center hover-lift" style={{ backgroundImage: "url('/cat-singlerotor.png')" }}>
              <div className="category-overlay"></div>
              <div className="icon-wrapper blue mx-auto mb-md"><Crosshair size={32} /></div>
              <h3 className="category-text">Single-Rotor</h3>
              <p className="text-sm mt-sm category-text" style={{ color: "rgba(255,255,255,0.85)" }}>Precision helicopter-style drones capable of highly aggressive maneuvers.</p>
            </div>

            <div className="glass-panel glass-card text-center hover-lift" style={{ backgroundImage: "url('/cat-vtol.png')" }}>
              <div className="category-overlay"></div>
              <div className="icon-wrapper pink mx-auto mb-md"><Shield size={32} /></div>
              <h3 className="category-text">Hybrid VTOL</h3>
              <p className="text-sm mt-sm category-text" style={{ color: "rgba(255,255,255,0.85)" }}>The best of both worlds: vertical takeoff and high-speed horizontal flight.</p>
            </div>

            <div className="glass-panel glass-card text-center hover-lift blimp-card" style={{ backgroundImage: "url('/cat-blimp.png')" }}>
              <div className="category-overlay"></div>
              <div className="icon-wrapper green mx-auto mb-md"><Award size={32} /></div>
              <h3 className="category-text">Unmanned Blimps</h3>
              <p className="text-sm mt-sm category-text" style={{ color: "rgba(255,255,255,0.85)" }}>Precision control tests navigating aerostats through complex obstacles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Showcase Section */}
      <section className="features section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="features-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="flex-between feature-row flex-wrap">
            <div className="feature-text">
              <h2 className="section-title">Unified <span className="text-orange">Team Dashboard</span></h2>
              <p className="text-muted mb-md" style={{ lineHeight: '1.8' }}>
                Manage your pilot roster, get live updates on your category, and track your telemetry stats — all in a single, centralized command center.
              </p>
              <ul className="flex-col gap-sm">
                <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '12px' }}>
                  <Users size={20} className="text-cyan" /> Real-time roster management
                </li>
                <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '12px' }}>
                  <Zap size={20} className="text-green" /> Instant competition updates
                </li>
                <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '12px' }}>
                  <Award size={20} className="text-orange" /> Achievement tracking
                </li>
              </ul>
            </div>
            <div className="feature-image glass-panel animate-float">
               <div className="mock-dash">
                 <div className="mock-header"></div>
                 <div className="mock-body flex-between gap-md">
                   <div className="mock-sidebar"></div>
                   <div className="mock-content flex-col gap-sm">
                     <div className="mock-card cyan-card"></div>
                     <div className="mock-card orange-card"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section text-center">
        <div className="container">
          <h2 className="section-title animate-fade-in">Ready to <span className="text-gradient">Take Flight</span>?</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', marginBottom: '32px' }}>
            Join hundreds of teams worldwide. Register now and prove your team is the best in the sky.
          </p>
          <Link to="/register" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
            <Rocket size={22} /> Register Your Team Now
          </Link>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          padding-top: var(--nav-height);
          overflow: hidden;
        }

        .hero-bg-image {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('/hero-bg.png') center center / cover no-repeat;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(10, 22, 40, 0.5) 0%,
            rgba(10, 22, 40, 0.7) 50%,
            rgba(10, 22, 40, 0.95) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          text-shadow: 0 2px 20px rgba(0, 229, 255, 0.3);
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: rgba(255, 255, 255, 0.8);
          max-width: 700px;
          margin: 0 auto 40px auto;
          line-height: 1.7;
        }

        .mb-lg { margin-bottom: 32px; }
        .mb-md { margin-bottom: 24px; }
        .mt-sm { margin-top: 12px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-sm { font-size: 0.9rem; }

        .glass-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .glass-card {
          padding: 32px 24px;
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .category-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(10, 22, 40, 0.82);
          z-index: 1;
          transition: background 0.3s ease;
        }

        .glass-card:hover .category-overlay {
          background: rgba(10, 22, 40, 0.5);
        }
        
        .icon-wrapper, .category-text {
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }

        .blimp-card {
          grid-column: span 1;
        }

        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
        }

        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 229, 255, 0.15);
        }

        .icon-wrapper {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
        }

        .icon-wrapper.cyan {
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(0, 229, 255, 0.05));
          border: 2px solid rgba(0, 229, 255, 0.4);
          color: var(--primary-cyan);
        }
        .icon-wrapper.orange {
          background: linear-gradient(135deg, rgba(255, 109, 0, 0.2), rgba(255, 109, 0, 0.05));
          border: 2px solid rgba(255, 109, 0, 0.4);
          color: var(--accent-orange);
        }
        .icon-wrapper.blue {
          background: linear-gradient(135deg, rgba(41, 121, 255, 0.2), rgba(41, 121, 255, 0.05));
          border: 2px solid rgba(41, 121, 255, 0.4);
          color: var(--primary-blue);
        }
        .icon-wrapper.pink {
          background: linear-gradient(135deg, rgba(255, 64, 129, 0.2), rgba(255, 64, 129, 0.05));
          border: 2px solid rgba(255, 64, 129, 0.4);
          color: var(--accent-pink);
        }
        .icon-wrapper.green {
          background: linear-gradient(135deg, rgba(0, 230, 118, 0.2), rgba(0, 230, 118, 0.05));
          border: 2px solid rgba(0, 230, 118, 0.4);
          color: var(--accent-green);
        }

        .feature-row {
          align-items: center;
          gap: 60px;
        }

        .feature-text, .feature-image {
          flex: 1;
          min-width: 300px;
        }

        .features-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('/about-bg.png') center center / cover no-repeat;
          opacity: 0.15;
          z-index: 0;
        }

        /* Mock Dashboard CSS */
        .mock-dash {
          width: 100%;
          height: 300px;
          padding: 20px;
          border-radius: 12px;
          background: rgba(0,0,0,0.5);
        }
        .mock-header {
          width: 100%;
          height: 20px;
          border-radius: 4px;
          background: rgba(255,255,255,0.1);
          margin-bottom: 20px;
        }
        .mock-sidebar {
          width: 80px;
          height: 200px;
          border-radius: 4px;
          background: rgba(255,255,255,0.05);
        }
        .mock-content { flex: 1; }
        .mock-card {
          width: 100%;
          height: 90px;
          border-radius: 8px;
        }
        .cyan-card {
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(41, 121, 255, 0.1));
          border: 1px solid rgba(0, 229, 255, 0.3);
        }
        .orange-card {
          background: linear-gradient(135deg, rgba(255, 109, 0, 0.15), rgba(255, 64, 129, 0.1));
          border: 1px solid rgba(255, 109, 0, 0.3);
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(255, 109, 0, 0.05));
          border-top: 1px solid var(--border-glass);
          border-bottom: 1px solid var(--border-glass);
        }

        @media (max-width: 768px) {
          .blimp-card {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
