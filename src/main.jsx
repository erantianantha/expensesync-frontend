import { createRoot } from 'react-dom/client'
import App from './App.jsx'

console.log('Main.jsx is loading...')
console.log('Root element:', document.getElementById('root'))

const root = createRoot(document.getElementById('root'))
console.log('Creating root...')
root.render(<App />)
console.log('App rendered!')
