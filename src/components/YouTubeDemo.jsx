import { useState } from 'react';

export default function YouTubeDemo({ onBack }) {
  const [detected, setDetected] = useState(false);

  return (
    <section className="card">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <h2>▶️ YouTube — Deepfake Detection</h2>

      <div className="video-container">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80&auto=format&fit=crop"
          alt="YouTube video"
        />

        <div className="play-btn">▶</div>

        {detected && (
          <div className="deepfake-banner">
            ⚠️ Potential Deepfake Detected
          </div>
        )}
      </div>

      {!detected ? (
        <button onClick={() => setDetected(true)}>
          Analyze Video
        </button>
      ) : (
        <div className="alert danger">
          ⚠️ AI detected possible deepfake artifacts.
        </div>
      )}
    </section>
  );
}