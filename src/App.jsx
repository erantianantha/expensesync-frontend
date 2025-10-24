import React from 'react';

// Ultra-simple test component - no external dependencies
function App() {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: 'red', fontSize: '32px', marginBottom: '20px' }}>
        🚀 Expensync Frontend is Working!
      </h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#333', marginBottom: '15px' }}>✅ Frontend Status: WORKING</h2>
        <p style={{ marginBottom: '10px' }}><strong>Current URL:</strong> {window.location.href}</p>
        <p style={{ marginBottom: '10px' }}><strong>Timestamp:</strong> {new Date().toISOString()}</p>
        <p style={{ marginBottom: '10px' }}><strong>Environment:</strong> {import.meta.env.MODE}</p>
        <p style={{ marginBottom: '10px' }}><strong>API URL:</strong> {import.meta.env.VITE_API_URL || 'Not set'}</p>
      </div>

      <div style={{ 
        backgroundColor: '#fff3cd', 
        padding: '15px', 
        borderRadius: '8px',
        border: '1px solid #ffeaa7',
        marginBottom: '20px'
      }}>
        <h3 style={{ color: '#856404', marginBottom: '10px' }}>⚠️ Backend Not Connected</h3>
        <p style={{ color: '#856404', marginBottom: '10px' }}>
          The frontend is working, but the backend is not deployed yet.
        </p>
        <p style={{ color: '#856404' }}>
          Next step: Deploy the backend to Vercel and set the VITE_API_URL environment variable.
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#d1ecf1', 
        padding: '15px', 
        borderRadius: '8px',
        border: '1px solid #bee5eb'
      }}>
        <h3 style={{ color: '#0c5460', marginBottom: '10px' }}>📋 Next Steps:</h3>
        <ol style={{ color: '#0c5460', paddingLeft: '20px' }}>
          <li>✅ Frontend is deployed and working</li>
          <li>🔄 Deploy backend to Vercel</li>
          <li>🔗 Set VITE_API_URL environment variable</li>
          <li>🧪 Test the complete application</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
