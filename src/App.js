
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <h2 className="text-5xl font-semibold text-center text-blue-600 mt-10"> Hello Hello KAAM GARYO </h2>
    </div>
  );
}

export default App;
