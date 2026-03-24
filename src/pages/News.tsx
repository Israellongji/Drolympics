import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { fetchNews } from '../services/api';

const mockArticles = [
  {
    id: '1',
    title: 'Registration Opens for Season 2026',
    date: 'Oct 15, 2025',
    content: 'Get your teams ready! Registration for the 2026 season of Drolympics is officially open. Read more to find out about the new Unmanned Blimps category.',
  },
  {
    id: '2',
    title: 'New Safety Regulations for Multi-Rotor Class',
    date: 'Oct 10, 2025',
    content: 'Due to the increasing speeds in the multi-rotor class, we are implementing new strict guidelines for prop guards and fail-safe return protocols.',
  },
  {
    id: '3',
    title: 'Interview with Last Year\'s Champions',
    date: 'Oct 05, 2025',
    content: 'Sit down with Aero Dynamics X as they discuss their incredible comeback in the final race of the 2025 hybrid VTOL championship.',
  }
];

const News: React.FC = () => {
  const [articles, setArticles] = useState(mockArticles);

  useEffect(() => {
    fetchNews().then((data) => {
      if (data && data.length > 0) setArticles(data);
    }).catch(() => {});
  }, []);

  return (
    <div className="section container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="text-center mb-xl">
        <h1 className="hero-title animate-fade-in" style={{ fontSize: '3.5rem' }}>
          LATEST <span className="text-orange">NEWS</span>
        </h1>
      </div>

      <div className="news-grid animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {articles.map((article) => (
          <article key={article.id} className="glass-panel news-card flex-col">
            <div className="news-content p-lg flex-col h-full">
              <h2 className="news-title mt-sm">{article.title}</h2>
              <div className="news-meta flex-center gap-md my-sm text-sm text-muted" style={{ justifyContent: 'flex-start' }}>
                <span className="flex-center gap-sm"><Calendar size={14} /> {typeof article.date === 'string' && article.date.includes('T') ? new Date(article.date).toLocaleDateString() : article.date}</span>
              </div>
              <p className="text-muted mt-md mb-lg flex-1">{article.content}</p>
              <button className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>Read Full Article</button>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 32px;
        }

        .news-card {
          min-height: 350px;
        }

        .p-lg { padding: 32px; }
        .mb-sm { margin-bottom: 12px; }
        .mb-lg { margin-bottom: 24px; }
        .mt-md { margin-top: 16px; }
        .my-sm { margin-top: 12px; margin-bottom: 12px; }

        .news-title {
          font-size: 1.4rem;
          color: #FFF;
          line-height: 1.3;
        }

        .flex-1 { flex: 1; }
      `}</style>
    </div>
  );
};

export default News;
