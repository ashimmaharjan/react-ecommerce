import { RiHeart2Line } from "react-icons/ri";
import { TiStar } from "react-icons/ti";
import CardPhotos from "../assets/card-shoes.jpg"

const FeaturedProducts = () => {

    return (
        <div className="pt-10 bg-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold"> Featured<b className="font-light">Products</b> </h1>
                <p className="text-gray-500 font-sans">Amazing products added recently in our catalog</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-20 mt-10">
                <div className="col-span-1 h-auto relative">
                    <div className="absolute text-xs w-auto py-1 px-3 flex items-center justify-center left-3 top-3 bg-red-400 font-sans text-white rounded-3xl">
                        <h1>-17%</h1>
                    </div>
                    <img src={CardPhotos} className="w-full h-64 object-cover" alt="" />
                    <div className="flex justify-between mt-3">
                        <div>
                            <h1 className="text-gray-500 text-xs">Fashion, Featured Product</h1>
                            <h1>Yellow Men Shoes</h1>
                            <p className="inline-flex">
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                            </p>
                            <div className="flex items-center font-semibold">
                                <p className="text-gray-500 line-through">Rs.5900</p>
                                <p className="text-lg ml-3">Rs.4900</p>
                            </div>
                        </div>
                        <div>
                            <button>
                                <RiHeart2Line className="text-gray-400 w-5 h-5"></RiHeart2Line>
                            </button>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 h-auto relative">
                    <div className="absolute text-xs w-auto py-1 px-3 flex items-center justify-center left-3 top-3 bg-red-400 font-sans text-white rounded-3xl">
                        <h1>-17%</h1>
                    </div>
                    <img src={CardPhotos} className="w-full h-64 object-cover" alt="" />
                    <div className="flex justify-between mt-3">
                        <div>
                            <h1 className="text-gray-500 text-xs">Fashion, Featured Product</h1>
                            <h1>Yellow Men Shoes</h1>
                            <p className="inline-flex">
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                            </p>
                            <div className="flex items-center font-semibold">
                                <p className="text-gray-500 line-through">Rs.5900</p>
                                <p className="text-lg ml-3">Rs.4900</p>
                            </div>
                        </div>
                        <div>
                            <button>
                                <RiHeart2Line className="text-gray-400 w-5 h-5"></RiHeart2Line>
                            </button>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 h-auto relative">
                    <div className="absolute text-xs w-auto py-1 px-3 flex items-center justify-center left-3 top-3 bg-red-400 font-sans text-white rounded-3xl">
                        <h1>-17%</h1>
                    </div>
                    <img src={CardPhotos} className="w-full h-64 object-cover" alt="" />
                    <div className="flex justify-between mt-3">
                        <div>
                            <h1 className="text-gray-500 text-xs">Fashion, Featured Product</h1>
                            <h1>Yellow Men Shoes</h1>
                            <p className="inline-flex">
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                            </p>
                            <div className="flex items-center font-semibold">
                                <p className="text-gray-500 line-through">Rs.5900</p>
                                <p className="text-lg ml-3">Rs.4900</p>
                            </div>
                        </div>
                        <div>
                            <button>
                                <RiHeart2Line className="text-gray-400 w-5 h-5"></RiHeart2Line>
                            </button>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 h-auto relative">
                    <div className="absolute text-xs w-auto py-1 px-3 flex items-center justify-center left-3 top-3 bg-red-400 font-sans text-white rounded-3xl">
                        <h1>-17%</h1>
                    </div>
                    <img src={CardPhotos} className="w-full h-64 object-cover" alt="" />
                    <div className="flex justify-between mt-3">
                        <div>
                            <h1 className="text-gray-500 text-xs">Fashion, Featured Product</h1>
                            <h1>Yellow Men Shoes</h1>
                            <p className="inline-flex">
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                                <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                            </p>
                            <div className="flex items-center font-semibold">
                                <p className="text-gray-500 line-through">Rs.5900</p>
                                <p className="text-lg ml-3">Rs.4900</p>
                            </div>
                        </div>
                        <div>
                            <button>
                                <RiHeart2Line className="text-gray-400 w-5 h-5"></RiHeart2Line>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    );
}

export default FeaturedProducts