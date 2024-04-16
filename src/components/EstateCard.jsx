import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const EstateCard = ({ estate }) => {
    const { estate_title, segment_name, price, status, description, area, image, facilities, location } = estate
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-[20px] text-[18px] text-left text-[#233142] font-semibold">{estate_title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className=' text-[14px] text-left text-[#455d7a] font-medium'>#{segment_name} </p>
                        <p className=' text-[16px] text-left text-[#455d7a] font-medium'>#{status} </p>
                    </div>
                    <p className=' text-[14px] text-left text-[#455d7a]'>{description} </p>
                    <p className=' text-[16px] text-left font-semibold text-[#f95959]'>{price} </p>

                    <p className=' text-[14px] text-left text-[#455d7a] font-medium'>Area:{area} </p>
                    <p className=' text-[16px] text-left text-[#455d7a] font-medium'>Location:{location} </p>
                    <div className="flex items-center justify-evenly w-full ">
                        <ul className="text-[14px] text-[#455d7a] font-medium list-disc">
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