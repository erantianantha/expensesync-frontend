import React from 'react';

// Minimal test component to debug blank screen
function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', fontSize: '24px' }}>🚀 Expensync App is Working!</h1>
      <p>If you can see this, React is rendering correctly.</p>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'white', border: '1px solid #ccc' }}>
        <h2>Debug Info:</h2>
        <p>Current URL: {window.location.href}</p>
        <p>User Agent: {navigator.userAgent}</p>
        <p>Timestamp: {new Date().toISOString()}</p>
        <p>Environment: {import.meta.env.MODE}</p>
        <p>API URL: {import.meta.env.VITE_API_URL || 'Not set'}</p>
      </div>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e8f4fd', border: '1px solid #2196F3' }}>
        <h3>Next Steps:</h3>
        <ol>
          <li>If you see this page, React is working</li>
          <li>Check browser console (F12) for any errors</li>
          <li>Check if environment variables are set correctly</li>
          <li>Verify your backend is deployed and accessible</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
