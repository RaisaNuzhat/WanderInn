import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
const EstateDetail = () => {
    const { id } = useParams();
    const [estatedetail, setEstateDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEstateDetail = async () => {
            try {
                const res = await fetch(`/data.json`);
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await res.json();
                const selectedEstate = data.find(estate => estate.id == id);
                setEstateDetail(selectedEstate);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchEstateDetail();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
             <Helmet>
                <title>
                    WanderInn|EstateDetails
                </title>
            </Helmet>
            {
                estatedetail &&
                <section>
                    <div className="dark:bg-violet-600">
                        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                            <h1 className="text-5xl font-bold leading-none lg:text-6xl sm:text-2xl text-[#233142] text-[ #233142] dark:text-gray-50">{estatedetail.estate_title}</h1>
                            <p className="mt-6 mb-8 lg:text-3xl sm:text-xl text-[#455d7a] sm:mb-12 xl:max-w-3xl dark:text-gray-50">{estatedetail.description}</p>
                            <div className="flex flex-wrap justify-center">
                            <div className="flex items-center justify-evenly w-full ">
                        <ul className="sm:text-[14px] lg:text-3xl text-[#455d7a] font-bold list-disc">
                            {estatedetail.facilities.map((facility, index) => (
                                <li key={index}>{facility}</li>
                            ))}
                        </ul>

                    </div>
                            </div>
                        </div>
                    </div>
                    <img src={estatedetail.image} alt={estatedetail.estate_title} className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
                </section>
            }
        </div>
    );
};

export default EstateDetail;
