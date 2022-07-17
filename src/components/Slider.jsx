import React from 'react';
import Downloads from "../assets/images/downloads.png";
import Trading from "../assets/images/trading.png";
import Rates from "../assets/images/rates.png";
import Usability from "../assets/images/usability.png";
import Instant from "../assets/images/instant.png";
import Response from "../assets/images/response.png";
import Previous from "../assets/images/leftArrow.svg";
import Next from "../assets/images/rightArrow.svg";

import SliderContent from "./SliderContent";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider = () => {
    return (
        <>
            <div className={"prev-btn"}>
                <img src={Previous} alt=""/>
            </div>

            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn"
                }}
                modules={[Navigation, Pagination]}
                className={"md:w-[525px] h-[310px] md:h-[350px] swiper"}
            >
                <SwiperSlide className={"bg-white rounded-[20px]"}>
                    <SliderContent
                        heading={"Download the app"}
                        details={"Download our mobile application or register on our website to start trading gift cards easily as bosses do."}
                        image={Downloads}
                    />
                </SwiperSlide>

                <SwiperSlide className={"bg-white rounded-[20px]"}>
                    <SliderContent
                        heading={"Login or Register"}
                        details={"Log in and get familiar with the three-step gift card trading process that takes only a few minutes to complete."}
                        image={Trading}
                    />
                </SwiperSlide>

                <SwiperSlide className={"bg-white rounded-[20px]"}>
                    <SliderContent
                        heading={"Friendly Rates"}
                        details={"Worry not about rates, we offer the best payouts for your assets based on the current average market prices."}
                        image={Rates}
                    />
                </SwiperSlide>

                <SwiperSlide className={"bg-white rounded-[20px]"}>
                    <SliderContent
                        heading={"Simplified User Interface"}
                        details={"Our platform is built with your best interest at heart, helping you sell gift cards using the simplest user interface."}
                        image={Usability}
                    />
                </SwiperSlide>

                <SwiperSlide className={"bg-white rounded-[20px]"}>
                    <SliderContent
                        heading={"Quick Payments"}
                        details={"Our payment system is amazingly coherent. You get your money almost instantly, no fees attached, no limits."}
                        image={Instant}
                    />
                </SwiperSlide>

                <SwiperSlide className={"bg-white rounded-[20px]"}>
                    <SliderContent
                        heading={"All we do is Reply"}
                        details={"Have a question? Our FAQ page is a whole knowledge base. Our support team is also available via live chat."}
                        image={Response}
                    />
                </SwiperSlide>
            </Swiper>

            <div className={"next-btn"}>
                <img src={Next} alt=""/>
            </div>
        </>

    );
};

export default Slider;