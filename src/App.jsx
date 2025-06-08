import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MovingBrandName from './components/MovingBrandName'
import ClothsSection from './components/ClothsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <MovingBrandName />
      <ClothsSection />
    </>
  )
}

export default App
