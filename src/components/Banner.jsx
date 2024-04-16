import { Swiper, SwiperSlide } from 'swiper/react';
//import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'
import image4 from '../assets/img4.jpg'
import image5 from '../assets/img5.jpg'

const Banner = () => {
    return (
        <div className='flex justify-center container items-center'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '  src={image1} alt="Slide 1" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>Seaside Serenity Beckons: Immerse yourself in the tranquility of coastal living.</h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>Unwind by the shore in our charming seaside cottages, where the rhythm of the waves lulls you into relaxation. <br /> Wake up to breathtaking ocean views and spend your days exploring sandy beaches and hidden coves.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={image2} alt="Slide 2" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>Urban Elegance Redefined: Discover a world of sophistication in the heart of the city.</h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>Embrace the energy of urban living in our stylish boutique hotel, where contemporary design meets exceptional comfort. <br /> Explore the vibrant cityscape from our prime location, and return to a sanctuary of elegance after a day of adventure</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={image3} alt="Slide 3" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>Experience Coastal Luxury: Dive into serenity with our oceanfront villas, where every sunrise is a masterpiece.</h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>Indulge in the ultimate beachfront retreat with our luxurious villas boasting panoramic views of the azure waters. <br /> Unwind in style with spacious interiors, private pools, and personalized service.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3'   src={image4} alt="Slide 4" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>Luxury Awaits in Every Detail: Elevate your vacation experience with our exclusive resorts.</h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>Experience unparalleled luxury in our exquisite resorts, where every detail is meticulously crafted to exceed your expectations. <br /> From world-class amenities to impeccable service, indulge in a getaway of opulence and refinement.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={image5} alt="Slide 4" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>Escape to Tranquility: Discover Serene Retreats Amidst Nature's Embrace</h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>From cozy cabins to secluded lodges, each abode is a sanctuary of comfort and relaxation. Experience the harmonious blend of rustic charm and modern elegance, <br /> where every detail is thoughtfully curated to create an unforgettable escape.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;