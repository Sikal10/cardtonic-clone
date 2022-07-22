import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import NoWaste from "./components/NoWaste";
import Partner from "./components/Partner";
import Download from "./components/Download";
import News from "./components/News";
import Footer from "./components/Footer";
import GetStartedNow from "./components/GetStartedNow";
import {useState} from "react";

function App() {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <div className={`${isMobile && "overlay"}`}>
            <Header isMobile={isMobile} setIsMobile={setIsMobile}/>
            <Hero/>
            <NoWaste />
            <Partner />
            <Download />
            <News />
            <GetStartedNow />
            <Footer />
        </div>
    );
}

export default App;
