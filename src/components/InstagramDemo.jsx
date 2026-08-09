import { useState } from 'react';

export default function InstagramDemo({ ageGroup, onBack }) {
  const [detected, setDetected] = useState(false);
  const [showExplain, setShowExplain] = useState(false);

  return (
    <section className="card">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <h2>📸 Instagram — Cyberbullying Detection</h2>

      <div className="phone">
        <div className="insta-header">
          <div className="avatar" />
          <strong>friend_01</strong>
        </div>

        <div className="photo">📷 Instagram Post</div>

        <div className="comment">
          <strong>friend_02:</strong> Amazing picture!
        </div>

        <div className="comment harmful">
          <strong>toxic_user:</strong>
          <span className={detected ? 'blurred' : ''}>
            You are ugly and nobody likes you!
          </span>
        </div>
      </div>

      {!detected ? (
        <button onClick={() => setDetected(true)}>
          Detect Cyberbullying
        </button>
      ) : (
        <>
          <div className="alert warning">
            {ageGroup === 'child' &&
              '⛔ Message hidden for child safety. Parent alert generated.'}

            {ageGroup === 'teen' &&
              '⚠️ Harmful message blurred. Teen protection mode active.'}

            {ageGroup === 'adult' &&
              '⚠️ Harmful message detected. Continue with caution.'}
          </div>

          <button onClick={() => setShowExplain(true)}>
            Show Explainable AI
          </button>
        </>
      )}

      {showExplain && (
        <div className="modal">
          <div className="modal-content">
            <h3>🤖 Explainable AI</h3>

            <ul>
              <li>Toxic language detected</li>
              <li>Personal attack detected</li>
              <li>Confidence: 96%</li>
            </ul>

            <button onClick={() => setShowExplain(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}