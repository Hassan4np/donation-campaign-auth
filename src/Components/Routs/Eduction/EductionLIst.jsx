import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const EductionLIst = ({datas}) => {
const[datass,setdatas]= useState([])

useEffect(()=>{

},[])
console.log(datass)
    return (
        <div>
            <div className="grid mt-10 ml-16 md:ml-14  lg:ml-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-20 ">
                {
                    datas.map((data, idx) => <div key={idx}>
                        <NavLink to={`/card/${data.id}`}>
                            <div style={{ backgroundColor: data.card_bg }} className="relative flex w-[312px] h-[280px] flex-col border   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <div className="relative   overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 w-[312px] h-[190px]">
                                    <img
                                        src={data.picture}
                                        className=" object-cover"
                                    />
                                </div>
                                <div className="p-5  ">
                                    <h5 className="mb-1 w-[90px] px-2 py-1  text-center text-base font-medium rounded-md" style={{ backgroundColor: data.category_bg,color: data.text_bg }}>{data.category}</h5>
                                    <p style={{ color: data.text_bg }} className={`block font-sans  text-lg font-semibold font-medium leading-relaxed text-blue-gray-900 antialiased `}>
                                        {data.title}
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>)
                }
            </div>
        </div>
    );
};

export default EductionLIst;