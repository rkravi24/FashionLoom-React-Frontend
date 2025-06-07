// const MovingBrandName = () => {
//     const brandName = ["Hero","Tata","BMW","Suzuki","Porsche","Audi","Mercedes"]
//     return (
//         <>
//         <div className=" gap-10 flex items-center justify-center w-full h-20 bg-gray-800">
//              {brandName.map((name,idx)=>(
//                 <h1>{name}</h1>
//              ))}
//         </div>
//         </>
//     );
// };

// export default MovingBrandName

// Import custom CSS


// const MovingBrandName = () => {
//     const brandName = ["Hero", "Tata", "BMW", "Suzuki", "Porsche", "Audi", "Mercedes", "BMW", "Suzuki", "Porsche", "Audi"];

//     return (

//         <div className="bg-gray-800 h-20 flex items-center justify-center border ">
//             <div className=" moving border">
//                 {brandName.map((name, idx) => (
//                     <h3 key={idx} className="text-white text-xl font-semibold inline mr-20">
//                         {name}
//                     </h3>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MovingBrandName;


const MovingBrandName = () => {
    const brandName = ["Nike", "Adidas", "Puma", "Zara", "H&M", "Levi's", "Gucci", "Prada", "Louis Vuitton", "Burberry", "Tommy Hilfiger", "Calvin Klein", "Uniqlo", "Versace", "Balenciaga", "Forever 21", "The North Face", "Under Armour", "Reebok", "Diesel"];

    return (
        <div className="relative overflow-hidden bg-gray-800 h-20 flex items-center">

            <div className="marquee-track">

                <div className="marquee-content">

                    {brandName.map((name, idx) => (
                        <h3 key={idx} className="text-amber-100 mx-10 font-mono">
                            {name}
                        </h3>
                    ))}

                    {/* Duplicate for cyclic scrolling */}
                    {brandName.map((name, idx) => (
                        <h3 key={`dup-${idx}`} className="text-amber-100 mx-10 font-mono">
                            {name}
                        </h3>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default MovingBrandName;

