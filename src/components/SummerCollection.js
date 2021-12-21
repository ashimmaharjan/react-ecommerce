import BannerImage from "../assets/banner-image.jpg"
import ForHerImage from "../assets/for-her.jpg"
import ForHimImage from "../assets/for-him.jpg"

const SummerCollection = () => {
    return (
        <div className="pt-10 bg-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold"> Summer<b className="font-light">Collection</b> </h1>
                <p className="text-gray-500 font-sans">Amazing products added recently in our catalog</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-3 md:px-10 lg:px-20 mt-10">
                <div className="col-span-1 h-auto bg-gray-600">
                    <img src={BannerImage} className="w-full banner-image object-cover" alt="" />
                </div>

                <div className="col-span-1 h-auto shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full p-5">
                        <div className="col-span-1 h-64 shadow-md rounded-full rounded-tl-none bg-gray-900 text-white flex justify-center items-center">
                            <h1 className="text-4xl font-semibold">For Her</h1>
                        </div>
                        <div className="col-span-1 h-64">
                            <img src={ForHerImage} className="w-full h-64 object-cover rounded-full rounded-tr-none shadow-md" alt="" />
                        </div>
                        <div className="col-span-1 h-64">
                            <img src={ForHimImage} className="w-full h-64 object-cover rounded-full rounded-bl-none shadow-md" alt="" />
                        </div>
                        <div className="col-span-1 h-64 shadow-md rounded-full rounded-br-none bg-gray-900 text-white flex justify-center items-center">
                            <h1 className="text-4xl font-semibold">For Him</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SummerCollection;