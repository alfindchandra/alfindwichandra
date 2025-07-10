import Navbar from "../app/Components/Navbar";
import Jumbotron from "../app/Components/Jumbotron";
import Aboute from "./Components/Aboute";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Certificates from "./Components/Certificates";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Aboute />
      <Projects />
      <Certificates />

      <Contact />
      <Footer />
    </>
  );
}
