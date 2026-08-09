import { useState } from 'react';
import './index.css';

import InstagramDemo from './components/InstagramDemo';
import YouTubeDemo from './components/YouTubeDemo';
import WebsiteDemo from './components/WebsiteDemo';
import PrivacyDashboard from './components/PrivacyDashboard';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [ageGroup, setAgeGroup] = useState('teen');

  return (
    <div className="app">
      <header className="hero">
        <h1>🛡️ SafeVision AI</h1>
        <p>Real-Time On-Device Harmful Content Detection</p>
      </header>

      {screen === 'home' && (
        <div className="card home-screen">
          <div className="age-selector">
            <h3>Select User Age</h3>

            <select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <option value="child">Under 13</option>
              <option value="teen">13–17</option>
              <option value="adult">18+</option>
            </select>

            <p>
              Protection Level:{' '}
              <strong>
                {ageGroup === 'child'
                  ? 'Strict'
                  : ageGroup === 'teen'
                  ? 'High'
                  : 'Standard'}
              </strong>
            </p>
          </div>

          <h2>Choose Demo</h2>

          <div className="menu-grid">
            <button onClick={() => setScreen('instagram')}>
              📸 Instagram Demo
            </button>

            <button onClick={() => setScreen('youtube')}>
              ▶️ YouTube Demo
            </button>

            <button onClick={() => setScreen('website')}>
              🌐 Website Demo.
            </button>

            <button onClick={() => setScreen('privacy')}>
              🔒 Privacy Dashboard
            </button>
          </div>
        </div>
      )}

      {screen === 'instagram' && (
        <InstagramDemo
          ageGroup={ageGroup}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'youtube' && (
        <YouTubeDemo onBack={() => setScreen('home')} />
      )}

      {screen === 'website' && (
        <WebsiteDemo onBack={() => setScreen('home')} />
      )}

      {screen === 'privacy' && (
        <PrivacyDashboard onBack={() => setScreen('home')} />
      )}
    </div>
  );
}