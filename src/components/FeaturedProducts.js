import { RiHeart2Line } from "react-icons/ri";
import { TiStar } from "react-icons/ti";
import CardPhotos from "../assets/card-shoes.jpg"
import CardPhotos2 from "../assets/card-shoes-2.jpg"
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {

    return (
        <div className="pt-10 bg-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold"> Featured<b className="font-light">Products</b> </h1>
                <p className="text-gray-500 font-sans">Amazing products added recently in our catalog</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-20 mt-10">

                <ProductCard
                    discountPercent={'-17%'}
                    category={"Fashion, Featured Product"}
                    productName={'Yellow Men Shoes'}
                    productImage={CardPhotos}
                    originalPrice={"Rs.5900"}
                    discountedPrice={'Rs.4900'}
                >
                </ProductCard>

                <ProductCard
                    discountPercent={'-17%'}
                    category={"Fashion, Featured Product"}
                    productName={'Black Men Shoes'}
                    productImage={CardPhotos2}
                    originalPrice={"Rs.5900"}
                    discountedPrice={'Rs.4900'}
                >
                </ProductCard>

                <ProductCard
                    discountPercent={'-17%'}
                    category={"Fashion, Featured Product"}
                    productName={'Yellow Men Shoes'}
                    productImage={CardPhotos}
                    originalPrice={"Rs.5900"}
                    discountedPrice={'Rs.4900'}
                >
                </ProductCard>

                <ProductCard
                    discountPercent={'-17%'}
                    category={"Fashion, Featured Product"}
                    productName={'Black Men Shoes'}
                    productImage={CardPhotos2}
                    originalPrice={"Rs.5900"}
                    discountedPrice={'Rs.4900'}
                >
                </ProductCard>
            </div>
        </div>
    );
}

export default FeaturedProducts