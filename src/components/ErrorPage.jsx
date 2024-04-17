import errorImage from '../assets/not-found-2384304_1280.jpg'
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
    return (
        <div>
             <Helmet>
                <title>
                    WanderInn|UpdateProfile
                </title>
            </Helmet>
            <img src={errorImage} className='flex justify-center container items-center w-1/2 h-1/2 mx-auto my-10' alt="" />

        </div>
    );
};

export default ErrorPage;