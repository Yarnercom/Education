import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './Home.css'
import Content from "../Content/Content";
import {Routes, Route} from 'react-router-dom'
import FirstPage from "../section/FirstPage/FirstPage";
import University from "../section/university/University";
import Directions from "../section/Directions/Directions";
import Diploma from "../section/Diploma/Diploma";
import Reviews from "../section/Reviews/Reviews";
import EducationMobile from "../section/EducationMobile/EducationMobile";

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