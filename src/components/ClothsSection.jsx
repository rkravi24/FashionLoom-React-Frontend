const ClothsSection = () => {

    const product = [
        {
            id: 1,
            title: "Saree",
            description: " Indian elegance redefined",
            price: "₹1999",
            image: "https://images.pexels.com/photos/15226349/pexels-photo-15226349/free-photo-of-woman-in-yellow-dress-sitting-on-black-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 2,
            title: "Lehenga",
            description: "A royal blend of fashion and heritage",
            price: "₹1499",
            image: "https://images.pexels.com/photos/9418537/pexels-photo-9418537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 3,
            title: "Salwar Suit",
            description: "Graceful. Comfortable. Timeless",
            price: "₹2499",
            image: "https://images.pexels.com/photos/25184999/pexels-photo-25184999/free-photo-of-model-in-traditional-embroidered-salwar-kameez-dress-and-scarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 1,
            title: "Chikankari Kurta",
            description: "Elegant threads for modern grace",
            price: "₹1999",
            image: "https://images.pexels.com/photos/28512776/pexels-photo-28512776/free-photo-of-elegant-chikankari-kurti-fashion-in-lucknow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    ];

    return (

        <>
            <div className="flex items-center justify-center flex-col" style={{ backgroundColor: "#b8b29c"}}>
                <h1 className="mt-8 text-black text-4xl font-mono">
                    Step into style with our curated clothing selection
                </h1>
                <p className="mt-5">Elegance. Craftsmanship. Heritage</p>

                <div className="flex flex-wrap items-center justify-evenly mt-4">
                    {product.map((item) => (
                        <div key={item.id} className="flex w-[280px] h-100 bg-cover bg-center bg-amber-300 m-4 items-end rounded-xl" style={{ backgroundImage: `url(${item.image})` }}>
                            <div className="bg-gray-200/70 text-black w-100 h-30 flex flex-col justify-center items-center">
                                <p className="font-semibold">{item.title}</p>
                                <p>{item.description}</p>
                                <button className="bg-amber-800 text-white font-semibold px-4 py-2 my-2 rounded-xl hover:bg-amber-600 cursor-pointer">shop now</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ClothsSection
