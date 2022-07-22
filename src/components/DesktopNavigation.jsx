import {IoChevronDownSharp, IoGiftOutline, IoPeopleOutline, IoShapesOutline, IoTrophyOutline} from "react-icons/io5";
import {MdOutlineMarkEmailUnread} from "react-icons/md";
import {FiHeart} from "react-icons/fi";
import {TbWorld} from "react-icons/tb";
import {AiFillAndroid, AiOutlineApple} from "react-icons/ai";
import {useState} from "react";

const DesktopNavigation = () => {

    const [isFirstBoxClicked, setIsFirstBoxClicked] = useState(false);
    const [isSecondBoxClicked, setIsSecondBoxClicked] = useState(false);
    const [isThirdBoxClicked, setIsThirdBoxClicked] = useState(false);

    const handleToggleBox = (boxNumber) => {
        switch (boxNumber) {
            case "first":
                setIsFirstBoxClicked(!isFirstBoxClicked);
                setIsSecondBoxClicked(false);
                setIsThirdBoxClicked(false);
                break;
            case "second":
                setIsFirstBoxClicked(false);
                setIsSecondBoxClicked(!isSecondBoxClicked);
                setIsThirdBoxClicked(false);
                break;
            case "third":
                setIsFirstBoxClicked(false);
                setIsSecondBoxClicked(false);
                setIsThirdBoxClicked(!isThirdBoxClicked);
                break;
            default:
                setIsFirstBoxClicked(false);
                setIsSecondBoxClicked(false);
                setIsThirdBoxClicked(false);
        }
    }

    return (
        <div className={"hidden md:block"}>
            <div className={"flex items-center gap-x-12"}>
                <button className={"text-[#002444] font-medium text-lg"}>Upskill</button>

                <div className={"relative"}>
                    <button onClick={() => handleToggleBox("first")} className={"text-[#002444] font-medium text-lg gap-2 flex items-center"}>
                        Customers
                        <span><IoChevronDownSharp className={"text-sm"}/></span>
                    </button>

                    {isFirstBoxClicked && <div
                        className={"z-10 top-[45px] -left-[55px] bg-white absolute px-[30px] box w-[200px] py-[18px] space-y-7 rounded-2xl"}>
                        <div className={"flex gap-2 items-center"}>
                            <div
                                className={"bg-red-300 bg-opacity-30 h-[25px] w-[25px] grid place-items-center rounded-full"}>
                                <IoGiftOutline className={"text-red-600 text-lg"}/>
                            </div>
                            <p className={"text-[14px] text-[#002444] font-semibold"}>User Rewards</p>
                        </div>

                        <div className={"flex gap-2 items-center"}>
                            <div
                                className={"bg-green-300 bg-opacity-30 h-[25px] w-[25px] grid place-items-center rounded-full"}>
                                <IoTrophyOutline className={"text-green-600 text-lg"}/>
                            </div>
                            <p className={"text-[14px] text-[#002444] font-semibold"}>Gift Card Rates</p>
                        </div>

                        <div className={"flex gap-2 items-center"}>
                            <div
                                className={"bg-cyan-300 bg-opacity-30 h-[25px] w-[25px] grid place-items-center rounded-full"}>
                                <MdOutlineMarkEmailUnread className={"text-cyan-600 text-lg"}/>
                            </div>
                            <p className={"text-[14px] text-[#002444] font-semibold"}>Contact Us</p>
                        </div>
                    </div>}
                </div>

                <div className={"relative"}>
                    <button onClick={() => handleToggleBox("second")}
                            className={"text-[#002444] font-medium text-lg gap-2 flex items-center"}>
                        Business
                        <span><IoChevronDownSharp className={"text-sm"}/></span>
                    </button>

                    {isSecondBoxClicked && <div
                        className={"z-10 bg-white absolute top-[45px] -left-[55px] box w-[200px] px-[23px] py-[18px] space-y-7 rounded-2xl"}>
                        <div className={"flex gap-3 items-center"}>
                            <div
                                className={"bg-red-300 bg-opacity-30 h-[25px] w-[25px] grid place-items-center rounded-full"}>
                                <IoPeopleOutline className={"text-red-600 text-lg"}/>
                            </div>
                            <p className={"text-[13px] text-[#002444] font-semibold"}>Become A Partner</p>
                        </div>

                        <div className={"flex gap-3 items-center"}>
                            <div
                                className={"bg-green-300 bg-opacity-30 h-[25px] w-[25px] grid place-items-center rounded-full"}>
                                <FiHeart className={"text-green-600 text-lg"}/>
                            </div>
                            <p className={"text-[13px] text-[#002444] font-semibold"}>#CTGivesBack</p>
                        </div>

                        <div className={"flex gap-3 items-center"}>
                            <div
                                className={"bg-cyan-300 bg-opacity-30 h-[25px] w-[25px] grid place-items-center rounded-full"}>
                                <IoShapesOutline className={"text-cyan-600 text-lg"}/>
                            </div>
                            <p className={"text-[13px] text-[#002444] font-semibold"}>Work With Us</p>
                        </div>
                    </div>}
                </div>

                <div className={"relative"}>
                    <button onClick={() => handleToggleBox("third")}
                            className={"bg-[#FFEACA] text-[#002444] font-medium w-[160px] py-[15px] rounded-xl gap-2 flex items-center justify-center"}>
                        Get Started
                        <span><IoChevronDownSharp className={"text-sm"}/></span>
                    </button>

                    {isThirdBoxClicked && <div
                        className={"z-10 top-[75px] bg-white absolute px-[30px] box w-[170px] py-[18px] space-y-7 rounded-2xl"}>
                        <div className={"flex gap-2 items-center"}>
                            <div
                                className={"bg-red-300 bg-opacity-30 h-[25px] w-[25px] grid place-items-center rounded-full"}>
                                <TbWorld className={"text-red-600 text-lg"}/>
                            </div>
                            <p className={"text-[13px] text-[#002444] font-semibold"}>On the Web</p>
                        </div>

                        <div className={"flex gap-2 items-center"}>
                            <div
                                className={"bg-green-300 bg-opacity-30 h-[25px] w-[25px] grid place-items-center rounded-full"}>
                                <AiFillAndroid className={"text-green-600 text-lg"}/>
                            </div>
                            <p className={"text-[13px] text-[#002444] font-semibold"}>On Android</p>
                        </div>

                        <div className={"flex gap-2 items-center"}>
                            <div
                                className={"bg-cyan-300 bg-opacity-30 h-[25px] w-[25px] grid place-items-center rounded-full"}>
                                <AiOutlineApple className={"text-cyan-600 text-lg"}/>
                            </div>
                            <p className={"text-[13px] text-[#002444] font-semibold"}>On iOS</p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default DesktopNavigation;