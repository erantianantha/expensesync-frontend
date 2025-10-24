// Direct DOM manipulation to test if JavaScript is working
console.log('JavaScript is loading...')
console.log('Root element:', document.getElementById('root'))

// Try to replace the loading text directly
const rootElement = document.getElementById('root')
if (rootElement) {
  console.log('Root element found, replacing content...')
  rootElement.innerHTML = `
    <div style="padding: 20px; background: #f0f0f0; min-height: 100vh;">
      <h1 style="color: red; font-size: 32px;">🎉 JAVASCRIPT IS WORKING!</h1>
      <p>This is direct DOM manipulation, not React.</p>
      <p>Current time: ${new Date().toISOString()}</p>
      <p>URL: ${window.location.href}</p>
    </div>
  `
  console.log('Content replaced successfully!')
} else {
  console.error('Root element not found!')
}
