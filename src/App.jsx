import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MovingBrandName from './components/MovingBrandName'
import ClothsSection from './components/ClothsSection'
import Review from './components/review'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <MovingBrandName />
      <ClothsSection />
      <Review />
      <Footer />
    </>
  )
}

export default App
