import React, {useState} from 'react';
import {useForm} from 'react-hook-form'
import './Home.css'
import './../allStyle.css'
import Avatar from './../../assets/avatar/avatar.svg'
import Vk from './../../assets/icon/vk.svg'
import Inst from './../../assets/icon/instagram.svg'
import Whats from './../../assets/icon/whatsapp.svg'
import Logo from './../../assets/logo/desktop.svg'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


const Footer = () => {


    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


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


    const getResult = async () =>{

    };


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
                            data.map((item, i) => (
                                <div className='footer__form-list'>
                                    <div className='footer__form-toggle' onClick={() => toggle(i)}>
                                        <h3 className='footer__form-title'>{item.question}</h3>
                                        <span className={`${select === i ? 'eks' : 'plus'} footer__form-plus`}> </span>
                                    </div>
                                    <div
                                        className={`${select === i ? 'content show' : 'content'} footer__form-answer`}>{item.answer}</div>
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

                        {/*-----------------------------------------------------------------------------------------------------------------------------------------*/}
                       <div>
                           <form className='footer__questions-form' onSubmit={handleSubmit(onSubmit)}>

                                   <Box
                                       component="form"
                                       sx={{
                                           '& .MuiTextField-root': {m: 1, width: '340px'},
                                       }}
                                       noValidate
                                       autoComplete="off"
                                   >
                                       <div className='form__flex'>
                                           <div>
                                               <div className='form__block'>
                                                   <p className='footer__questions-form_title'>Как Вас зовут?</p>
                                                   <TextField
                                                       id="filled-multiline-flexible"
                                                       label="Имя"
                                                       multiline
                                                       maxRows={10}
                                                       onChange={handleChange}
                                                       noValidate
                                                       variant="filled"
                                                       {...register('firstName', {
                                                           required: "Поле обязательно к заполнению",
                                                           maxLength: {
                                                               value: 20,
                                                               message: 'максимум 20 символов!'
                                                           }
                                                       })}
                                                   />
                                                   <div style={{height: 40}}>{errors?.firstName &&
                                                   <p className='input__error'>{errors?.firstName?.message || "Error!"}</p>}</div>
                                               </div>
                                               <div className='form__block'>
                                                   <p className='footer__questions-form_title'>Ваш телефон</p>
                                                   <TextField
                                                       id="filled-textarea"
                                                       label="Номер телефона"
                                                       multiline
                                                       variant="filled"
                                                       {...register('phoneNumber', {
                                                           required: "Поле обязательно к заполнению",
                                                           maxLength: {
                                                               value: 10,
                                                               message: 'Ошибка!'
                                                           }
                                                       })}
                                                   />
                                                   <div style={{height: 40}}>{errors?.phoneNumber &&
                                                   <p className='input__error'>{errors?.phoneNumber?.message || "Error!"}</p>}</div>
                                               </div>
                                           </div>
                                           <div className='form__block'>
                                               <p className='footer__questions-form_title'>Напишите свои вопросы:</p>
                                               <TextField
                                                   id="filled-multiline-static"
                                                   label="Вы можете задать несколько вопросов"
                                                   multiline
                                                   rows={4}
                                                   defaultValue=""
                                                   variant="filled"
                                                   {...register('yourQuestions', {
                                                       required: "Поле обязательно к заполнению",
                                                       maxLength: {
                                                           value: 100,
                                                           message: 'Ошибка!'
                                                       }
                                                   })}
                                               />
                                               <div style={{height: 40}}>{errors?.yourQuestions &&
                                               <p className='input__error'>{errors?.yourQuestions?.message || "Error!"}</p>}</div>

                                               <div>
                                                   <p className='footer__questions-form_text'>Нажимая кнопку “Задать вопрос”,
                                                       Вы <br/> соглашаетесь с условиями обработки <br/> персональных данных</p>
                                               </div>
                                           </div>
                                       </div>
                                   </Box>
                               <button className='footer__questions-operator_btn'>Задать вопрос</button>
                           </form>
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
                <div className='footer__selection-circle'></div>
            </div>
        </footer>

    );
};

export default Footer;