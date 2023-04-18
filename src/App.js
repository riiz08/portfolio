import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import About from "./section/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default App;
