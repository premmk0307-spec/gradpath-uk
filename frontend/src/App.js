import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1>🎓 GradPath UK</h1>
        <p>AI-Powered Job Search Assistant for International Graduates</p>
      </nav>

      <div className="hero">
        <h2>Find Your Dream Job in the UK</h2>
        <p>Built by an international graduate who experienced every struggle</p>
        <button className="btn">Get Started Free</button>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>📄 CV Analyser</h3>
          <p>AI scores your CV against any job description instantly</p>
        </div>
        <div className="feature-card">
          <h3>🔍 Sponsor Finder</h3>
          <p>Find companies that genuinely sponsor visas in the UK</p>
        </div>
        <div className="feature-card">
          <h3>✉️ Cover Letter</h3>
          <p>AI generates perfect cover letters in seconds</p>
        </div>
        <div className="feature-card">
          <h3>🎯 Interview Prep</h3>
          <p>Practice with AI generated interview questions</p>
        </div>
        <div className="feature-card">
          <h3>📊 App Tracker</h3>
          <p>Track all your applications in one place</p>
        </div>
        <div className="feature-card">
          <h3>🛂 Visa Guide</h3>
          <p>Simple guide to PSW and Skilled Worker visas</p>
        </div>
      </div>
    </div>
  );
}

export default App;