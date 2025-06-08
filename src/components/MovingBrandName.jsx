const MovingBrandName = () => {
    const fashionDresses =["Saree", "Lehenga", "Salwar Suit", "Anarkali", "Kurti", "Ghagra Choli", "Patiala Suit", "Churidaar", "Palazzo Suit", "Angrakha", "Pattu Pavadai", "Mekhela Chador", "Chaniya Choli", "Sharara", "Dupatta", "Kameez", "Kaftan", "Gown", "Maxi Dress", "Tunic"];

    return (
        <div className="relative overflow-hidden bg-gray-800 h-20 flex items-center">
            <div className="marquee-track">
                <div className="marquee-content">
                    {fashionDresses.map((name, idx) => (
                        <h3 key={idx} className="text-amber-100 mx-10 font-mono">
                            {name}
                        </h3>
                    ))}

                    {/* Duplicate for cyclic scrolling */}
                    {fashionDresses.map((name, idx) => (
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

