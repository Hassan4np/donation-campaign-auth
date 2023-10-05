

const Card = ({ data }) => {
    console.log(data)
    const { picture, title, category, category_bg, card_bg, text_bg, price } = data
    return (
        <div className="mb-5 mt-1 "  >
            <div style={{backgroundColor:card_bg}} className="relative flex   flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div> 
                <div className="p-4">
                    <h6 style={{backgroundColor:category_bg,color:text_bg}} className="mb-2 block w-[140px] text-base font-normal text-center px-5 py-1 rounded-md font-sans text-base font-semibold  leading-relaxed tracking-normal text-pink-500 antialiased">
                        {category}
                    </h6>
                    <h4 className="mb-2 block font-sans text-black text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <h5 style={{color:text_bg}} className="mb-2 text-base font-semibold">${price}</h5>
                    <button style={{backgroundColor:text_bg}} className="border rounded-md px-5 py-2  text-white text-base font-semibold">View Details</button>
                   
                </div>
            </div>
        </div>
    );
};

export default Card;