import logo from "../assets/images/logo.svg";
import React, {useState} from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {

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

                <DesktopNavigation />

                <MobileNavigation boxVariant={boxVariant} />
            </div>
        </header>
    );
};

// transition={{delay: .7, type: "spring",  stiffness: 100}} initial={{x: -200}} animate={{x: 0}} exit={{x: -200}}

export default Header;