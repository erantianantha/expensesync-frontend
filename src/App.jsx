import React from 'react';

// Simple test component first
function App() {
  console.log('🚀 Expensync React App Starting...');
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
        🚀 Expensync React App
      </h1>
      
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#28a745', marginBottom: '15px' }}>✅ React is Working!</h2>
        <p><strong>Current URL:</strong> {window.location.href}</p>
        <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
        <p><strong>Environment:</strong> {import.meta.env.MODE}</p>
        <p><strong>API URL:</strong> {import.meta.env.VITE_API_URL || 'https://expncesync-backend.vercel.app/api/v1'}</p>
      </div>

      <div style={{
        backgroundColor: '#e8f5e8',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #28a745'
      }}>
        <h3 style={{ color: '#28a745', marginBottom: '10px' }}>🎉 Success!</h3>
        <p>React app is now working and connected to your backend!</p>
        <p>Backend: https://expncesync-backend.vercel.app</p>
      </div>
    </div>
  );
}

export default App;
