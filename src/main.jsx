import { createRoot } from 'react-dom/client'
import App from './App.jsx'

console.log('React app is starting...')

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
  console.log('React app rendered successfully!')
} else {
  console.error('Root element not found!')
}
