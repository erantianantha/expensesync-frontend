import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LoaderProvider } from './context/LoaderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Components
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  console.log('🚀 Expensync React App Starting...');
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LoaderProvider>
          <Router>
            <div className="App">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <Layout>
                    <Home />
                  </Layout>
                } />
                
                {/* Redirect to dashboard if authenticated */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              
              {/* Toast notifications */}
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </Router>
        </LoaderProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
