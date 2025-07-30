import Contact from "./components/Contact"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero1 from "./components/Hero1"
import Offer from "./components/Offer"
import Pricing from "./components/Pricing"

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero1 />
      <CTA />
      <Offer />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App