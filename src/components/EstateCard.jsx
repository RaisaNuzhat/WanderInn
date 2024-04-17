import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css'
const EstateCard = ({ estate }) => {
    const { estate_title, segment_name, price, status, description, area, image, facilities, location } = estate
    useEffect(() =>{
        Aos.init();
    }       
        ,[]
    )
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl"  data-aos='fade-up-right'>
                <figure><img className='w-full h-full' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-4xl text-[18px] text-left text-[#233142] font-semibold">{estate_title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='sm: text-[16px] lg:text-xl text-left text-[#455d7a] font-medium'>#{segment_name} </p>
                        <p className='sm: text-[16px] lg:text-xl text-left text-[#455d7a] font-medium'>#{status} </p>
                    </div>
                    <p className=' sm:text-[14px]  text-2xl text-left text-[#455d7a]'>{description} </p>
                    <p className=' sm:Ltext-[16px] text-2xl text-left font-semibold text-[#f95959]'>{price} </p>

                    <p className=' sm:text-[14px] text-xl text-left text-[#455d7a] font-medium'>Area:{area} </p>
                    <p className=' sm:text-[16px]  text-xl text-left text-[#455d7a] font-medium'>Location:{location} </p>
                    <div className="flex items-center justify-evenly w-full ">
                        <ul className="sm:text-[14px] lg:text-2xl text-[#455d7a] font-medium list-disc">
                            {facilities.map((facility, index) => (
                                <li key={index}>{facility}</li>
                            ))}
                        </ul>

                    </div>
                    <div className="card-actions justify-end">
                    <Link  to={`/estatedetail/${estate.id}`} className="btn bg-[#f95959] text-white"> View property</Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};
EstateCard.propTypes = {
    estate: PropTypes.object
}
export default EstateCard;