
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services"
import FeaturedProducts from "./components/FeaturedProducts";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Services></Services>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
}

export default App;
