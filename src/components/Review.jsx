const Review = () => {
    const review = [
        {
            name: "Srena",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Zoya",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Aarohi",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Zoya",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Aarohi",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Zoya",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Aarohi",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Zoya",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Aarohi",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Zoya",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Aarohi",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
        {
            name: "Aanya",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
    ]
    return (
        <div className="flex flex-col flex-wrap items-center p-10 justify-center bg-amber-100">
            <h1 className="text-3xl font-mono">:) Hear from Happy Shoppers</h1>
            <div className="marquee-track">
                <div className="marquee-content flex">
                    {review.map((item, index) => (
                        <div key={index} className="p-4 mt-4 mx-5 w-[280px] border flex flex-col bg-red-100 rounded break-words whitespace-normal">
                            <p className="font-semibold text-lg">~ {item.name}</p>
                            <p className="text-sm mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Review