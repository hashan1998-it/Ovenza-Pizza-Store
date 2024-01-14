import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { AiFillTag } from "react-icons/ai";
import { IoIosPersonAdd } from "react-icons/io";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Navbar() {
    const [isSideDrawerHidden,setIsSideDrawerHidden] = useState(true)


    const sideDrawerHiddenCss = "left-[-300px]"

    const handleMenuClick = ()=>{
        setIsSideDrawerHidden(!isSideDrawerHidden)
    }


    return (
        <nav className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* left side */}
            <div className="flex items-center">
                <IoMenu size={30} className="cursor-pointer" onClick={handleMenuClick} />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Oven<span className="text-green-400 font-bold">sa</span></h1>
                <div className="hidden lg:flex bg-gray-200 items-center rounded-full p-1 text-[14px]">
                    <p className="bg-green-400 text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/* Search bar */}
            <div className="bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <FaSearch size={30} className="p-2" />
                <input type="text" name="search" id="search" placeholder="Search Pizzas" className="bg-transparent p-1 focus:outline-none w-full" />
            </div>

            {/* Cart Button */}
            <button className="hidden md:flex items-center bg-green-400 text-white py-2 hover:bg-green-600">
                <FaShoppingCart className="mr-2" /> Cart
            </button>

            {/* Mobile Menu     */}
            {/* Overlay  */}
            {isSideDrawerHidden 
                ? null
                :<div className="h-screen bg-black/60 w-full fixed z-10 top-0 left-0"></div>
            }
            {/* Side drawer menu */}
            <div className={twMerge("bg-white w-[300px] h-screen fixed top-0 left-0 z-10 duration-300",isSideDrawerHidden ? sideDrawerHiddenCss : '')}>
                <IoMdClose size={25} className="absolute top-4 right-4 cursor-pointer" onClick={handleMenuClick}/>
                <h1 className="text-2xl p-3">Oven<span className="text-green-400 font-bold">sa</span></h1>
                <nav >
                    <ul className="flex flex-col gap-4 pl-4 py-4">
                        <li className="flex items-center cursor-pointer"><TbTruckDelivery  className="mr-2"/>Orders</li>
                        <li className="flex items-center cursor-pointer"><MdFavoriteBorder  className="mr-2"/>Favorites</li>
                        <li className="flex items-center cursor-pointer"><IoIosWallet  className="mr-2"/>Wallet</li>
                        <li className="flex items-center cursor-pointer"><IoIosHelpCircle  className="mr-2"/>Help</li>
                        <li className="flex items-center cursor-pointer"><AiFillTag  className="mr-2"/>Promotions</li>
                        <li className="flex items-center cursor-pointer"><IoIosPersonAdd  className="mr-2"/>Friends</li>
                    </ul>
                </nav>
            </div>


        </nav>
    )
}

export default Navbar