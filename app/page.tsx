import Navbar from "../app/Components/Navbar";
import Jumbotron from "../app/Components/Jumbotron";
import Aboute from "./Components/Aboute";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Aboute />
      <Projects />
    </>
  );
}
