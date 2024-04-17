import img5 from '../assets/img5.jpg'

const Booking = () => {
    return (
        <div className="flex justify-center my-10 items-center container">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img5})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 lg:text-5xl text-xl font-bold">Hello there!</h1>
                        <p className="mb-5 font-bold lg:text-xl text-[16px] text-[white]">Embark on a journey filled with unforgettable moments. From secluded hideaways to vibrant city escapes, let WanderInn be your guide to extraordinary experiences.
                          <br />  Start planning your next getaway today and create memories that will last a lifetime. Book now and let the adventure begin!</p>
                        <button className="btn bg-[#f95959] border-none text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
