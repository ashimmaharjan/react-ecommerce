
import { MdKeyboardArrowRight } from "react-icons/md";
import DummyLogo from "../assets/dummy-logo.png"
import Shoes1 from "../assets/shoes-1.jpg"
import Shoes2 from "../assets/shoes-2.jpg"
import Shoes3 from "../assets/shoes-3.jpg"

import Slider from "react-slick";

const HeroSection = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    const sliderWrapper = {
        height: "500px",
        overflow: "hidden",
    }

    return (
        <div className="grid grid-cols-12 gap-2 p-7">
            {/* Side navbar */}
            <div className="lg:col-span-2 h-96  px-5 font-semibold text-gray-600">
                <div>
                    <img src={DummyLogo} alt="" />
                </div>
                <div className="h-12 border-b border-gray-300 flex items-center">
                    <h1>Home</h1>
                </div>
                <div className="h-12 border-b border-gray-300 flex items-center justify-between">
                    <h1>Collections</h1>
                    <MdKeyboardArrowRight className="text-gray-500"></MdKeyboardArrowRight>
                </div>
                <div className="h-12 border-b border-gray-300 flex items-center justify-between">
                    <h1>Categories</h1>
                    <MdKeyboardArrowRight className="text-gray-500"></MdKeyboardArrowRight>
                </div>
                <div className="h-12 border-b border-gray-300 flex items-center justify-between">
                    <h1>Products</h1>
                    <MdKeyboardArrowRight className="text-gray-500"></MdKeyboardArrowRight>
                </div>
                <div className="h-12 border-b border-gray-300 flex items-center justify-between">
                    <h1>Features</h1>
                    <MdKeyboardArrowRight className="text-gray-500"></MdKeyboardArrowRight>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-10 bg-red-500" style={sliderWrapper}>
                <Slider {...settings}>
                    <div className="relative">
                        <img src={Shoes1} className="w-full h-auto object-cover" alt="" />
                        <div className="">
                            <button className="px-5 py-2 border-4 border-black hover:bg-black hover:text-white">
                                Get Yours
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <img src={Shoes2} className="w-full h-auto object-cover" alt="" />
                    </div>
                    <div className="">
                        <img src={Shoes3} className="w-full h-auto object-cover" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default HeroSection;