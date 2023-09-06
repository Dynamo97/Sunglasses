import React from 'react'
import Canvas from './canvas'
import Customizer from './pages/Customizer'
import Checkout from './pages/Checkout'
import Home from './pages/Home'

const App = () => {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Checkout />
      <Customizer />
      <Canvas />
      
      
    </main>
  )
}

export default App