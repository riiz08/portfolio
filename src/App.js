import NavigationBar from "./components/Navbar";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import About from "./section/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="dark:bg-gray-900">
      <NavigationBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
