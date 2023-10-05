import { useState } from "react";
import "./Bannar"

const Bannar = ({hendlesearchbutton}) => {
    const [inputtext, setinputtext] = useState('');

    const hendleinputtext = (e) => {
        setinputtext(e.target.value);
    };
    
    return (
        <div className="hero z-10 h-[600px] opacity-75" style={{ backgroundImage: 'url(https://i.ibb.co/qWdxX6G/world-blood-donor-day-creative-collage.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-10  text-2xl md:text-3xl lg:text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                    <div className="mt-3">
                            <input className=" p-2 rounded-l-xl text-[#0B0B0B]  p-4 font-me"  onChange={hendleinputtext} type="search" name="" id="inpurvalue" placeholder="searching..." />
                            <button className="rounded-r-xl p-4 bg-[#FF444A]" onClick={() => hendlesearchbutton(inputtext)}>Search</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;