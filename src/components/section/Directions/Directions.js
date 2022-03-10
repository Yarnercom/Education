import React, {useState} from 'react';
import './Directions.css'
import Arrow from './../../../assets/icon/Vector.svg'
import {NavLink, Routes, Route} from 'react-router-dom'
import Showeucation from "../../Content/Showeucation";
import Average from "../../routes/Average";
import Higher from "../../routes/Higher";
import Tourism from "../../../assets/direction/Туризм.svg";
import Jurisprudence from "../../../assets/direction/юриспруденция.svg";
import Economy from "../../../assets/direction/экономика.svg";
import Journalism from "../../../assets/direction/Журналистика.svg";
import Medical from "../../../assets/direction/Медицинская оптика.svg";
import Public from "../../../assets/direction/Реклама и связи с общественностью.svg";
// import {CSSTransition} from 'react-transition-group'


const Directions = () => {

    // const higher = [
    //     <Higher/>
    // ];
    // const average = [
    //     <Average/>
    // ];
    // const ape = [
    //     <Ape/>
    // ];
    //
    // const [active, setActive] = useState([
    //     higher
    // ]);
    // const [show, setShow] = useState(true);

    return (
        <section className='directions'>
            <div className='container'>
                <div className='directions__container'>
                    <h2 className='directions__title'>Направления</h2>
                    <ul className='directions__navbar'>
                            <NavLink to='/' className='directions__navbar-list'>
                                Высшее<sup className='sup'>14</sup>
                            </NavLink>
                        <NavLink to='/average' className='directions__navbar-list'>
                                Среднее <sup className='sup'>9</sup>
                        </NavLink>
                        <NavLink to='/ape' className='directions__navbar-list'>
                                ДПО <sup className='sup'>36</sup>
                        </NavLink>
                    </ul>
                    <div className='line'> </div>
                            <div>
                                <Showeucation/>
                            </div>
                    <div className='directions__showMore'>
                        <p className='directions__showMore-more'>Показать ещё 24 направления</p>
                        <img src={Arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Directions;
