import React, {useEffect, useState} from 'react';
import {Twirl as Hamburger} from "hamburger-react";
import {AnimatePresence, motion} from "framer-motion";
import {IoChevronDownSharp} from "react-icons/io5";

const MobileNavigation = () => {
    const [isMobile, setIsMobile] = useState(false);

    const [isFirstButtonClicked, setIsFirstButtonClicked] = useState(false);
    const [isSecondButtonClicked, setIsSecondButtonClicked] = useState(false);
    const [isThirdButtonClicked, setIsThirdButtonClicked] = useState(false);

    /** framer motion styling */
    const boxVariant = {
        open: {
            scale: 100
        },
        close: {
            scale: 0
        }
    }

    /** add and remove the overlay class in the body.*/
    useEffect(() => {
        if (isMobile) {
            document.body.classList.add("overlay");
        } else {
            document.body.classList.remove("overlay");
        }
    }, [isMobile])

    const handleDropdownToggle = (boxNumber) => {
        switch (boxNumber) {
            case "first":
                setIsFirstButtonClicked(!isFirstButtonClicked);
                setIsSecondButtonClicked(false);
                setIsThirdButtonClicked(false);
                break;
            case "second":
                setIsFirstButtonClicked(false);
                setIsSecondButtonClicked(!isSecondButtonClicked);
                setIsThirdButtonClicked(false);
                break;
            case "third":
                setIsFirstButtonClicked(false);
                setIsSecondButtonClicked(false);
                setIsThirdButtonClicked(!isThirdButtonClicked);
                break;
            default:
                setIsFirstButtonClicked(false);
                setIsSecondButtonClicked(false);
                setIsThirdButtonClicked(false);
        }

    }

    return (
        <div className={"md:hidden relative"}>
            <Hamburger direction={"right"} toggled={isMobile} toggle={setIsMobile} size={20} easing={"ease-in"}/>

            {/*the open mobile menu background with framer-motion */}
            {isMobile ? <motion.div transition={{ease: "linear"}} variants={boxVariant} animate={"open"} className={"bgContainer"}/> :
                <motion.div variants={boxVariant} animate={"close"} className={"bgContainer"}/>}

            <AnimatePresence>
                {isMobile && <motion.div
                        transition={{delay: .5, type: "spring", stiffness: 200}}
                        initial={{x: -300, opacity: 0}}
                        animate={{x: 0, opacity: 1, transition: {delay: .8}}}
                        exit={{x: [50, -120], transition: {duration: .8}}}
                        className={"fixed z-10 top-0 right-0 w-full h-full"}
                    >
                        <div className={"px-[60px] mt-[60%] flex flex-col gap-[62px]"}>
                            <div className={"text-white font-medium text-lg"}>Upskill</div>
                            <div className={"space-y-4"}>
                                <div className={"mobile-menu"}>
                                    <button onClick={() => handleDropdownToggle("first")}>Customers</button>
                                    <span><IoChevronDownSharp/></span>
                                </div>

                                <AnimatePresence>
                                    {isFirstButtonClicked && <motion.div
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -30, transition: {type: "ease"}}}
                                        className={"mobile-dropDown"}>
                                        <p>User Rewards</p>
                                        <p>Gift Card Rates</p>
                                        <p>Contact Us</p>
                                    </motion.div>}
                                </AnimatePresence>

                            </div>
                            <div className={"space-y-4"}>
                                <div className={"mobile-menu"}>
                                    <button onClick={() => handleDropdownToggle("second")}>Business</button>
                                    <span><IoChevronDownSharp/></span>
                                </div>

                                <AnimatePresence>
                                    {isSecondButtonClicked && <motion.div
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -30, transition: {type: "ease"}}}
                                        className={"mobile-dropDown"}>
                                        <p>User Rewards</p>
                                        <p>Gift Card Rates</p>
                                        <p>Contact Us</p>
                                    </motion.div>}
                                </AnimatePresence>
                            </div>
                            <div className={"space-y-4"}>
                                <div className={"mobile-menu"}>
                                    <button onClick={() => handleDropdownToggle("third")}>Get Started</button>
                                    <span><IoChevronDownSharp/></span>
                                </div>

                                <AnimatePresence>
                                    {isThirdButtonClicked && <motion.div
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -30, transition: {type: "ease"}}}
                                        className={"mobile-dropDown"}>
                                        <p>On the Web</p>
                                        <p>On Android</p>
                                        <p>On iOS</p>
                                    </motion.div>}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
};

export default MobileNavigation;