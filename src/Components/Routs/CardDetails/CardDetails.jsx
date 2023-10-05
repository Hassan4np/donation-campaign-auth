import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {  SaveLocatStrageData } from "../Utlity/Utlity";


const CardDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams();
    const inid = parseInt(id)
    const [data, setdata] = useState([]);
    useEffect(() => {
        const maindata = datas.find(maindata => maindata.id === inid);
        setdata(maindata)
    }, [datas, inid]);

const HendleButtonClick=(id)=>{
    SaveLocatStrageData(id)
}
    return (
        <div className="flex justify-center items-center mx-auto max-w-screen-xl ">
            <div className="relative flex max-w-screen-lg mx-auto mt-2 h-[700px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative  m-0 overflow-hidden rounded bg-transparent  text-gray-700 shadow-none z-10">
                    <img className=" w-[400px] md:w-[800px] ml-10 md:ml-12 lg:w-full h-[300px] md:h-[350px] lg:h-[450px]"
                        src={data.picture}
                        alt="ui/ux review check"
                    />
                </div>
                <h2 className="h-[110px] w-[400px] relative md:w-[800px] ml-[39px] md:ml-12  lg:w-[976px] z-20 ml-12 -mt-[110px] bg-[#0B0B0B80]">
                    <button onClick={()=>HendleButtonClick(inid)} style={{backgroundColor:data.text_bg}} className="text-white text-lg absolute text-lg font-semibold mt-10 ml-8 px-5 py-2 rounded-md">Donate ${data.price} </button>
                    </h2>
                
                <div className="p-6  ml-6">
                    <h4 className="block font-bold text-black text-3xl md:text-4xl lg:text-[40px] font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {data.title}
                    </h4>
                    <p className="mt-1 block text-[#0B0B0BB2]  text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {data.description}
                    </p>
                </div>
               
            </div>
        </div>
    );
};

export default CardDetails;