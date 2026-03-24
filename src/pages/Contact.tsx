import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="section container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="text-center mb-xl">
        <h1 className="hero-title animate-fade-in" style={{ fontSize: '3.5rem' }}>
          CONTACT <span className="text-cyan">US</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Have questions about the league? Want to sponsor an event? Reach out to our operations team.
        </p>
      </div>

      <div className="grid-2 gap-xl animate-fade-in" style={{ animationDelay: '0.2s', alignItems: 'flex-start' }}>
        
        {/* Contact Info */}
        <div className="contact-info flex-col gap-lg">
          <div className="glass-panel p-lg">
            <h2 className="font-bold text-xl mb-md">Headquarters</h2>
            <div className="flex-col gap-md">
              <div className="flex-center gap-md" style={{ justifyContent: 'flex-start' }}>
                <div className="icon-wrapper-small"><MapPin size={20} className="text-cyan" /></div>
                <div>
                  <p className="text-muted text-sm uppercase tracking-wide">Location</p>
                  <p className="font-bold text-md">Neo-Tokyo District 4, Sector 7G</p>
                </div>
              </div>
              
              <div className="flex-center gap-md" style={{ justifyContent: 'flex-start' }}>
                <div className="icon-wrapper-small"><Mail size={20} className="text-cyan" /></div>
                <div>
                  <p className="text-muted text-sm uppercase tracking-wide">Email</p>
                  <p className="font-bold text-md">info@drolympics.com</p>
                </div>
              </div>

              <div className="flex-center gap-md" style={{ justifyContent: 'flex-start' }}>
                <div className="icon-wrapper-small"><Phone size={20} className="text-cyan" /></div>
                <div>
                  <p className="text-muted text-sm uppercase tracking-wide">Phone</p>
                  <p className="font-bold text-md">+1 (555) 019-2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-lg">
            <h2 className="font-bold text-xl mb-md">Business & Sponsors</h2>
            <p className="text-muted leading-relaxed">
              We are actively looking for brand partners who align with our vision of high-tech innovation. Please email <span className="text-cyan">partners@drolympics.com</span> for media kits.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel p-xl">
          <h2 className="font-bold text-xl mb-lg">Send a Message</h2>
          
          {submitted ? (
            <div className="success-msg border-left-cyan p-md bg-glass">
              <h3 className="text-cyan mb-sm font-bold border-left">Message Sent!</h3>
              <p className="text-muted">Thanks for reaching out. A human (or high-level AI) will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex-col gap-md">
              <div className="input-group">
                <label className="input-label">Your Name</label>
                <input type="text" className="input-field" placeholder="John Doe" required />
              </div>
              
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input type="email" className="input-field" placeholder="john@example.com" required />
              </div>
              
              <div className="input-group">
                <label className="input-label">Subject</label>
                <select className="input-field">
                  <option value="general">General Inquiry</option>
                  <option value="press">Press / Media</option>
                  <option value="sponsor">Sponsorship</option>
                  <option value="support">Team Support</option>
                </select>
              </div>

              <div className="input-group">
                <label className="input-label">Message</label>
                <textarea className="input-field" rows={5} placeholder="How can we help?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-sm">
                <Send size={18} /> Send Communications
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .mb-xl { margin-bottom: 48px; }
        .mb-lg { margin-bottom: 24px; }
        .mb-md { margin-bottom: 16px; }
        .mt-sm { margin-top: 16px; }
        .p-xl { padding: 40px; }
        .p-lg { padding: 32px; }
        .p-md { padding: 16px; }
        
        .font-bold { font-weight: 700; }
        .text-xl { font-size: 1.5rem; color: #FFF; }
        .text-md { font-size: 1.1rem; color: #FFF; }
        .text-sm { font-size: 0.85rem; }
        .uppercase { text-transform: uppercase; }
        .tracking-wide { letter-spacing: 1px; }
        .leading-relaxed { line-height: 1.6; }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
        }

        .icon-wrapper-small {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(0, 240, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 240, 255, 0.2);
        }

        .success-msg {
          border-left: 4px solid var(--primary-cyan);
          background: rgba(0, 240, 255, 0.05);
          border-radius: 4px;
        }

        .w-full { width: 100%; }

        @media (max-width: 992px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
