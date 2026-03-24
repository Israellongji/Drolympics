import React from 'react';
import { AlertTriangle, Info, CheckCircle } from 'lucide-react';

const Rules: React.FC = () => {
  return (
    <div className="section container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="text-center mb-xl">
        <h1 className="hero-title animate-fade-in" style={{ fontSize: '3.5rem' }}>
          RULES & <span className="text-cyan">GUIDELINES</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Safety and fairness are our top priorities. Familiarize yourself with the competition regulations before registering your team.
        </p>
      </div>

      <div className="rules-content animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
        
        <div className="glass-panel p-lg mb-lg border-left-cyan">
          <div className="flex-center gap-md mb-md" style={{ justifyContent: 'flex-start' }}>
            <Info className="text-cyan" size={28} />
            <h2 className="font-bold text-xl">1. General Eligibility</h2>
          </div>
          <p className="text-muted leading-relaxed">
            All teams must consist of at least 2 members: a Pilot and a Chief Engineer. 
            Pilots must hold a valid Class IV UAV license (or equivalent international certification).
            A single team can compete in a maximum of two (2) categories during a single season.
          </p>
        </div>

        <div className="glass-panel p-lg mb-lg border-left-orange">
          <div className="flex-center gap-md mb-md" style={{ justifyContent: 'flex-start' }}>
            <AlertTriangle className="text-orange" size={28} />
            <h2 className="font-bold text-xl">2. Safety Protocols (Critical)</h2>
          </div>
          <ul className="text-muted leading-relaxed list-disc">
            <li>All drones must have a hard-wired Kill Switch accessible remotely via an independent RF frequency.</li>
            <li>No lithium-polymer batteries exceeding 12-cell (12S) configurations are allowed in any category.</li>
            <li>Carbon fiber props must be enclosed in safety guards for any indoor courses.</li>
          </ul>
        </div>

        <div className="glass-panel p-lg mb-lg border-left-blue">
          <div className="flex-center gap-md mb-md" style={{ justifyContent: 'flex-start' }}>
            <CheckCircle className="text-blue" size={28} />
            <h2 className="font-bold text-xl">3. Category Specifications</h2>
          </div>
          <div className="category-specs mt-md">
            <h3 className="text-cyan mb-sm">Multi-Rotor</h3>
            <p className="text-muted text-sm mb-md">Max weight: 2kg. Max prop size: 7 inches. No autonomous flight aids allowed during race.</p>
            
            <h3 className="text-cyan mb-sm">Fixed-Wing</h3>
            <p className="text-muted text-sm mb-md">Max wingspan: 1.5m. Must maintain forward momentum. FPV only.</p>
            
            <h3 className="text-cyan mb-sm">Unmanned Blimps</h3>
            <p className="text-muted text-sm">Non-flammable lifting gas only (Helium). Max volume: 5 cubic meters.</p>
          </div>
        </div>

      </div>

      <style>{`
        .max-w-3xl { max-width: 900px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .p-lg { padding: 32px; }
        .mb-xl { margin-bottom: 48px; }
        .mb-lg { margin-bottom: 32px; }
        .mb-md { margin-bottom: 16px; }
        .mt-md { margin-top: 16px; }
        .text-xl { font-size: 1.5rem; color: #FFF; }
        .leading-relaxed { line-height: 1.7; }
        .list-disc { padding-left: 24px; list-style-type: disc; }
        .list-disc li { margin-bottom: 12px; }
        
        .border-left-cyan { border-left: 4px solid var(--primary-cyan); }
        .border-left-orange { border-left: 4px solid var(--accent-orange); }
        .border-left-blue { border-left: 4px solid var(--primary-blue); }
      `}</style>
    </div>
  );
};

export default Rules;
