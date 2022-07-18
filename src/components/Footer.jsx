import Logo from "../assets/images/footer-logo.svg";
import GooglePlay from "../assets/images/GooglePlay.svg";
import AppStore from "../assets/images/app-store.svg";

const Footer = () => {
    return (
        <footer className={"bg-black"}>
            {/*desktop*/}
            <div className={"hidden md:block w-[65%] mx-auto pb-[45px] pt-[90px] "}>
                {/*logo*/}
                <div>
                    <img className={"w-[200px]"} src={Logo} alt=""/>
                </div>

                {/*flex-container*/}
                <div className={"flex justify-between"}>
                    <article className={"w-[40%] text-white space-y-3"}>
                        <p className={"text-[14px] leading-[16px]"}>
                            Bridging the gap between individuals who need liquid cash and businesses who need discounted
                            gift cards as a payment alternative. Cardtonic is available for Web, iPhone, and Android
                            users.
                        </p>

                        <div>
                            <p className={"text-[14px]"}>+234 (0) 1 343 0626</p>
                            <p className={"text-[14px]"}>+234 (0) 706 050 2770</p>
                        </div>

                        <div className={"text-[#00CEDE]"}>
                            <p className={"text-[14px]"}>support@cardtonic.com</p>
                            <div><a href="#">IG</a> | <a href="#">FB</a> | <a href="#">TW</a></div>
                        </div>

                        <div className={"flex gap-2"}>
                            <img src={GooglePlay} alt=""/>
                            <img src={AppStore} alt=""/>
                        </div>
                    </article>

                    <div className={"mt-[20px]"}
                         style={{background: "white", opacity: "20%", height: "180px", width: "1px"}}/>

                    <div className={"w-[45%] flex justify-between"}>
                        <article className={"text-white space-y-2"}>
                            <h3 className={"text-[18px] font-medium"}>For The Customer</h3>
                            <p className={"text-[13px]"}>Download On Android</p>
                            <p className={"text-[13px]"}>Download On iPhone</p>
                            <p className={"text-[13px]"}>Get Reward Points</p>
                            <p className={"text-[13px]"}>Taste The Tonic</p>
                            <p className={"text-[13px]"}>Check Our Rates</p>
                            <p className={"text-[13px]"}>Talk To Us</p>
                            <p className={"text-[13px]"}>Visit Help Center</p>
                        </article>

                        <article className={"text-white space-y-2"}>
                            <h3 className={"text-[18px] font-medium"}>For The Business</h3>
                            <p className={"text-[13px]"}>Up Your Skill</p>
                            <p className={"text-[13px]"}>Become A Partner</p>
                            <p className={"text-[13px]"}>#CTGivesBack</p>
                            <p className={"text-[13px]"}>Work With Us</p>
                            <p className={"text-[13px]"}>Read The Blog</p>
                            <p className={"text-[13px]"}>Read Our Terms</p>
                            <p className={"text-[13px]"}>Our Privacy Policy</p>
                        </article>
                    </div>
                </div>

                <div className={"horizontal-line mt-[80px] mb-[35px]"}/>

                <p className={"text-center text-white"}>© 2022 Cardtonic. All Rights Reserved.</p>
            </div>

            {/*mobile*/}
            <div className={"md:hidden text-white pt-[70px] pb-[30px] w-[80%] mx-auto"}>
                <div>
                    <img src={Logo} alt=""/>
                </div>

                <p className={"text-[14px] leading-[16px]"}>
                    Bridging the gap between individuals who need liquid cash and businesses who need discounted
                    gift cards as a payment alternative. Cardtonic is available for Web, iPhone, and Android users.
                </p>

                <hr className={"mt-[25px] mb-[33px] border-[#333]"}/>

                <div>
                    <p className={"text-[14px]"}>+234 (0) 1 343 0626</p>
                    <p className={"text-[14px]"}>+234 (0) 706 050 2770</p>
                </div>

                <div className={"text-[#00CEDE] flex items-center justify-between mt-[10px]"}>
                    <p className={"text-[14px]"}>support@cardtonic.com</p>
                    <div><a href="#">IG</a> | <a href="#">FB</a> | <a href="#">TW</a></div>
                </div>

                <div className={"flex gap-2 mt-[30px] mb-[50px] justify-between"}>
                    <img className={"w-[140px]"} src={GooglePlay} alt=""/>
                    <img className={"w-[140px]"} src={AppStore} alt=""/>
                </div>

                <hr className={"mt-[25px] mb-[33px] border-[#333]"}/>

                <article className={"text-white space-y-1"}>
                    <h3 className={"text-[14px] font-medium"}>For The Customer</h3>
                    <p className={"text-[13px]"}>Download On Android</p>
                    <p className={"text-[13px]"}>Download On iPhone</p>
                    <p className={"text-[13px]"}>Get Reward Points</p>
                    <p className={"text-[13px]"}>Taste The Tonic</p>
                    <p className={"text-[13px]"}>Check Our Rates</p>
                    <p className={"text-[13px]"}>Talk To Us</p>
                    <p className={"text-[13px]"}>Visit Help Center</p>
                </article>

                <hr className={"mt-[35px] mb-[35px] border-[#333]"}/>

                <article className={"text-white space-y-1"}>
                    <h3 className={"text-[14px] font-medium"}>For The Business</h3>
                    <p className={"text-[13px]"}>Up Your Skill</p>
                    <p className={"text-[13px]"}>Become A Partner</p>
                    <p className={"text-[13px]"}>#CTGivesBack</p>
                    <p className={"text-[13px]"}>Work With Us</p>
                    <p className={"text-[13px]"}>Read The Blog</p>
                    <p className={"text-[13px]"}>Read Our Terms</p>
                    <p className={"text-[13px]"}>Our Privacy Policy</p>
                </article>

                <hr className={"mt-[25px] mb-[33px] border-[#333]"}/>

                <p className={"text-center text-xs text-white"}>© 2022 Cardtonic. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;