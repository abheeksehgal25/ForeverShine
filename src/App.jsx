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
import Cart from './Cart'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
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
          <Route path="/cart" element={
            <>
              <Navbar />
              <Cart />
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
