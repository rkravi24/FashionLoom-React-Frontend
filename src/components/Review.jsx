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
            name: "Aanya",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum?"
        },
    ]
    return(
        <>
            <div className="flex flex-col flex-wrap items-center p-10 justify-center bg-amber-100">
                <h1 className="text-3xl font-mono "> :) Hear from Happy Shoppers</h1>
               <div className="flex">
                 {review.map((item) =>(
                    <div className="card h-full p-4 mt-4 mx-4 w-70 text-justify bg-red-100 rounded border-r-2 border-b-2 border-l-1 border-t-1">
                        <p>~{item.name}</p>
                        <p>{item.text}</p>
                    </div>
                ))}
               </div>
            </div>
        </>
    )
}

export default Review