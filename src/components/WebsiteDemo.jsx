import { useState } from 'react';

export default function WebsiteDemo({ onBack }) {
  const [blocked, setBlocked] = useState(false);

  return (
    <section className="card">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <h2>🌐 Harmful Website Protection</h2>

      <div className="browser">
        <div className="browser-bar">
          🔒 https://unsafe-example-site.com
        </div>

        {!blocked ? (
          <div className="page-preview">
            Click “Open Website”.
          </div>
        ) : (
          <div className="blocked-screen">
            <div className="blocked-icon">⛔</div>
            <h3>Access Blocked</h3>
            <p>Harmful content detected locally.</p>
          </div>
        )}
      </div>

      {!blocked && (
        <button onClick={() => setBlocked(true)}>
          Open Website
        </button>
      )}
    </section>
  );
}
