import './App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import HomeSections from './HomeSections'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CarCare from './CarCare'
import HomeCare from './HomeCare'
import PersonalCare from './PersonalCare'
import AboutUs from './AboutUs'
import ProductDetails from './ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Slider />
            <HomeSections />
            <Footer />
          </>
        } />
        <Route path="/car-care" element={
          <>
            <Navbar />
            <CarCare />
            <Footer />
          </>
        } />
        <Route path="/home-care" element={
          <>
            <Navbar />
            <HomeCare />
            <Footer />
          </>
        } />
        <Route path="/personal-care" element={
          <>
            <Navbar />
            <PersonalCare />
            <Footer />
          </>
        } />
        <Route path="/about-us" element={
          <>
            <Navbar />
            <AboutUs />
            <Footer />
          </>
        } />
        <Route path="/product/:productId" element={
          <>
            <Navbar />
            <ProductDetails />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
