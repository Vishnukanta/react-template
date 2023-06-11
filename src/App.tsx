import React, { createElement as e } from 'react'

function App() {
  // return React.createElement('h1', {}, 'Hello Vishnukanta Das')
  return e('div', { className: 'container' }, [
    e('h1', { className: 'text-red-600', key: 1 }, 'Test Vishnukanta'),
    e('button', { className: 'py-2 px-4 border', key: 2 }, 'Click me'),
  ])
}

export default App
