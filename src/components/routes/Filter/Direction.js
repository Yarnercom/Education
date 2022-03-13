import React,{useState, useEffect} from 'react';
import {NavLink, useSearchParams} from "react-router-dom";
import './../../section/Directions/Directions.css'
import './Filter.css'
import './../Routes.css'
import Search from '../../../assets/icon/search.svg'
import './../switch/switch.css'
import axios from "axios";
import Economy from "../../../assets/direction/экономика.svg";

import {Slider} from "@mui/material";

const Direction = () => {


    const [val, setVal] = useState([1]);

    const updateRange = (e,data) =>{
        setVal(data);
    };



    const [search, setSearch] = useState("");

    const [search1, setSearch1] = useState("");

    const [all, setAll] = useState([]);

    useEffect(()=>{
        axios('http://localhost:8080/all')
            .then(({data}) => setAll(Object.values(data)))
    }, []);



    const searchHandler = (e) =>{
        setSearch(search1);
        e.preventDefault();
    };

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


                              <div className='direction__flex'>
                                  <div className='direction__filter'>
                                      <div className='line'> </div>
                                      <div className='direction__box1'>
                                          <form className='direction__form' onSubmit={(e)=> searchHandler(e)}>
                                              <label className='direction__label'>
                                                  <img className='direction__search' src={Search} alt="search"/>
                                                  <input onChange={(e)=> setSearch1(e.target.value)} className='direction__input' placeholder='Поиск по направлениям'
                                                         type="text"
                                                         name='search'
                                                  />
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
                                                  <label className="switch-for2" htmlFor="switch3">Можно
                                                      перевестись</label>
                                              </div>
                                          </form>

                                          <div className='direction__levelEducation'>
                                              <h2>Уровень образования</h2>
                                              <form>
                                                  <label className='direction__checkbox'>
                                                      <input className='direction__customCheckbox' type="checkbox"/>
                                                      <p className='direction__level'>Магистратура</p>
                                                  </label>
                                                  <label className='direction__checkbox'>
                                                      <input className='direction__customCheckbox' type="checkbox"/>
                                                      <p className='direction__level'>Бакалавриат</p>
                                                  </label>
                                                  <label className='direction__checkbox'>
                                                      <input className='direction__customCheckbox' type="checkbox"/>
                                                      <p className='direction__level'>Специалитет</p>
                                                  </label>
                                              </form>
                                          </div>

                                          <div className='direction__themeEducation'>
                                              <h2>Тематика направления</h2>
                                              <form>
                                                  <label className='direction__checkbox'>
                                                      <input className='direction__customCheckbox' type="checkbox"/>
                                                      <p className='direction__level'>Гуманитарные</p>
                                                  </label>
                                                  <label className='direction__checkbox'>
                                                      <input className='direction__customCheckbox' type="checkbox"/>
                                                      <p className='direction__level'>Технические</p>
                                                  </label>
                                                  <label className='direction__checkbox'>
                                                      <input className='direction__customCheckbox' type="checkbox"/>
                                                      <p className='direction__level'>Педагогические</p>
                                                  </label>
                                              </form>
                                          </div>
                                          <div className='direction__duration'>
                                              <form>
                                                  <h2>Длительность обучения</h2>
                                                  <label className='slider'>
                                                      <p>{
                                                          val
                                                      } год — 5 лет</p>
                                                      <Slider value={val} onChange={updateRange}/>
                                                  </label>

                                                  <h2>Стоимость семестра *</h2>
                                                  <label>
                                                      <p>0 ₽ — 200 000 ₽</p>
                                                      <Slider value={val} onChange={updateRange}/>
                                                  </label>
                                              </form>
                                              <p>* Семестр — это 6 месяцев, полугодие</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='direction__content'>
                                      <ul className='direction__content-card' style={{display: `${search && all.length ? 'inline-block': 'none'}`}}>
                                          {
                                              all.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())).map((item, idx)=>(
                                                  <li key={idx} className='direction__content-card_item'>
                                                      <div className='directions__cards-list economy'>
                                                          <p className='directions__cards-title'>{item.title}</p>
                                                          <p className='directions__cards-subtitle'>• от {item.price} ₽ семестр</p>
                                                          <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                                          <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                                          <button type='button' className='directions__cards-btn'><span>...</span>консультация</button>
                                                      </div>
                                                      <div className='directions__cards-list economy'>
                                                          <p className='directions__cards-title'>{item.title}</p>
                                                          <p className='directions__cards-subtitle'>• от {item.price} ₽ семестр</p>
                                                          <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                                          <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                                          <button type='button' className='directions__cards-btn'><span>...</span>консультация</button>
                                                      </div>
                                                  </li>
                                              ))
                                          }
                                      </ul>
                                  </div>
                              </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Direction;