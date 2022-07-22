import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import NoWaste from "../components/NoWaste";
import Partner from "../components/Partner";
import Download from "../components/Download";
import News from "../components/News";
import GetStartedNow from "../components/GetStartedNow";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <NoWaste/>
            <Partner/>
            <Download/>
            <News/>
            <GetStartedNow/>
            <Footer/>
        </div>
    );
};

export default Home;