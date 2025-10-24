import { useState, useEffect } from 'react';
import { checkBackend } from '../api/api';

const ApiStatus = () => {
  const [status, setStatus] = useState('checking');
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkApi = async () => {
      try {
        await checkBackend();
        setStatus('connected');
      } catch (err) {
        setStatus('error');
        setError(err.message);
      }
    };

    checkApi();
  }, []);

  if (status === 'checking') {
    return (
      <div className="fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        🔄 Checking API connection...
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-sm">
        ⚠️ API Connection Failed
        <div className="text-sm mt-1">
          Backend server is not responding. Please check your deployment.
        </div>
        {error && (
          <div className="text-xs mt-2 opacity-75">
            Error: {error}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default ApiStatus;
