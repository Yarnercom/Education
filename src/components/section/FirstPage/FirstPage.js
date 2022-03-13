import React, {useState} from 'react';
import './FirstPage.css'
import Share from './../../../assets/icon/share.svg'
import City from './../../../assets/picture/City.png'

const FirstPage = () => {

    const [choose, setChoose] = useState('');

    const step1 = [
        {
            id: 0,
            title: '9 классов'
        },
        {
            id: 1,
            title: '11 классов'
        },
        {
            id: 2,
            title: 'Училище'
        },
        {
            id: 3,
            title: 'Колледж'
        },
        {
            id: 4,
            title: 'Техникум'
        },
        {
            id: 5,
            title: 'Неоконченное высшее'
        },
        {
            id: 6,
            title: 'Высшее'
        }
    ];

    const step2 = [
        {
            id: 0,
            title: 'Я не знаю'
        },
        {
            id: 1,
            title: 'Гуманитарная'
        },
        {
            id: 2,
            title: 'Техническая'
        },
        {
            id: 3,
            title: 'Педагогическая'
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
                                step1.map((item) => (
                                    <li key={item.id} className={`${choose === item.id ? 'firstPage__order-navbar_list-active' : ''} firstPage__order-navbar_list`}
                                        onClick={() => setChoose(item.id)}>{item.title}</li>
                                ))
                            }
                        </ul>
                        <div className='firstPage__order-block'>
                            <button className={`${choose !== '' ? 'firstPage__order-btn_active' : ''} firstPage__order-btn`} type='button'>К шагу 2 из 3</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstPage;