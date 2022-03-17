import React, {useEffect} from 'react'
import './style.css'
import Home from "./components/Home/Home";
import {useLocation} from "react-router-dom";

function App() {


    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);


    return (
        <div className="App">
            <Home/>
        </div>
    );
}

export default App;
