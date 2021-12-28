
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services"
import FeaturedProducts from "./components/FeaturedProducts";
import SummerCollection from "./components/SummerCollection";
import Categories from "./components/Categories";
import BestSeller from "./components/BestSeller";
import Brands from "./components/Brands";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Services></Services>

      <FeaturedProducts></FeaturedProducts>
      <Divider></Divider>

      <SummerCollection></SummerCollection>
      <Divider></Divider>

      <Categories></Categories>
      <Divider></Divider>

      <BestSeller></BestSeller>
      <Divider></Divider>

      <Brands></Brands>
    </div>
  );
}

export default App;
