import React, {useState} from 'react';
import './../../section/FirstPage/FirstPage.css'

const Card = () => {

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


    const [choose1, setChoose1] = useState('');

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
        <div>
                <div className='firstPage__order-dFlex'>
                    <p className='firstPage__order-title'>Подобрать обучение</p>
                    <span className='firstPage__order-frac'>1/3</span>
                </div>
                <p className='firstPage__order-subtitle'>Какое у Вас образование?</p>
                <ul className='firstPage__order-navbar'>

                    {
                        step1.map((item) => (
                            <li key={item.id}
                                className={`${choose === item.id ? 'firstPage__order-navbar_list-active' : ''} firstPage__order-navbar_list`}
                                onClick={() => setChoose(item.id)}>{item.title}</li>
                        ))
                    }
                    {/*{*/}
                    {/*    step2.map((item) =>(*/}
                    {/*        <li key={item.id} className={`${choose1 === item.id ? 'firstPage__order-navbar_list-active' : ''} firstPage__order-navbar_list`}*/}
                    {/*            onClick={()=> setChoose1(item.id)}>{item.title}</li>*/}
                    {/*    ))*/}
                    {/*}*/}

                </ul>
                <div className='firstPage__order-block'>
                    <button className={`${choose !== choose1 ? 'firstPage__order-btn_active' : ''} firstPage__order-btn`} type='button'>К шагу 2 из 3</button>
                </div>
        </div>
    );
};

export default Card;