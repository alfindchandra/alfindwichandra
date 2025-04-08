import Navbar from "../app/Components/Navbar";
import Jumbotron from "../app/Components/Jumbotron";
import Aboute from "./Components/Aboute";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Aboute />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
