import { AiFillTag } from "react-icons/ai";
import { IoIosHelpCircle, IoIosPersonAdd, IoIosWallet } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export const sideDrawerMenuText = [
    { icon: <TbTruckDelivery className="mr-2" />, text: "Orders" ,key:"Orders"},
    { icon: <MdFavoriteBorder className="mr-2" />, text: "Favorites",key:"Favorites" },
    { icon: <IoIosWallet className="mr-2" />, text: "Wallet",key:"Wallet" },
    { icon: <IoIosHelpCircle className="mr-2" />, text: "Help",key:"Help" },
    { icon: <AiFillTag className="mr-2" />, text: "Promotions",key:"Promotions" },
    { icon: <IoIosPersonAdd className="mr-2" />, text: "Friends",key:"Friends" }
]

