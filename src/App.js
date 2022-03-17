import React, {useEffect} from 'react'
import './style.css'
import Home from "./components/Home/Home";
import {useLocation} from "react-router-dom";
import {ThemeProvider} from './components/Home/FolderTheme/FolderTheme'

function App() {


    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0,0)
    },[location.pathname]);


    return (
        <div className="App">
            <ThemeProvider>
                <Home/>
            </ThemeProvider>
        </div>
    );
}

export default App;
