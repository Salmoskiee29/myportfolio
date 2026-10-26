import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import References from "@/components/References";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

export default function Home() {
  return (
    <>
      <Effects />
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <Services />
      <TechStack />
      <Testimonials />
      <Contact />
      <References />
      <Footer />
    </>
  );
}
