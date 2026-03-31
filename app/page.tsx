import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Industries from "./components/Industries";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Industries />
        <Products />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
