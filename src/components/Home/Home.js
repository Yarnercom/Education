import React from 'react';
import Header from "./Header";
import FirstPage from "../section/FirstPage/FirstPage";
import Directions from "../section/Directions/Directions";
import Diploma from "../section/Diploma/Diploma";
import Univer from "../section/university/Univer";
import Reviews from "../section/Reviews/Reviews";
import Footer from "./Footer";
import EducationMobile from "../section/EducationMobile/EducationMobile";
import './Home.css'


const Home = () => {
    return (
        <div>
            <Header/>
            <FirstPage/>
            <Univer/>
            <Directions/>
            <Diploma/>
            <Reviews/>
            <EducationMobile/>
            <Footer/>
        </div>
    );
};

export default Home;