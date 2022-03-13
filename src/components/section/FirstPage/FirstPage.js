import React, {useState} from 'react';
import './FirstPage.css'
import Share from './../../../assets/icon/share.svg'
import City from './../../../assets/picture/City.png'

const FirstPage = () => {

    const [choose, setChoose] = useState('');

    const data = [
        {
            title: '9 классов'
        },
        {
            title: '11 классов'
        },
        {
            title: 'Училище'
        },
        {
            title: 'Колледж'
        },
        {
            title: 'Техникум'
        },
        {
            title: 'Неоконченное высшее'
        },
        {
            title: 'Высшее'
        }
    ];


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
                        <div className='firstPage__order-dFlex'>
                            <p className='firstPage__order-title'>Подобрать обучение</p>
                            <span className='firstPage__order-frac'>1/3</span>
                        </div>
                        <p className='firstPage__order-subtitle'>Какое у Вас образование?</p>
                        <ul className='firstPage__order-navbar'>
                            {
                                data.map((item) => (
                                    <li className={`${choose === 'first' ? 'firstPage__order-navbar_list-active' : ''} firstPage__order-navbar_list`}
                                        onClick={() => setChoose('first')}>{item.title}</li>
                                ))
                            }
                            {/*<li className='firstPage__order-navbar_list'>11 классов</li>*/}
                            {/*<li className='firstPage__order-navbar_list'>Училище</li>*/}
                            {/*<li className='firstPage__order-navbar_list'>Колледж</li>*/}
                            {/*<li className='firstPage__order-navbar_list'>Техникум</li>*/}
                            {/*<li className='firstPage__order-navbar_list'>Неоконченное высшее</li>*/}
                            {/*<li className='firstPage__order-navbar_list'>Высшее</li>*/}
                        </ul>
                        <div className='firstPage__order-block'>
                            <button className='firstPage__order-btn' type='button'>К шагу 2 из 3</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstPage;