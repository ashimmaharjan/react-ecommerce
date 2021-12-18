
import { MdKeyboardArrowRight } from "react-icons/md";
import DummyLogo from "../assets/dummy-logo.png"
import Shoes1 from "../assets/shoes-1.jpg"
import Shoes2 from "../assets/shoes-2.jpg"
import Shoes3 from "../assets/shoes-3.jpg"

import Slider from "react-slick";
import { RiAccountPinCircleLine, RiHeart2Line, RiSearchEyeLine, RiShoppingBag3Line } from "react-icons/ri";

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
            <div className="relative col-span-12 lg:col-span-10" style={sliderWrapper}>

                <div className="absolute top-3 right-3 w-auto h-auto flex items-center space-x-5 z-10">
                    <button>
                        <RiSearchEyeLine className="text-gray-800 w-7 h-7"></RiSearchEyeLine>
                    </button>
                    <button>
                        <RiAccountPinCircleLine className="text-gray-800 w-7 h-7"></RiAccountPinCircleLine>
                    </button>
                    <button>
                        <RiHeart2Line className="text-gray-800 w-7 h-7"></RiHeart2Line>
                    </button>
                    <button>
                        <RiShoppingBag3Line className="text-gray-800 w-7 h-7"></RiShoppingBag3Line>
                    </button>
                </div>

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