import React from 'react';

// Minimal test component
function TestApp() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', fontSize: '24px' }}>Test App is Working!</h1>
      <p>If you can see this, React is rendering correctly.</p>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'white', border: '1px solid #ccc' }}>
        <h2>Debug Info:</h2>
        <p>Current URL: {window.location.href}</p>
        <p>User Agent: {navigator.userAgent}</p>
        <p>Timestamp: {new Date().toISOString()}</p>
      </div>
    </div>
  );
}

export default TestApp;
