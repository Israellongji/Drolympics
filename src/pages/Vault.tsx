import React from 'react';
import { Camera, Play, Image as ImageIcon } from 'lucide-react';

const Vault: React.FC = () => {
  const galleryItems = [
    { id: 1, type: 'video', title: 'Season 2025 Finals', color: 'bg-orange' },
    { id: 2, type: 'image', title: 'Top Speed Record Quadcopter', color: 'bg-cyan' },
    { id: 3, type: 'image', title: 'Aerostat Course Setup', color: 'bg-purple' },
    { id: 4, type: 'image', title: 'Trophy Reveal 2026', color: 'bg-blue' },
    { id: 5, type: 'video', title: 'Pilot POV: Neon Flight', color: 'bg-pink' },
    { id: 6, type: 'image', title: 'Behind the Scenes Engineering', color: 'bg-green' },
  ];

  return (
    <div className="vault-page">
      {/* Hero Banner */}
      <section className="vault-hero flex-center">
        <div className="vault-hero-bg"></div>
        <div className="vault-hero-overlay"></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title animate-fade-in" style={{ fontSize: '3.5rem' }}>
            THE <span className="text-gradient">VAULT</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }} className="max-w-2xl mx-auto">
            Explore past competitions, record-breaking drones, and exclusive behind-the-scenes footage.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="vault-grid animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {galleryItems.map((item) => (
            <div key={item.id} className="vault-item glass-panel">
              <div className={`media-placeholder flex-center ${item.color}`}>
                {item.type === 'video' ? <Play size={48} color="#FFF" /> : <ImageIcon size={48} color="#FFF" />}
              </div>
              <div className="item-info p-md">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-muted text-sm mt-sm flex-center" style={{ justifyContent: 'flex-start', gap: '8px' }}>
                  {item.type === 'video' ? <Camera size={14} /> : <ImageIcon size={14} />} 
                  {item.type === 'video' ? 'Video' : 'Gallery'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .vault-hero {
          position: relative;
          min-height: 50vh;
          padding-top: var(--nav-height);
          overflow: hidden;
        }

        .vault-hero-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('/vault-bg.png') center center / cover no-repeat;
          z-index: 0;
        }

        .vault-hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(10, 22, 40, 0.4) 0%,
            rgba(10, 22, 40, 0.9) 100%
          );
          z-index: 1;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 16px;
        }

        .vault-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .vault-item {
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .vault-item:hover {
          transform: translateY(-8px);
        }

        .media-placeholder {
          height: 200px;
          width: 100%;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .vault-item:hover .media-placeholder {
          opacity: 1;
        }

        .bg-orange { background: linear-gradient(135deg, rgba(255,109,0,0.8), rgba(255,64,129,0.6)); }
        .bg-cyan { background: linear-gradient(135deg, rgba(0,229,255,0.8), rgba(41,121,255,0.6)); }
        .bg-purple { background: linear-gradient(135deg, rgba(170,0,255,0.8), rgba(255,64,129,0.5)); }
        .bg-blue { background: linear-gradient(135deg, rgba(41,121,255,0.8), rgba(0,229,255,0.6)); }
        .bg-pink { background: linear-gradient(135deg, rgba(255,64,129,0.8), rgba(255,214,0,0.5)); }
        .bg-green { background: linear-gradient(135deg, rgba(0,230,118,0.8), rgba(0,229,255,0.5)); }

        .p-md { padding: 16px; }
        .mt-sm { margin-top: 8px; }
        .font-bold { font-weight: 700; }
        .text-sm { font-size: 0.85rem; }
      `}</style>
    </div>
  );
};

export default Vault;
