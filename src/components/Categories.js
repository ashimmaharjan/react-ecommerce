import { FaBabyCarriage } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { RiSmartphoneFill } from "react-icons/ri";
import { GiBeerStein, GiBoots, GiClothes, GiSofa } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
const Categories = () => {
    return (
        <div className="pt-10 bg-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold"> Product<b className="font-light">Categories</b> </h1>
                <p className="text-gray-500 font-sans">What are you shopping for today?</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-7 px-3 md:px-10 lg:px-20 mt-10">

                <div className="col-span-1 h-28 bg-gray-200 hover:bg-gray-900 transition duration-500 ease-in-out group cursor-pointer shadow-inner rounded-full rounded-tl-none flex justify-center items-center">
                    <FaBabyCarriage className="w-9 h-9 group-hover:text-white"></FaBabyCarriage>
                </div>

                <div className="col-span-1 h-28 bg-gray-200 hover:bg-gray-900 transition duration-500 ease-in-out group cursor-pointer shadow-inner rounded-full rounded-tl-none flex justify-center items-center">
                    <MdLaptopChromebook className="w-9 h-9 group-hover:text-white"></MdLaptopChromebook>
                </div>

                <div className="col-span-1 h-28 bg-gray-200 hover:bg-gray-900 transition duration-500 ease-in-out group cursor-pointer shadow-inner rounded-full rounded-tl-none flex justify-center items-center">
                    <RiSmartphoneFill className="w-9 h-9 group-hover:text-white"></RiSmartphoneFill>
                </div>

                <div className="col-span-1 h-28 bg-gray-200 hover:bg-gray-900 transition duration-500 ease-in-out group cursor-pointer shadow-inner rounded-full rounded-tl-none flex justify-center items-center">
                    <GiBoots className="w-9 h-9 group-hover:text-white"></GiBoots>
                </div>

                <div className="col-span-1 h-28 bg-gray-200 hover:bg-gray-900 transition duration-500 ease-in-out group cursor-pointer shadow-inner rounded-full rounded-tl-none flex justify-center items-center">
                    <GiClothes className="w-9 h-9 group-hover:text-white"></GiClothes>
                </div>

                <div className="col-span-1 h-28 bg-gray-200 hover:bg-gray-900 transition duration-500 ease-in-out group cursor-pointer shadow-inner rounded-full rounded-tl-none flex justify-center items-center">
                    <GiBeerStein className="w-9 h-9 group-hover:text-white"></GiBeerStein>
                </div>

                <div className="col-span-1 h-28 bg-gray-200 hover:bg-gray-900 transition duration-500 ease-in-out group cursor-pointer shadow-inner rounded-full rounded-tl-none flex justify-center items-center">
                    <GiSofa className="w-9 h-9 group-hover:text-white"></GiSofa>
                </div>

                <div className="col-span-1 h-28 bg-gray-200 hover:bg-gray-900 transition duration-500 ease-in-out group cursor-pointer shadow-inner rounded-full rounded-tl-none flex justify-center items-center">
                    <IoFastFoodSharp className="w-9 h-9 group-hover:text-white"></IoFastFoodSharp>
                </div>
            </div>
        </div >);
}

export default Categories;