import Slider from "react-slick";
import ProductCard from "./ProductCard";

import CardPhotos from "../assets/card-shoes.jpg"
import CardPhotos2 from "../assets/card-shoes-2.jpg"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#0f172a", borderRadius: '10px', marginTop: '-40px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#0f172a", borderRadius: '10px', marginTop: '-40px' }}
            onClick={onClick}
        />
    );
}


const BestSeller = () => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: false,
                }
            }
        ]
    };

    return (
        <div className="pt-10 bg-white pb-10">
            <div className="text-center">
                <h1 className="text-3xl font-bold"> Best Seller<b className="font-light">Products</b> </h1>
                <p className="text-gray-500 font-sans">Only the best seller products added recently in our catalog</p>
            </div>

            <div className="mt-10 px-3 md:px-10 lg:px-20">
                <Slider {...settings}>
                    <div className="px-8">
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
                    <div className="px-8">
                        <ProductCard
                            discountPercent={'-17%'}
                            category={"Fashion, Featured Product"}
                            productName={'Yellow Men Shoes'}
                            productImage={CardPhotos}
                            originalPrice={"Rs.5900"}
                            discountedPrice={'Rs.4900'}
                        >
                        </ProductCard>
                    </div>
                    <div className="px-8">
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
                    <div className="px-8">
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
                    <div className="px-8">
                        <ProductCard
                            discountPercent={'-17%'}
                            category={"Fashion, Featured Product"}
                            productName={'Yellow Men Shoes'}
                            productImage={CardPhotos}
                            originalPrice={"Rs.5900"}
                            discountedPrice={'Rs.4900'}
                        >
                        </ProductCard>
                    </div>
                    <div className="px-8">
                        <ProductCard
                            discountPercent={'-17%'}
                            category={"Fashion, Featured Product"}
                            productName={'Yellow Men Shoes'}
                            productImage={CardPhotos}
                            originalPrice={"Rs.5900"}
                            discountedPrice={'Rs.4900'}
                        >
                        </ProductCard>
                    </div>
                </Slider>
            </div>

        </div>
    );
}

export default BestSeller;