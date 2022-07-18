import Line from "../assets/images/line.svg";
import NaijaNews from "../assets/images/naijanews-logo-h.png";
import Vanguard from "../assets/images/vanguard-logo-h.png";
import NaijaLegit from "../assets/images/naij-logo-h.png";
import Pulse from "../assets/images/pulse-logo-h.png";
import Punch from "../assets/images/punch-logo-h.png";
import Today from "../assets/images/today-logo-h.png";

const News = () => {
    return (
        <section className={"bg-[#F8F8F8] pb-[90px]"}>
            <div className={"md:w-[60%] md:block mx-auto w-[80%]"}>
                <div className={"pt-[60px] md:pt-[130px] flex items-center justify-between flex-col flex-col-reverse md:flex-row"}>
                    <p className={"md:w-[45%] mt-[30px] md:mt-0 text-[16px] md:text-[17px] leading-[20px] text-[#1B507E] font-[400]"}>
                        As a demonstration of our quality service and awesome impression, we have been
                        published by some platforms across Nigeria, Ghana and beyond.
                    </p>

                    {/*line*/}
                    <div className={"line hidden md:block"}/>

                    <div className={"md:w-[45%] hidden md:block w-[100%] relative"}>
                        <h3 className={"md:text-[54px] leading-[58px] text-[32px] text-[#1B507E] font-bold"}>Cardtonic in <br/> the news</h3>
                        <img className={"hidden md:block w-[230px] absolute top-[55px] left-[1px]"} src={Line} alt=""/>
                        <img className={"md:hidden w-[170px] absolute -bottom-[3px] right-[10px]"} src={Line} alt=""/>
                    </div>

                    <div className={"md:w-[45%] md:hidden w-[100%] relative"}>
                        <h3 className={"leading-[35px] text-[32px] text-[#1B507E] font-bold"}>Cardtonic in the news</h3>
                        <img className={"w-[170px] absolute -bottom-[10px] left-0"} src={Line} alt=""/>
                    </div>
                </div>

                <div className={"hidden md:flex gap-5 justify-between mt-[120px] mb-[50px]"}>
                    {[NaijaLegit, NaijaNews, Pulse, Punch, Today, Vanguard].map((item) => <img className={"hover:scale-105 transition-all cursor-pointer"} src={item} alt=""/>)}
                </div>

                <div className={"md:hidden flex flex-wrap space-y-5 mt-[50px] mb-[30px]"}>
                    <img src={NaijaLegit} alt=""/>

                    <div className={"flex justify-between gap-5"}>
                        <img src={Pulse} alt=""/>
                        <img src={NaijaNews} alt=""/>
                    </div>

                    <div className={"flex flex-wrap gap-5"}>
                        <img src={Punch} alt=""/>
                        <img src={Today} alt=""/>
                        <img src={Vanguard} alt=""/>
                    </div>
                </div>

                <hr/>

                <a href={"#"} className={"text-[#00CEDE] text-left block md:text-center mt-5 md:mt-8"}>Follow our ongoing Upskill #CardtonicMacbookGiveaway program</a>
            </div>
        </section>
    );
};

export default News;