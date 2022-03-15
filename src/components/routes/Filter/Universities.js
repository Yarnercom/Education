import React, {useEffect, useState} from 'react';
import Search from "../../../assets/icon/search.svg";
import axios from "axios";
import Economy from "../../../assets/direction/экономика.svg";
import Btns from "../../Home/btns/Btns";

const Universities = () => {


    const [search, setSearch] = useState("");

    const [search1, setSearch1] = useState("");

    const [all, setAll] = useState([]);

    useEffect(()=>{
        axios('http://localhost:8080/universities')
            .then(({data}) => setAll(Object.values(data)))
    }, []);



    const searchHandler = (e) =>{
        setSearch(search1);
        e.preventDefault();
    };


    return (
        <section className='universities'>
            <div className='container'>
                <Btns/>
                <h3 className='general__title'>Вузы с онлайн образованием <br/>
                    в Санкт-Петербурге
                </h3>
                <p className='general__subtitle'>
                    Мы сотрудничаем с 24 престижными вузами по программам дистанционного онлайн-обучения.
                </p>
                <form className='general__form' onSubmit={(e)=> searchHandler(e)}>
                    <label className='direction__label'>
                        <img className='direction__search' src={Search} alt="search"/>
                        <input onChange={(e)=> setSearch1(e.target.value)} className='direction__input' placeholder='Поиск по направлениям'
                               type="text"
                               name='search'
                        />
                        <p className='universities__total'>Всего 24 вуза</p>
                    </label>
                </form>
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
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default Universities;