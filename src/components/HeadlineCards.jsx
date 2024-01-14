

function HeadlineCards() {
    return (
        <div className="max-w-[1640px] p-4 mx-auto grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="relative rounded-xl">
                <div className="bg-black/40 h-full w-full absolute text-white font-bold rounded-xl p-5 text-lg">
                    <p>Cheese Pizza</p>
                    <p>Starting from Rs.980</p>
                    <button className="bg-green-400 mt-2">Order Now</button>
                </div>
                <img src="https://images.unsplash.com/photo-1604917877934-07d8d248d396?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D" alt="chesse pizza" className="max-h-[200px] w-full object-cover rounded-xl" />
            </div>

            {/* Card */}
            <div className="relative rounded-xl">
                <div className="bg-black/40 h-full w-full absolute text-white font-bold rounded-xl p-5 text-lg">
                    <p>Chicken Pizza</p>
                    <p>Starting from Rs.980</p>
                    <button className="bg-green-400 mt-2">Order Now</button>
                </div>
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fHww" alt="chesse pizza" className="max-h-[200px] w-full object-cover rounded-xl" />
            </div>

            {/* Card */}
            <div className="relative rounded-xl">
                <div className="bg-black/40 h-full w-full absolute text-white font-bold rounded-xl p-5 text-lg">
                    <p>Veg Pizza</p>
                    <p>Starting from Rs.980</p>
                    <button className="bg-green-400 mt-2">Order Now</button>
                </div>
                <img src="https://images.unsplash.com/photo-1669895616443-5d21d5acc6e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnJTIwcGl6emF8ZW58MHx8MHx8fDA%3D" alt="chesse pizza" className="max-h-[200px] w-full object-cover rounded-xl" />
            </div>

        </div>
    )
}

export default HeadlineCards