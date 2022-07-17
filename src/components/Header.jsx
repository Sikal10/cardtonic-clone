import logo from "../assets/images/logo.svg";
import {MdOutlineMenu, MdOutlineClose} from "react-icons/md";
import {useState} from "react";

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    const openMobileNavigation = () => setIsMobile(true);
    const closeMobileNavigation = () => setIsMobile(false);

    return (
        <header className={""}>
          <div className={"flex w-[90%] mt-[30px] justify-between md:w-[70%] mx-auto md:mt-[60px]"}>
              <div className={""}>
                  <img src={logo} alt=""/>
              </div>

              {/*desktop-navigation*/}
              <div className={"hidden md:block space-x-12"}>
                  {["Upskill", "Customers", "Business"].map((item, index) => <button className={"text-[#002444] font-medium text-lg"} key={index}>{item}</button>)}
                  <button className={"bg-[#FFEACA] text-[#002444] font-medium w-[140px] py-[15px] rounded-xl"}>Get Started</button>
              </div>

              {/*mobile-navigation*/}
              <div className={"md:hidden"}>
                  <button onClick={openMobileNavigation} className={"text-3xl bg-[#CFFCFF] rounded-full grid place-items-center w-[50px] h-[50px]"}>
                      <MdOutlineMenu />
                  </button>

                  {isMobile && <div className={"fixed top-0 left-0 w-screen flex flex-col justify-center h-screen overflow-y-hidden bg-[#002444]"}>
                      <button onClick={closeMobileNavigation} className={"fixed top-10 right-7 text-3xl bg-[#CFFCFF] rounded-full grid place-items-center w-[50px] h-[50px]"}>
                          <MdOutlineClose />
                      </button>

                      <div className={"ml-[45px] mt-[25px] h-[50%] flex flex-col gap-[55px]"}>
                          {["Upskill", "Customers", "Business", "Get Started"].map((item, index) => <div className={"text-white font-medium text-lg"} key={index}>{item}</div>)}
                      </div>
                  </div>}

              </div>

          </div>
        </header>
    );
};

export default Header;