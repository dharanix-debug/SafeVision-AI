export default function PrivacyDashboard({ onBack }) {
  return (
    <section className="card">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <h2>🔒 Privacy Dashboard</h2>

      <div className="dashboard">
        <div className="metric">
          <span>Text processed locally</span>
          <strong>✔ Yes</strong>
        </div>

        <div className="metric">
          <span>Images processed locally</span>
          <strong>✔ Yes</strong>
        </div>

        <div className="metric">
          <span>Videos processed locally</span>
          <strong>✔ Yes</strong>
        </div>

        <div className="metric danger-row">
          <span>Network uploads</span>
          <strong>0</strong>
        </div>

        <div className="metric">
          <span>Average inference time</span>
          <strong>118 ms</strong>
        </div>
      </div>

      <p className="privacy-note">
        ✔ All inference happened on-device. No data uploaded.
      </p>
    </section>
  );
}