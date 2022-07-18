import Line from "../assets/images/line.svg";
import PartnerImage from "../assets/images/partner.png";

const Partner = () => {
    return (
        <section className={"bg-[#EFF8FF] pb-[50px] md:pb-[60px]"}>
            <div className={"md:w-[60%] mx-auto w-[80%]"}>
                {/*top*/}
                <div className={"pt-[60px] md:pt-[130px] flex items-center justify-between flex-col flex-col-reverse md:flex-row"}>
                    <p className={"md:w-[40%] mt-[30px] md:mt-0 text-[16px] md:text-[18px] leading-[20px] text-[#002444] font-[400]"}>
                        Are you willing to fly into the global gift card buzz
                        and and <span className={"italic"}>giftcardize </span>
                        your business by taking advantage of these fast-rising niche?
                        Then, you might be interested in our partnership program.
                    </p>

                    {/*line*/}
                    <div className={"line hidden md:block"}/>

                    <div className={"md:w-[45%] w-[100%] relative"}>
                        <h3 className={"md:text-[46px] text-[32px] text-[#002444] font-bold"}>Become a Partner</h3>
                        <img className={"hidden w-[300px] absolute -bottom-[3px] right-[10px]"} src={Line} alt=""/>
                        <img className={"md:hidden w-[170px] absolute -bottom-[3px] right-[10px]"} src={Line} alt=""/>
                    </div>
                </div>

                {/*image*/}
                <div className={"mt-[20px]"}>
                    <img className={"mx-auto"} src={PartnerImage} alt=""/>
                </div>

                <div className={"grid mt-[60px] place-items-center space-y-2"}>
                    <button className={"rounded-[8px] bg-[#1B507E] px-[50px] text-white font-semibold py-[14px]"}>Apply Now</button>
                    <p className={"text-sm text-[#FF0000]"}>Limited Selection Applies</p>
                </div>

            </div>
        </section>
    );
};

export default Partner;