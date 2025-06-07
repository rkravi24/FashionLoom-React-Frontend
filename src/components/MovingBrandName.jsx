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

