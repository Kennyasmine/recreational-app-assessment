import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import SpecialOffer from "./pages/SpecialOffer"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./sections/Footer"
import Newsletters from "./sections/Newsletters"

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/SpecialOffer" element={<SpecialOffer />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Login" element={<Login />} />
          <Route path="About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <section className="border-b border-b-black">
          <Newsletters />
        </section>
        <section className="border-b border-b-black">
          <Footer />
        </section>
      </div>
    </>
  )
}

export default App
