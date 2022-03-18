import React,{useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import './../../section/Directions/Directions.css'
import './Filter.css'
import './general.css'
import './../Routes.css'
import './../../allStyle.css'
import Search from '../../../assets/icon/search.svg'
import './../switch/switch.css'
import axios from "axios";
import Economy from "../../../assets/direction/экономика.svg";
import {Slider} from "@mui/material";
import Btns from "../../Home/btns/Btns";


const Direction = () => {


    const [val, setVal] = useState([5]);

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



    const [mag, setMag] = useState(false);
    const [bac, setBac] = useState(false);
    const [spec, setSpec] = useState(false);
    const [ras, setRas] = useState(false);
    const [online, setOnline] = useState(false);
    const [can, setCan] = useState(false);



    return (
        <section>
            <div className='direction'>
                <div className='container'>
                    <Btns/>
                    <div className='direction__container'>
                        <h2 className='general__title'>Направления онлайн образования <br/>
                            в Санкт-Петербурге</h2>
                        <p className='general__subtitle'>Мы сотрудничаем с 10 престижными колледжами по программам дистанционного онлайн-обучения.</p>

                        <div className='line'> </div>

                        <div className='posis'>
                            <p className={`${mag === false ? '' : 'posis__active'} posis__link`}>Магистратура <span onClick={()=> setMag(!mag)} className='posis__eks'> </span></p>
                            <p className={`${bac === false ? '' : 'posis__active'} posis__link`}>Бакалавриат <span onClick={()=> setBac(!bac)} className='posis__eks'> </span></p>
                            <p className={`${spec === false ? '' : 'posis__active'} posis__link`}>Специалитет <span onClick={()=> setSpec(!spec)} className='posis__eks'> </span></p>
                            <p className={`${online === false ? '' : 'posis__active'} posis__link`}>онлайн-защита <span onClick={()=> setOnline(!online)} className='posis__eks'> </span></p>
                            <p className={`${can === false ? '' : 'posis__active'} posis__link`}>Можно перевестись <span onClick={()=> setCan(!can)} className='posis__eks'> </span></p>
                            <p className={`${ras === false ? '' : 'posis__active'} posis__link`}>Рассрочка <span onClick={()=> setRas(!ras)} className='posis__eks'> </span></p>
                            <p></p>
                        </div>


                              <div className='direction__flex'>
                                  <div className='direction__filter'>
                                      <div className='direction__box1'>
                                          <form autoComplete='off' className='direction__form' onSubmit={(e)=> searchHandler(e)}>
                                              <label className='direction__label'>
                                                  <img className='direction__search' src={Search} alt="search"/>
                                                  <input onChange={(e)=> setSearch1(e.target.value)} className='direction__input' placeholder='Поиск по направлениям'
                                                         type="text"
                                                         name='search'
                                                  />
                                              </label>
                                              <div className='direction__switch'>
                                                  <input className="switch" id="switch1" type={`${online === true ? 'checkbox' : ''}`}/>
                                                  <label className="switch-for" htmlFor="switch1" onClick={()=> setOnline(!online)}>Онлайн-защита</label>
                                              </div>
                                              <div className='direction__switch'>
                                                  <input className="switch" id="switch2" type={`${ras === true ? 'checkbox' : ''}`}/>
                                                  <label className="switch-for1" htmlFor="switch2" onClick={()=> setRas(!ras)}>Рассрочка</label>
                                              </div>
                                              <div className='direction__switch'>
                                                  <input className="switch" id="switch3" type={`${can === true ? 'checkbox' : ''}`}/>
                                                  <label className="switch-for2" htmlFor="switch3" onClick={()=> setCan(!can)}>Можно
                                                      перевестись</label>
                                              </div>
                                          </form>

                                          <div className='direction__levelEducation'>
                                              <h2>Уровень образования</h2>
                                              <form>
                                                  <label className='direction__checkbox'>
                                                      <input className='direction__customCheckbox' type={`${mag === true ? 'checkbox' : ''}`}/>
                                                      <p className='direction__level' onClick={()=> setMag(!mag)}>Магистратура</p>
                                                  </label>
                                                  <label className='direction__checkbox'>
                                                      <input className='direction__customCheckbox' type={`${bac === true ? 'checkbox' : ''}`}/>
                                                      <p className='direction__level' onClick={()=> setBac(!bac)}>Бакалавриат</p>
                                                  </label>
                                                  <label className='direction__checkbox'>
                                                      <input className='direction__customCheckbox' type={`${spec === true ? 'checkbox' : ''}`}/>
                                                      <p className='direction__level' onClick={()=> setSpec(!spec)}>Специалитет</p>
                                                  </label>
                                              </form>
                                          </div>

                                          <div className='direction__duration'>
                                              <form>
                                                  <h2>Длительность обучения</h2>
                                                  <label className='slider'>
                                                      <p>1 год — {val} лет</p>
                                                      <Slider value={val} onChange={updateRange}/>
                                                  </label>

                                                  <h2>Стоимость семестра *</h2>
                                                  <label>
                                                      <p>0 ₽ — 200 000 ₽</p>
                                                      {/*<Slider value={val} onChange={updateRange}/>*/}
                                                  </label>
                                              </form>
                                              <p>* Семестр — это 6 месяцев, полугодие</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='direction__content'>
                                      <ul className='direction__content-card' style={{display: `${search && all.length ? 'inline-block': 'flex'}`}}>
                                          {
                                              all.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())).map((item, idx)=>(
                                                  <li key={idx} className='direction__content-card_item'>
                                                      <div className='directions__cards-list economy'>
                                                          <p className='directions__cards-title'>{item.title}</p>
                                                          <p className='directions__cards-subtitle'>• от {item.price} ₽ семестр</p>
                                                          <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                                          <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                                          <button type='button' className='directions__cards-btn'><span>...</span>{item.consultation}</button>
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