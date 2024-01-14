import { headlinePizzas } from "../data/constant"

function HeadlineCards() {
    return (
        <div className="max-w-[1640px] p-4 mx-auto grid md:grid-cols-3 gap-6">
            {/* Card */}
            {headlinePizzas.map(item =>
                <div className="relative rounded-xl" key={item.key}>
                    <div className="bg-black/40 h-full w-full absolute text-white font-bold rounded-xl p-5 text-lg">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <button className="bg-green-400 mt-2">Order Now</button>
                    </div>
                    <img src={item.image} alt="pizza" className="max-h-[200px] w-full object-cover rounded-xl" />
                </div>)
            }
        </div>
    )
}

export default HeadlineCards