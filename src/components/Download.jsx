import GooglePlay from "../assets/images/google-play.svg";
import AppStore from "../assets/images/app-store.svg";
import Underline from "../assets/images/line.svg";
import Phones from "../assets/images/Phones.png";
import MobilePhone from "../assets/images/cardtonic-image2.png";

const Download = () => {
    return (
        <section>
            <div className={"md:w-[60%] hidden md:block mx-auto w-[80%]"}>
                <div className={"pt-[90px] flex justify-between items-center"}>
                    <h3 className={"text-[#1B507E] relative font-bold leading-[60px] text-[54px]"}>
                        Download <br/> Cardtonic App
                        <img className={"absolute w-[240px] left-3 top-[53px]"} src={Underline} alt=""/>
                    </h3>

                    <div className="line"/>

                    <div className={"flex gap-3 w-[40%]"}>
                        <img src={GooglePlay} alt=""/>
                        <img src={AppStore} alt=""/>
                    </div>
                </div>

                <div className={"w-[40%] mt-[30px]"}>
                    <p className={"text-[#1B507E] text-[18px]"}>Experience the best of Cardtonic as you download our
                        mobile application to your phone or
                        tablet. Available for iOS and Android operating systems.
                    </p>

                    <button className={"mt-[20px] bg-[#FFEACA] font-bold w-[165px] h-[55px] rounded-xl"}>Register
                    </button>
                </div>

                <div className={"flex justify-end"}>
                    <img className={"w-[35%] mr-[20px]"} src={Phones} alt=""/>
                </div>
            </div>

            {/*---mobile only---*/}
            <div className={"w-[86%] md:hidden pt-[50px] mx-auto"}>

                <h3 className={"text-[#1B507E] relative font-bold leading-[37px] text-[35px]"}>
                    Download <br/> Cardtonic App
                    <img className={"absolute w-[190px] left-1 -bottom-[14px]"} src={Underline} alt=""/>
                </h3>

                <p className={"text-[#1B507E] w-[90%] mt-[20px] text-[16px]"}>Experience the best of Cardtonic as you download our
                    mobile application to your phone or
                    tablet. Available for iOS and Android operating systems.
                </p>

                <div className={"mt-[20px] flex justify-between"}>
                    <div className={"space-y-2 flex-1"}>
                        <img src={GooglePlay} alt=""/>
                        <img src={AppStore} alt=""/>
                    </div>

                    <div className={"flex-1 mt-2"}>
                        <img src={MobilePhone} alt=""/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Download;