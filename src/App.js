import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Project from "./Project";
import Footer from "./Footer";
import Banner from "./Banner";
AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Footer />
    </>
  );
}

export default App;
