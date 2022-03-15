import React, {useState} from 'react';
import './Home.css'
import Avatar from './../../assets/avatar/avatar.svg'
import Vk from './../../assets/icon/vk.svg'
import Inst from './../../assets/icon/instagram.svg'
import Whats from './../../assets/icon/whatsapp.svg'
import Logo from './../../assets/logo/desktop.svg'


const Footer = () => {

    const [select, setSelect] = useState('');

    const toggle = (i) => {
        if (select === i) {
            return setSelect('')
        }

        setSelect(i)
    };


    const data = [
        {
            question: 'Где учиться по удаленной специальности?',
            answer: 'Зачеты и экзамены проходят в виде тестов внутри электронного кабинета по расписанию. Тесты открытые, закрытые, с вариантами, иногда нужно решить задачу или написать эссе. Есть три попытки, можно выбрать лучший результат. Время каждой попытки ограничено, обычно от 30 до 45 минут на тест.'
        },
        {
            question: 'Как проходит дистанционное обучение?',
            answer: 'Зачеты и экзамены проходят в виде тестов внутри электронного кабинета по расписанию. Тесты открытые, закрытые, с вариантами, иногда нужно решить задачу или написать эссе. Есть три попытки, можно выбрать лучший результат. Время каждой попытки ограничено, обычно от 30 до 45 минут на тест.'
        },
        {
            question: 'Какой документ об образовании выдается после\n' +
                '                                дистанционной учебы\n' +
                '                                в колледже или вузе?',
            answer: 'Зачеты и экзамены проходят в виде тестов внутри электронного кабинета по расписанию. Тесты открытые, закрытые, с вариантами, иногда нужно решить задачу или написать эссе. Есть три попытки, можно выбрать лучший результат. Время каждой попытки ограничено, обычно от 30 до 45 минут на тест.'
        },
        {
            question: 'Я решил поступать. Что дальше делать?',
            answer: 'Зачеты и экзамены проходят в виде тестов внутри электронного кабинета по расписанию. Тесты открытые, закрытые, с вариантами, иногда нужно решить задачу или написать эссе. Есть три попытки, можно выбрать лучший результат. Время каждой попытки ограничено, обычно от 30 до 45 минут на тест.'
        }
    ];



    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__container'>
                    <div className='footer__form'>
                        <div className='footer__form-list1'>
                            <h3 className='footer__form-questions'>Вопрос-ответ:</h3>
                            <p className='footer__form-subtitle'>Мы отобрали вопросы, которые задают <br/> нашим
                                менеджерам каждый день </p>
                        </div>
                            {
                                data.map((item, i)=>(
                                    <div className='footer__form-list'>
                                        <div className='footer__form-toggle' onClick={()=> toggle(i)}>
                                            <h3 className='footer__form-title'>{item.question}</h3>
                                            <span className={`${select === i ? 'eks' : 'plus'} footer__form-plus`}> </span>
                                        </div>
                                        <div className={`${select === i ? 'content show' : 'content'} footer__form-answer`}>{item.answer}</div>
                                    </div>
                                ))
                            }
                    </div>

                    <div className='footer__questions'>
                        <div className='footer__questions-item'>
                            <h3 className='footer__questions-title'>Ещё <br/>
                                вопросы?</h3>
                            <p className='footer__questions-subtitle'>Задайте их и наш менеджер <br/> свяжется с Вами в
                                течение <br/>
                                15 минут</p>
                            <div className='footer__questions-block'>
                                <img className='footer__questions-block_avatar' src={Avatar} alt="avatar"/>
                                <p className='footer__questions-block_text'>Вам ответит Анастасия —
                                    Ваш <br/> персональный менеджер</p>
                            </div>
                        </div>
                        <form className='footer__questions-form'>
                            <label>
                                <p className='footer__questions-form_title'>Как Вас зовут?</p>
                                <input placeholder='Иванов Иван' className='footer__questions-form_input' type="text"/>
                                <p className='footer__questions-form_title'>Ваш телефон</p>
                                <input placeholder='+7 (000) 000 00 00' className='footer__questions-form_tel'
                                       type="tel"/>
                            </label>
                            <p className='footer__questions-form_text'>Нажимая кнопку “Задать вопрос”,
                                Вы <br/> соглашаетесь с условиями обработки <br/> персональных данных</p>
                        </form>
                        <div className='footer__questions-operator'>
                            <label className='footer__questions-operator_block'>
                                <p className='footer__questions-operator_title'>Напишите свои вопросы:</p>
                                <textarea className='footer__questions-operator_text'
                                          placeholder='Вы можете задать несколько вопросов'>

                                </textarea>
                                <button className='footer__questions-operator_btn' type='submit'>Задать вопрос</button>
                            </label>
                        </div>
                    </div>

                    <div className='footer__basement'>
                        <div className='footer__basement-col'>
                            <img className='footer__basement-logo' src={Logo} alt="logo"/>
                            <p className='footer__basement-program'>Единая приёмная комиссия вузов <br/> и колледжей по
                                дистанционным <br/>
                                программам</p>
                            <p className='footer__basement-agreement'>Политика конфиденциальности</p>
                        </div>
                        <div className='footer__basement-col'>
                            <p className='footer__basement-title'>Направления</p>
                            <p className='footer__basement-title'>Вузы</p>
                            <p className='footer__basement-title'>Колледжи</p>
                            <p className='footer__basement-title'>Профессии</p>
                        </div>
                        <div className='footer__basement-col'>
                            <p className='footer__basement-title'>Как поступить</p>
                            <p className='footer__basement-title'>Отзывы</p>
                            <p className='footer__basement-title'>Вопрос-ответ</p>
                            <p className='footer__basement-title'>Полезные статьи</p>
                        </div>
                        <div className='footer__basement-col'>
                            <p className='footer__basement-title'>Партнёрам</p>
                            <p className='footer__basement-title'>Шансы по ЕГЭ</p>
                            <p className='footer__basement-title'>Контакты</p>
                            <p className='footer__basement-title'>Подать документы</p>
                        </div>
                        <div className='footer__basement-col'>
                            <p className='footer__basement-tel'>+7 (902) 311 36 64</p>
                            <p className='footer__basement-workTime'>Рабочее время: <br/>
                                Пн — Пт с 9.00 до 19.00</p>
                            <div className='footer__basement-icon'>
                                <img src={Vk} alt="vk"/>
                                <img src={Inst} alt="instagram"/>
                                <img src={Whats} alt="whats"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__selection'>
                <p className='footer__selection-btn'>Подобрать обучение</p>
                <div className='footer__selection-circle'> </div>
            </div>
        </footer>

    );
};

export default Footer;