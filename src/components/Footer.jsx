import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className=" flex items-center justify-evenly h-32 bg-gray-800 text-white">

                <div className="flex flex-col ">
                    <h2 className="font-semibold text-gray-400">Contact</h2>
                    <a href="" className='text-sm text-gray-400'> <FontAwesomeIcon icon={faYoutube} /> youtube </a>
                    <a href="" className='text-sm text-gray-400'> <FontAwesomeIcon icon={faInstagram} /> instagram </a>
                    <a href="" className='text-sm text-gray-400'> <FontAwesomeIcon icon={faSquareXTwitter} /> x </a>
                </div>

                <div className="flex flex-col ">
                    <span className='text-sm text-gray-400'> &copy; All Right Reserved Fashion Loom - 2025</span>
                    <span className='text-sm text-gray-400'> North Ernakulam, Kerala</span>
                </div>

            </div>
        </>
    )
}
export default Footer 