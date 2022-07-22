import React, {useEffect, useState} from 'react';
import {Twirl as Hamburger} from "hamburger-react";
import {AnimatePresence, motion} from "framer-motion";

const MobileNavigation = ({boxVariant}) => {
    const [isFirstMobileButtonClicked, setIsFirstMobileButtonClicked] = useState(false);
    const [isSecondMobileButtonClicked, setIsSecondMobileButtonClicked] = useState(false);
    const [isThirdMobileButtonClicked, setIsThirdMobileButtonClicked] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (isMobile) {
            document.body.classList.add("overlay");
        } else {
            document.body.classList.remove("overlay");
        }
    }, [isMobile])

    return (
        <div className={"md:hidden relative"}>
            <Hamburger direction={"right"} toggled={isMobile} toggle={setIsMobile} size={20} easing={"ease-in"}/>

            {/*the open mobile menu background with framer-motion */}
            {isMobile ? <motion.div variants={boxVariant} animate={"open"} className={"bgContainer"}/> :
                <motion.div variants={boxVariant} animate={"close"} className={"bgContainer"}/>}

            <AnimatePresence>
                {isMobile &&
                    <motion.div transition={{delay: .7, type: "spring", stiffness: 100}} initial={{x: -200}}
                                animate={{x: 0}} exit={{x: -200}}
                                className={"fixed z-10 top-0 right-0 w-full h-full"}>
                        <div className={"px-[60px] mt-[60%] h-fit flex flex-col gap-[62px]"}>
                            <div className={"text-white font-medium text-lg"}>Upskill</div>
                            <div className={"space-y-4"}>
                                <div className={"text-white font-medium text-lg relative"}>
                                    <button
                                        onClick={() => setIsFirstMobileButtonClicked(!isFirstMobileButtonClicked)}>Customers
                                    </button>
                                </div>

                                {isFirstMobileButtonClicked && <div
                                    className={"bg-[#002444] flex flex-col border text-[14px] space-y-4 text-gray-400"}>
                                    <p>User Rewards</p>
                                    <p>Gift Card Rates</p>
                                    <p>Contact Us</p>
                                </div>}
                            </div>
                            <div className={"space-y-4"}>
                                <div className={"text-white font-medium text-lg relative"}>
                                    <button
                                        onClick={() => setIsSecondMobileButtonClicked(!isSecondMobileButtonClicked)}>Business
                                    </button>
                                </div>

                                {isSecondMobileButtonClicked && <div
                                    className={"bg-[#002444] flex flex-col border text-[14px] space-y-4 text-gray-400"}>
                                    <p>User Rewards</p>
                                    <p>Gift Card Rates</p>
                                    <p>Contact Us</p>
                                </div>}
                            </div>
                            <div className={"space-y-4"}>
                                <div className={"text-white font-medium text-lg relative"}>
                                    <button
                                        onClick={() => setIsThirdMobileButtonClicked(!isThirdMobileButtonClicked)}>
                                        Get Started
                                    </button>
                                </div>

                                {isThirdMobileButtonClicked && <div
                                    className={"bg-[#002444] flex flex-col border text-[14px] space-y-4 text-gray-400"}>
                                    <p>On the Web</p>
                                    <p>On Android</p>
                                    <p>On iOS</p>
                                </div>}
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
};

export default MobileNavigation;