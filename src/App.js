import './App.css';
import Home from "./pages/Home";
import {useIntercom} from "react-use-intercom";
import {useEffect} from "react";

function App() {
    const {boot} = useIntercom();

    useEffect(() => {
        boot();
    }, [boot]);
    return (
        <div>
            <Home/>
        </div>
    );
}

export default App;
