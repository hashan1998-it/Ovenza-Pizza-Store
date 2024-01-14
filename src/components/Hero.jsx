

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 mt-16">
        <div className="relative max-h-[500px]">
            {/* Overlay with Text */}
            <div className="absolute top-0 bg-black/50 w-full h-full text-white text-3xl sm:text-5xl md:text-6xl flex flex-col justify-center px-4 font-bold">
                <h1>Crafting <span className="text-green-400">Pizza</span> Perfection</h1>
                <h1>One Slice at a Time!</h1>
            </div>
            {/* Image */}
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="pizza" className="max-h-[500px] w-full object-cover" />
        </div>
    </div>
  )
}

export default Hero