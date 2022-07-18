import GooglePlay from "../assets/images/GooglePlay.svg";
import AppStore from "../assets/images/app-store.svg";
import Web from "../assets/images/web.svg";

const GetStartedNow = () => {
    return (
        <section className={"md:hidden bg-[#00CEDE]"}>
            <div className={"text-[#1b507e] py-[20px] w-[80%] mx-auto"}>
                <h3 className={"font-bold text-[35px]"}>Get Started Now</h3>
                <p className={"leading-[18px]"}>Download the Cardtonic App or register on web and start trading like bosses do</p>

                <div className={"mt-[25px] pb-[20px] space-y-2"}>
                    {[GooglePlay, AppStore, Web].map((item) => <img className={"mx-auto"} src={item} alt=""/>)}
                </div>
            </div>
        </section>
    );
};

export default GetStartedNow;