import React from 'react'
import { useRoutes } from 'react-router-dom'

import route from '../router'

function App() {
  return (
    <div>
      {useRoutes(route)} 
    </div>
  )
}
export default App