import React, {useEffect} from 'react'
import './style.css'
import {useLocation} from "react-router-dom";
import Home from "./components/Home/Home";

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
