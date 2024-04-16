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
                        <h3>Title 1</h3>
                        <p>Description 1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={image2} alt="Slide 2" />
                    <div className="slide-content">
                        <h3>Title 2</h3>
                        <p>Description 2</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={image3} alt="Slide 3" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl'>Experience Coastal Luxury: Dive into serenity with our oceanfront villas, where every sunrise is a masterpiece.</h3>
                        <p>Description 3</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={image4} alt="Slide 4" />
                    <div className="slide-content">
                        <h3>Title 4</h3>
                        <p>Description 4</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={image5} alt="Slide 4" />
                    <div className="slide-content">
                        <h3>Title 4</h3>
                        <p>Description 4</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;