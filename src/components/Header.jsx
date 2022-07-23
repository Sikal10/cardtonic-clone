import logo from "../assets/images/logo.svg";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {

    return (
        <header className={""}>
            <div className={"flex w-[90%] mt-[40px] justify-between md:w-[70%] mx-auto md:mt-[60px]"}>
                <img src={logo} alt=""/>

                <DesktopNavigation/>

                <MobileNavigation/>
            </div>
        </header>
    );
};

// transition={{delay: .7, type: "spring",  stiffness: 100}} initial={{x: -200}} animate={{x: 0}} exit={{x: -200}}

export default Header;