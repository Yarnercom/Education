import React from 'react';
import Vk from './../../assets/icon/vk.svg';
import Instagram from './../../assets/icon/instagram.svg';
import Wats from './../../assets/icon/whatsapp.svg';
import Logo from './../../assets/logo/logoFirst.png'
import {Link, Routes, Route} from "react-router-dom";
import Direction from "../routes/Filter/Direction";
import './Home.css'
import Universities from "../routes/Filter/Universities";
import Enroll from "../routes/Enroll";
import College from "../routes/Filter/College";


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
                        <Link className='header__navbar-list' to="/reviews">Отзывы</Link>
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
                    <li>
                        <Link className='header__navbar-list' to="/more">Ещё</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path='/direction' element={<Direction/>}/>
                <Route path='/universities' element={<Universities/>}/>
                <Route path='/collage' element={<College/>}/>
                <Route path='/enroll' element={<Enroll/>}/>
            </Routes>
        </header>
    );
};

export default Header;