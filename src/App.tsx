import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero1 from "./components/Hero1";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Pricing from "./components/Pricing";
import Team from "./components/Team";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero1 />
      <CTA />
      <section id="team">
        <Team />
      </section>

      <Offer />
      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default App;
