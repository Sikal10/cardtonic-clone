import logo from "../assets/images/logo.svg";
import React, {useState} from "react";
import {motion} from "framer-motion";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Header = ({isMobile, setIsMobile}) => {
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

    /** framer motion styling */
    const boxVariant = {
        open: {
            scale: 0,
            scale: 100
        },
        close: {
            scale: 100,
            scale: 0
        }
    }

    return (
        <header className={""}>
            <div className={"flex w-[90%] mt-[40px] justify-between md:w-[70%] mx-auto md:mt-[60px]"}>
                <div className={""}>
                    <img src={logo} alt=""/>
                </div>

                <DesktopNavigation
                    handleToggleBox={handleToggleBox}
                    isFirstBoxClicked={isFirstBoxClicked}
                    isSecondBoxClicked={isSecondBoxClicked}
                    isThirdBoxClicked={isThirdBoxClicked}
                />

                <MobileNavigation
                    boxVariant={boxVariant}
                    isMobile={isMobile}
                    setIsMobile={setIsMobile}
                />
            </div>
        </header>
    );
};

// transition={{delay: .7, type: "spring",  stiffness: 100}} initial={{x: -200}} animate={{x: 0}} exit={{x: -200}}

export default Header;