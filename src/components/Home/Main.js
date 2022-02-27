import React from 'react';
import FirstPage from "../section/FirstPage/FirstPage";
import Univer from "../section/university/Univer";
import Directions from "../section/Directions/Directions";
import Diploma from "../section/Diploma/Diploma";
import Reviews from "../section/Reviews/Reviews";
import EducationMobile from "../section/EducationMobile/EducationMobile";
import Tab from "../Tab/Tab";

const Main = () => {
    return (
        <section>
            <FirstPage/>
            <Univer/>
            <Directions/>
            <Diploma/>
            <Reviews/>
            <EducationMobile/>
        </section>
    );
};

export default Main;