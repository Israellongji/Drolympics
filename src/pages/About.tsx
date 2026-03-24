import React from 'react';
import { Target, Flag, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero flex-center">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title animate-fade-in" style={{ fontSize: '3.5rem' }}>
            ABOUT <span className="text-gradient">DROLYMPICS</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pioneering the future of aerial sports. We are the premier league for Unmanned Aerial Vehicle engineering and piloting excellence.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="grid-2 gap-xl my-xl animate-fade-in pt-lg">
          <div className="about-text flex-col gap-md">
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Our Mission</h2>
            <p className="text-muted text-lg">
              To push the boundaries of drone technology by creating a competitive, safe, and exhilarating environment where engineers and pilots can showcase their innovations to the world.
            </p>
            <p className="text-muted text-lg">
              We believe that the future is airborne. By fostering fierce but friendly competition, we accelerate the development of tech that will eventually revolutionise industries — from delivery to search-and-rescue.
            </p>
          </div>
          
          <div className="glass-panel p-xl">
            <div className="stat-item mb-md">
              <Target className="text-cyan mb-sm" size={32} />
              <h3 className="text-2xl font-bold">5 Categories</h3>
              <p className="text-muted">From Multi-rotors to Unmanned Blimps</p>
            </div>
            <div className="stat-item mb-md">
              <Flag className="text-orange mb-sm" size={32} />
              <h3 className="text-2xl font-bold">120+ Teams</h3>
              <p className="text-muted">Competing globally every season</p>
            </div>
            <div className="stat-item">
              <Users className="text-pink mb-sm" size={32} />
              <h3 className="text-2xl font-bold">500,000+</h3>
              <p className="text-muted">Live viewers tuning in worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-hero {
          position: relative;
          min-height: 50vh;
          padding-top: var(--nav-height);
          overflow: hidden;
        }

        .about-hero-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('/about-bg.png') center center / cover no-repeat;
          z-index: 0;
        }

        .about-hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(10, 22, 40, 0.4) 0%,
            rgba(10, 22, 40, 0.85) 100%
          );
          z-index: 1;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 16px;
        }

        .my-xl { margin-top: 64px; margin-bottom: 64px; }
        .pt-lg { padding-top: 32px; }
        .p-xl { padding: 48px; }
        .mb-md { margin-bottom: 16px; }
        .mb-sm { margin-bottom: 8px; }
        .text-2xl { font-size: 1.8rem; }
        .text-lg { font-size: 1.1rem; line-height: 1.8; }
        .font-bold { font-weight: 700; }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }

        .stat-item { padding: 16px; border-bottom: 1px solid var(--border-glass); }
        .stat-item:last-child { border-bottom: none; }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default About;
