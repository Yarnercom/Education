import React from 'react';
import './FirstPage.css'
import Share from './../../../assets/icon/share.svg'
import City from './../../../assets/picture/City.png'
import Card from "../../Home/card/Card";

const FirstPage = () => {


    return (
        <section className='firstPage'>
            <div className='container'>
                <div className='firstPage__container'>
                    <div className='firstPage__education'>
                        <h2 className='firstPage__education-title'>Образование <br/>
                            онлайн в Нижнем <br/>
                            Новгороде</h2>
                        <div className='firstPage__education-pos'>
                            <img src={Share} alt="share"/>
                        </div>
                        <p className='firstPage__education-subtitle'>Мы — единая приёмная комиссия вузов
                            и колледжей по дистанционным программам обучения</p>
                        <p className='firstPage__education-price'>• от 12 500 ₽ семестр • от 2,5 лет • 100% онлайн</p>
                        <img className='firstPage__education-city' src={City} alt="city"/>
                    </div>
                    <div className='firstPage__order'>
                        <Card/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstPage;