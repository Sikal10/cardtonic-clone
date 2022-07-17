import Underline from "../assets/images/line.svg";
import Slider from "./Slider";

const NoWaste = () => {
    return (
        <section className={"bg-[#00CEDE] md:h-[110vh] pb-[40px] md:pb-0"}>
            <div className={"md:w-[50%] mx-auto w-[85%]"}>
                <div className={"flex flex-col md:flex-row md:items-center md:justify-between pt-[55px] md:pt-[70px]"}>
                    <div className={"md:w-[40%]"}>
                        <h2 className={"hidden md:block text-[54px] text-white leading-[59px] font-bold"}>
                            <span className={"text-[#1b507e] relative"}>We Say 'NO'</span>
                            <img className={"absolute w-[250px] -mt-[3px] ml-[29px]"} src={Underline} alt=""/>
                            <br/>
                            To Gift Card Wastage!
                        </h2>

                        <h2 className={"md:hidden text-[33px] relative text-white leading-[35px] font-bold"}>
                            <span className={"text-white"}><span className={"text-[#1b507e]"}>We Say 'NO'</span> To Gift</span>
                            <img className={"absolute w-[200px] -bottom-[15px] ml-[1px]"} src={Underline} alt=""/>
                            <br/>
                            Card Wastage!
                        </h2>
                    </div>

                    <div className="hidden md:block border border-black border-opacity-50 border-r h-[170px]"/>

                    <div className={"space-y-3 mt-[30px] md:mt-0 md:w-[49%] font-serif"}>
                        <p className={"md:text-[17px] text-[15px] font-serif font-[400] text-[#1b507e]"}>About $3 billion worth of gift cards were unused last year.
                            This means a lot of people get hold of gift cards they never need,
                            or never use up the balance of a gift card, which is wasteful.
                            Until recently, that was a major problem, which is where Cardtonic steps in as the knight in shining armor.
                        </p>

                        <p className={"md:text-[17px] text-[15px] font-serif font-[400] text-[#1b507e]"}>
                            Cardtonic also allows users to <br/> sell gift cards in Ghana and Nigeria with instant payment settlement.
                            With this innovative provision, gift cards will never go to waste,
                            even when they cannot be used in certain areas of the world, they can be sold at the best possible gift card rates.
                        </p>

                        <p className={"md:text-[17px] text-[15px] font-serif font-[400] text-[#1b507e]"}>
                            With Cardtonic, you can trade gift cards including but not limited to iTunes, Amazon, Steam Wallet, Google Play,
                            Apple Store, eBay, Walmart, Sephora, OneVanilla, Nordstrom, Target, JCPenney, Best Buy, Nike, Hotels.com,
                            Macy's, Gamestop, Xbox,Vanilla, G2A, American Express (AMEX), OffGamers, Foot Locker,Visa, Play Station and others.
                        </p>
                    </div>
                </div>

                {/*slider*/}
                <div className={"mt-[50px] relative"}>
                    <Slider />
                </div>
            </div>
        </section>
    );
};

export default NoWaste;