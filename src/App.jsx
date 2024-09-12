import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import SpecialOffer from "./pages/SpecialOffer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./sections/Footer"
import Newsletters from "./sections/Newsletters"
import LoginSignUp from "./pages/LoginSignUp"
import Login from "./pages/Login"
import AlphaBeach from "./pages/AlphaBeach"

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/SpecialOffer" element={<SpecialOffer />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Signup" element={<LoginSignUp />} />
          <Route path="About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/Alpha-beach" element={<AlphaBeach />}/>
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
