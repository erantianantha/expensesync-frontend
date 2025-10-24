import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Simple render without StrictMode to avoid potential issues
const root = createRoot(document.getElementById('root'))
root.render(<App />)
