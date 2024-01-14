import { AiFillTag } from "react-icons/ai";
import { IoIosHelpCircle, IoIosPersonAdd, IoIosWallet } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export const sideDrawerMenuText = [
    { icon: <TbTruckDelivery className="mr-2" />, text: "Orders", key: "Orders" },
    { icon: <MdFavoriteBorder className="mr-2" />, text: "Favorites", key: "Favorites" },
    { icon: <IoIosWallet className="mr-2" />, text: "Wallet", key: "Wallet" },
    { icon: <IoIosHelpCircle className="mr-2" />, text: "Help", key: "Help" },
    { icon: <AiFillTag className="mr-2" />, text: "Promotions", key: "Promotions" },
    { icon: <IoIosPersonAdd className="mr-2" />, text: "Friends", key: "Friends" }
]

export const headlinePizzas = [
    { key: "Cheese", name: "Cheese Pizza", price: "989", image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D" },
    { key: "Chicken", name: "Chicken Pizza", price: "989", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fHww" },
    { key: "Veg", name: "Veg Pizza", price: "989", image: "https://images.unsplash.com/photo-1669895616443-5d21d5acc6e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnJTIwcGl6emF8ZW58MHx8MHx8fDA%3D" },
]