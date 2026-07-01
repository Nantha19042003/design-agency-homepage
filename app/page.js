import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// The homepage is just a list of sections, one component each.
// This keeps things easy to read and easy to reorder later.
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
