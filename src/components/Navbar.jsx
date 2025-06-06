import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full bg-gray-700 p-3 text-white">
                <p className="text-gray-400 font-bold">&lt;</p>
                <p className="font-bold underline ml-10 mr-10">Maximum 15% off on premimum Collection</p>
                <p className="text-gray-400 font-bold">&gt;</p>
            </div>
            <div className="flex items-center justify-evenly bg-amber-100 p-4">
                <h3 className="font-semibold text-black">Shop</h3>
                <h3 className="font-semibold text-black">Offer-Zone</h3>
                <h1 className="font-bold text-3xl text-black">FASHION LOOM</h1>
                <div className="flex items-center justify-evenly w-70">
                    <h3 className="font-semibold text-black mr-4">Review</h3>
                    <h3 className="font-semibold text-black mr-4">About</h3>
                    <FontAwesomeIcon icon={faUser} className='text-gray-600 text-xl mr-5'/>
                    <FontAwesomeIcon icon={faCartShopping} className="text-gray-600 text-xl" />
                </div>
            </div>
        </>
    )
}

export default Navbar