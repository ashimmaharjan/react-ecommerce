
import { RiAccountPinCircleLine, RiHeart2Line, RiLoginBoxLine, RiShoppingBag3Line } from 'react-icons/ri';
const Navbar = () => {
    return (

        <header>
            <div className="w-full h-12 text-sm bg-gray-800 text-white flex justify-between px-10 items-center">
                <div>
                    <h1>Get 10% OFF at the eTTCom's GIFTs Selection - <b>Shop Now!</b></h1>
                </div>

                <div className="flex space-x-12">
                    <a href="" className="inline-flex"> <RiAccountPinCircleLine className="w-5 h-5 mr-1"></RiAccountPinCircleLine> My Account </a>
                    <a href="" className="inline-flex"> <RiHeart2Line className="w-5 h-5 mr-1"></RiHeart2Line> My Wishlist </a>
                    <a href="" className="inline-flex"> <RiShoppingBag3Line className="w-5 h-5 mr-1"></RiShoppingBag3Line> My Cart </a>
                    <a href="" className="inline-flex"> <RiLoginBoxLine className="w-5 h-5 mr-1"></RiLoginBoxLine> Login </a>
                </div>
            </div>
        </header>

    );
}

export default Navbar;