import { FaShippingFast } from "react-icons/fa"
import { Ri24HoursLine, RiMoneyDollarCircleLine, RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
            <div className="col-span-1 flex justify-center items-center space-x-3 py-7 border-r border-white">
                <div>
                    <FaShippingFast className="w-7 h-7"></FaShippingFast>
                </div>
                <div>
                    <p className="text-sm font-semibold"> FREE SHIPPING & RETURN</p>
                    <p className="text-xs"> Free shipping on all orders over $99.</p>
                </div>
            </div>

            <div className="col-span-1 flex justify-center items-center space-x-3 py-7 border-r border-white">
                <div>
                    <RiMoneyDollarCircleLine className="w-7 h-7"></RiMoneyDollarCircleLine>
                </div>
                <div>
                    <p className="text-sm font-semibold"> MONEY BACK GUARANTEE
                    </p>
                    <p className="text-xs"> 100% money back guarantee. </p>
                </div>
            </div>

            <div className="col-span-1 flex justify-center items-center space-x-3 py-7 border-r border-white">
                <div>
                    <Ri24HoursLine className="w-7 h-7"></Ri24HoursLine>
                </div>
                <div>
                    <p className="text-sm font-semibold"> ONLINE SUPPORT 24/7
                    </p>
                    <p className="text-xs"> Lorem ipsum dolor sit amet. </p>
                </div>
            </div>

            <div className="col-span-1 flex justify-center items-center space-x-3 py-7 border-r border-white">
                <div>
                    <RiSecurePaymentLine className="w-7 h-7"></RiSecurePaymentLine>
                </div>
                <div>
                    <p className="text-sm font-semibold"> SECURE PAYMENT
                    </p>
                    <p className="text-xs"> Lorem ipsum dolor sit amet. </p>
                </div>
            </div>
        </div>
    );
}

export default Services;