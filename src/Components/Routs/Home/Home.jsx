import { useLoaderData } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import EductionLIst from "../Eduction/EductionLIst";
import { useEffect, useState } from "react";


const Home = () => {
    const [inputtext,setinputtext] = useState("");
    const [maindata,setmaindata] = useState([])
    const datas = useLoaderData();
    const hendlesearchbutton=(text)=>{
        setinputtext(text);
    }
    useEffect(()=>{
       
    if(inputtext==="Health"){
        const helthdata = datas.filter(datas=>datas.category==="Health");
        setmaindata(helthdata)
    }else if(inputtext==="Education"){
        const edudata = datas.filter(datas=>datas.category==="Education");
        setmaindata(edudata);
    }else if(inputtext==="Food"){
        const fooddata = datas.filter(datas=>datas.category==="Food");
        setmaindata(fooddata);
    }else if(inputtext==="Clothing"){
        const fooddata = datas.filter(datas=>datas.category==="Clothing");
        setmaindata(fooddata);
    }else{
        setmaindata(datas)
    }
},[datas,inputtext])
    return (
        <div>
            <Bannar hendlesearchbutton={hendlesearchbutton} />
            <EductionLIst datas={maindata}/>
        </div>
    );
};

export default Home;