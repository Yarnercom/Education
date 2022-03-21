import React from 'react';
import Vk from './../../assets/icon/vk.svg';
import Instagram from './../../assets/icon/instagram.svg';
import Wats from './../../assets/icon/whatsapp.svg';
import Logo from './../../assets/logo/logoFirst.png'
import {Link, Routes, Route} from "react-router-dom";
import Direction from "../routes/Filter/Direction";
import './Home.css'
import Universities from "../routes/Filter/Universities";
import College from "../routes/Filter/College";
import Reviews from "../routes/Filter/Reviews";
import LeaveFeedback from "../routes/Filter/RouteContent/LeaveFeedback";
import Institutions from "../routes/Filter/Institutions";
import Question from "../routes/Filter/Question";
import Enroll from "../routes/Filter/Enroll";
import Professions from "../routes/Filter/Professions";
import Pages from "../routes/ Pages/Pages";
import Jurisprudence from "../routes/ Pages/Jurisprudence";
import Economy from "../routes/ Pages/Economy";
import Journalism from "../routes/ Pages/Journalism";
import MedicalOptics from "../routes/ Pages/MedicalOptics";
import AdvertisingAndPublicRelations from "../routes/ Pages/AdvertisingAndPublicRelations";



const Header = () => {

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__container'>
                    <h1 className='header__title'>
                        <Link to='/'>
                            <img src={Logo} alt="logo"/>
                        </Link>
                    </h1>
                    <div className='header__right'>
                        <div className='header__social'>
                            <img className='header__social-icon' src={Vk} alt="vk"/>
                            <img className='header__social-icon' src={Instagram} alt="instagram"/>
                            <img className='header__social-icon' src={Wats} alt="wats"/>
                        </div>
                        <div className='header__profile'>

                            <div className='header__submit'>
                                <button className='header__submit-btn' type='button'>подать документы</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className='header__navbar'>
                    <li>
                        <Link className='header__navbar-list' to="/direction">Направления</Link>
                    </li>
                    <li>
                        <Link className='header__navbar-list' to="/universities">Вузы</Link>
                    </li>
                    <li>
                        <Link className='header__navbar-list' to="/collage">Колледжи</Link>
                    </li>
                    <li>
                        <Link className='header__navbar-list' to="/professions">Профессии</Link>
                    </li>
                    <li>
                        <Link className='header__navbar-list' to="/leaveFeedback">Отзывы</Link>
                    </li>
                    <li>
                        <Link className='header__navbar-list' to="/question">Вопрос-ответ</Link>
                    </li>
                    <li>
                        <Link className='header__navbar-list' to="/enroll">Как поступить</Link>
                    </li>
                    <li>
                        <Link className='header__navbar-list' to="/institutions">Учебным заведениям</Link>
                    </li>
                    <li>
                        <Link className='header__navbar-list' to="/contacts">Контакты</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path='/direction' element={<Direction/>}/>
                <Route path='/universities' element={<Universities/>}/>
                <Route path='/collage' element={<College/>}/>
                <Route path='/leaveFeedback/*' element={<LeaveFeedback/>}>
                    <Route path='reviews' element={<Reviews/>}/>
                </Route>
                <Route path='/institutions' element={<Institutions/>}/>
                <Route path='/question' element={<Question/>}/>
                <Route path='/enroll' element={<Enroll/>}/>
                <Route path='/professions' element={<Professions/>}/>
                <Route path='/pages' element={<Pages/>}/>
                <Route path='/Jurisprudence' element={<Jurisprudence/>}/>
                <Route path='/Economy' element={<Economy/>}/>
                <Route path='/Journalism' element={<Journalism/>}/>
                <Route path='/MedicalOptics' element={<MedicalOptics/>}/>
                <Route path='/AdvertisingAndPublicRelations' element={<AdvertisingAndPublicRelations/>}/>
            </Routes>
        </header>
    );
};

export default Header;