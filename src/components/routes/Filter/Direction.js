import React from 'react';
// import Directions from "../../section/Directions/Directions";
import {NavLink} from "react-router-dom";
import './../../section/Directions/Directions.css'
// import Content from "../../Content/Content";
// import Arrow from "../../../assets/icon/Vector.svg";
import './Filter.css'
import Search from '../../../assets/icon/search.svg'
import './../switch/switch.css'

const Direction = () => {

    return (
        <section>
            <div className='direction'>
                <div className='container'>
                    <div className='direction__container'>
                        <h2 className='direction__title'>Направления онлайн образования <br/>
                            в Санкт-Петербурге</h2>
                        <p className='direction__subtitle'>Мы сотрудничаем с 10 престижными колледжами по программам дистанционного онлайн-обучения.</p>


                                <ul className='direction__navbar'>
                                    <NavLink to='/filter' className='direction__navbar-list'>
                                        Высшее<sup className='sup'>14</sup>
                                    </NavLink>
                                    <NavLink to='/filter' className='direction__navbar-list'>
                                        Среднее <sup className='sup'>9</sup>
                                    </NavLink>
                                    <NavLink to='/filter' className='direction__navbar-list'>
                                        ДПО <sup className='sup'>36</sup>
                                    </NavLink>
                                </ul>
                                <div className='line'> </div>
                        <form className='direction__form'>
                            <label className='direction__label'>
                                <img className='direction__search' src={Search} alt="search"/>
                                <input className='direction__input' placeholder='Поиск по направлениям' type="text"/>
                            </label>
                            <div className='direction__switch'>
                                <input className="switch" id="switch1" type="checkbox"/>
                                <label className="switch-for" htmlFor="switch1">Онлайн-защита</label>
                            </div>
                            <div className='direction__switch'>
                                <input className="switch" id="switch2" type="checkbox"/>
                                <label className="switch-for1" htmlFor="switch2">Рассрочка</label>
                            </div>
                            <div className='direction__switch'>
                                <input className="switch" id="switch3" type="checkbox"/>
                                <label className="switch-for2" htmlFor="switch3">Можно перевестись</label>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Direction;