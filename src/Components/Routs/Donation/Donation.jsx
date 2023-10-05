import { useLoaderData } from "react-router-dom";
import { GetLocalStrageData } from "../Utlity/Utlity";
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Donation = () => {

    const prevdatas = useLoaderData();
    const [data, setdata] = useState([]);
    const [dinamitdata, setdinamitdata] = useState(false)
    useEffect(() => {
        const localstrageid = GetLocalStrageData();
        if (localstrageid.length > 0) {
            const maindata = prevdatas.filter(prevdatas => localstrageid.includes(prevdatas.id));
            setdata(maindata)
        }
    }, [prevdatas])
    const hendleAlldata = () => {
        setdinamitdata(!dinamitdata)
    }
    return (
        <div>
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-3" >
                    {
                        dinamitdata ? data.map((data, idx) => <Card key={idx} data={data}></Card>) : data.slice(0, 4).map((data, idx) => <Card key={idx} data={data}></Card>)
                    }
                </div>           
            <div className="text-center">
                {
                    data.length > 4 && <button onClick={hendleAlldata} className="border text-white font-bold rounded-md px-5 py-2 bg-[#FF444A]">{dinamitdata ? "See Less" : " See more.."}</button>
                }
            </div>

        </div>
    );
};

export default Donation;