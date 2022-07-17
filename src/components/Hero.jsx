import AppStore from "../assets/images/app-store.svg";
import PlayStore from "../assets/images/google-play.svg";
import Line from "../assets/images/line.svg";
import Banner from "../assets/images/banner.png"
    ;
import Cards from "./Cards";

const Hero = () => {
    return (
        <section className={"pb-[50px]"}>
            <div className={"md:mt-[45px] md:w-[60%] w-[90%] mx-auto flex flex-col md:justify-between md:flex-row"}>
                {/*left*/}
                <div className={"flex-1 mt-[10%]"}>
                    <h3 className={"text-[35px] text-center md:text-left leading-[39px] md:text-[53px] md:ml-[30px] font-semibold md:leading-[55px]"}>
                        <span className={"sell"}>Sell</span> <span className={"text-[#1B507E] relative"}>
                        Gift Cards
                        <img className={"object-cover w-[290px] h-[10px] absolute -bottom-1 right-0"} src={Line}
                             alt=""/>
                        </span> &
                        <br/> Earn Rewards 💰
                    </h3>

                    <p className={"text-[#002444] w-[80%] mx-auto md:ml-[30px] md:w-[79%] mt-[32px] mb-[37px] md:mt-[25px] md:mb-[22px] text-[17px] md:text-[24px] font-light"}>Exchange
                        unused gift cards for cash at amazing rates in split seconds.
                    </p>

                    <div className={"flex flex-col items-center md:flex-row gap-3 md:ml-[30px]"}>
                        <img src={PlayStore} alt=""/>
                        <img src={AppStore} alt=""/>
                    </div>
                </div>

                {/*right*/}
                <div className={"flex-1 mt-[45px] md:mt-[2%]"}>
                    <img className={"md:-ml-[10px] md:object-cover w-[85%] md:w-[90%] mx-auto "} src={Banner} alt=""/>
                </div>
            </div>

            <div className={"md:w-[42%] mt-[30px] w-[90%] mx-auto"}>
                <Cards />

                <div className={"mt-[60px] grid place-items-center"}>
                    <button className={"bg-[#F0F0F0] text-[#0024444] font-semibold w-[170px] rounded-[15px] h-[55px]"}>Register Now</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;