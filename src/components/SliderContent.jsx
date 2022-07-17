import React from 'react';

const SliderContent = ({heading, details, image}) => {
    return (
        <div className={"grid place-items-center"}>
            <div className={"h-[85%] md:h-[80%]"}>
                <h3 className={"text-[#1B507E] text-[24px] text-center font-bold mx-auto w-[90%] md:w-[70%]"}>{heading}</h3>
                <p className={"text-[#79869F] mt-[10px] text-[15px] md:text-[17px] text-center w-[80%] md:w-[70%] mx-auto"}>{details}</p>
                <img className={"mx-auto w-full md:w-[90%]"} src={image} alt=""/>
            </div>
        </div>
    );
};

export default SliderContent;