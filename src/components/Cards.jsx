import React from 'react';
import Bell from "../assets/images/notification.svg";
import Checked from "../assets/images/checked.svg";
import Platform from "../assets/images/platform.svg";

const Cards = () => {
    return (
        <div className={"flex flex-col md:flex-row gap-y-5 justify-between gap-x-5"}>
            <div className={"cards w-[21.5rem] bg-[#002444] min-h-[230px] py-[14px] px-[10px] rounded-[25px] space-y-2"}>
                <img src={Bell} alt=""/>
                <h3 className={"text-[14px] font-bold"}>Instant Payment</h3>
                <p className={"text-xs font-medium w-[95%]"}>Using state-of-the-art payment procedures, you are guaranteed to get your payment sent to your account within minutes.</p>
            </div>

            <div className={"cards hover:bg-[#002444] text-[#0a2b43] hover:text-white w-[21.5rem] min-h-[230px] py-[14px] px-[10px] rounded-[25px] space-y-2"}>
                <img src={Platform} alt=""/>
                <h3 className={"text-[14px] font-bold"}>Cross-Platform Availability</h3>
                <p className={"text-xs w-[95%]"}>Sell any gift card, anywhere, anytime, using our modern gift card trading application available on Android, iOS and web browser.</p>
            </div>

            <div className={"cards hover:bg-[#002444] hover:text-white w-[21.5rem] min-h-[230px] py-[14px] px-[10px] rounded-[25px] space-y-2"}>
                <img src={Checked} alt=""/>
                <h3 className={"text-[14px] font-bold"}>Trusted And Secure</h3>
                <p className={"text-xs w-[95%]"}>Trade with high confidence, as we assure you the highest level of encryption and professionally audited exchange system.</p>
            </div>

        </div>
    );
};

export default Cards;