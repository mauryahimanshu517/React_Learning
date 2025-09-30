import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Footer from "./component/Footer"
import Product from "./pages/Product"



function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer/>

    </BrowserRouter>
  )
}

export default App
