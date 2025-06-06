const HeroSection = () => {
    const imageList = [
        "https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/28994695/pexels-photo-28994695/free-photo-of-trendy-woman-posing-in-retro-style-outfit-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ];

    return (
        <div className="flex items-center w-full h-100 overflow-hidden">

            {imageList.map((url, index) => (
                <div key={index} className="h-full w-full  bg-cover bg-center bg-no-repeat  flex items-center justify-center" style={{
                    backgroundImage: `url(${url})`}} />
            ))}

            {/* TEXT */}
            <div className="absolute flex-col ml-[150px]">
                <h1 className=" text-5xl font-semibold">Style that Moves with You</h1>
                <p className="mt-2 text-xl">Premium Quality. Timeless Design. Effortless Comfort.</p>
                <button className="bg-white mt-4 text-black p-4 w-[200px] rounded-xl ">Explore Now</button>
                <p className="mt-2">Join 100,000+ trendsetters who made the switch.</p>
            </div>
        </div>
    );
};

export default HeroSection
