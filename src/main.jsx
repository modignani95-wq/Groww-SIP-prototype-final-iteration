import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React ErrorBoundary caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif', textAlign: 'center', backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1F2937' }}>Groww Mutual Funds</h2>
          <p style={{ fontSize: '13px', color: '#6B7280', margin: '8px 0 16px' }}>App encountered a loading issue. Tap below to reload fresh version.</p>
          <button 
            onClick={() => {
              if ('caches' in window) {
                caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => window.location.reload(true));
              } else {
                window.location.reload(true);
              }
            }}
            style={{ padding: '10px 20px', backgroundColor: '#00D09C', color: '#000', fontWeight: 'bold', borderRadius: '12px', border: 'none', cursor: 'pointer' }}
          >
            Reload App
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}
