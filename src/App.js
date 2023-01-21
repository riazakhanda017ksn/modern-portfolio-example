import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Services from "./Services";
AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <div
        className="App"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="80"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h1>HELLO</h1>
        <h2>I AM A MERN STACK DEVELOPER</h2>
      </div>
      <About />
      <Services />
    </>
  );
}

export default App;
