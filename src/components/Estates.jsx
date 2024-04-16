import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const Estates = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('data.json'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setEstates(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="flex justify-center container items-center my-10">
             <div className="grid gap-8 my-8  lg:grid-cols-2 grid-cols-1 mx-5">
                    {estates.map(estate => <EstateCard estate={estate} key={estate.id} />)}
                </div>
        </div>
    );
};

export default Estates;