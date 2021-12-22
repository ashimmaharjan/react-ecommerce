import { RiHeart2Line } from "react-icons/ri"
import { TiStar } from "react-icons/ti";

const ProductCard = ({ category, productName, productImage, originalPrice, discountedPrice, discountPercent }) => {
    return (
        <div className="col-span-1 h-auto relative">
            <div className="absolute text-xs w-auto py-1 px-3 flex items-center justify-center left-3 top-3 bg-red-400 font-sans text-white rounded-3xl">
                <h1>{discountPercent}</h1>
            </div>
            <img src={productImage} className="w-full h-64 object-cover rounded-xl shadow" alt="" />
            <div className="flex justify-between mt-3">
                <div>
                    <h1 className="text-gray-500 text-xs">{category}</h1>
                    <h1>{productName}</h1>
                    <p className="inline-flex">
                        <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                        <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                        <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                        <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                        <TiStar className="text-gray-400 w-4 h-4"></TiStar>
                    </p>
                    <div className="flex items-center font-semibold">
                        <p className="text-gray-500 line-through">{originalPrice}</p>
                        <p className="text-lg ml-3">{discountedPrice}</p>
                    </div>
                </div>
                <div>
                    <button>
                        <RiHeart2Line className="text-gray-400 w-5 h-5"></RiHeart2Line>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;