import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './Home.css'
import Content from "../Content/Content";
import {Routes, Route} from 'react-router-dom'

const Home = () => {
    return (

            <>
                <Header/>
                <Routes>
                    <Route path='/' element={<Content/>}/>
                </Routes>
                <Footer/>
            </>
    );
};

export default Home;