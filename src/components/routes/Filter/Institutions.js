import React, {useState} from 'react';
import holl from './../../../assets/direction/holl.png'
import Share from "../../../assets/icon/share.svg";
import {CSSTransition} from "react-transition-group";
import Telegram from "../../../assets/icon/telegram.svg";
import Whats from "../../../assets/icon/whatsapp.svg";
import Vk from "../../../assets/icon/vk.svg";
import Btns from "../../Home/btns/Btns";

const Institutions = () => {

    const [active, setActive] = useState(false);

    return (
        <section className='education'>
            <div className='container'>
                <Btns/>
                <div className='education__container'>
                    <div className='education__bg'>
                        <h3 className='education__title'>Учебным <br/>
                            заведениям</h3>
                        <p className='education__subtitle'>Мы сотрудничаем с вузами, колледжами, академиями повышения квалификации <br/>
                            и профессиональной переподготовки</p>

                        <img className='education__img' src={holl} alt="holl"/>
                        <div className='firstPage__education-pos1'>

                            <img onClick={()=> setActive(!active)} className='firstPage__education-share2' src={Share} alt="share"/>
                            <CSSTransition in={active} classNames='alert' timeout={300} unmountOnExit>

                                <ul className={`${active ? ' share__active' : ''} share__body1`}>
                                    <li className='share__bodyText'>
                                        <h3 className='share__title'>Поделиться:</h3>
                                        <span className='share__cross' onClick={()=> setActive(!active)}> </span>
                                    </li>
                                    <li className='share__bodyLink'>
                                        <a target='_blank' href="https://t.me/buggynice"><img src={Telegram} alt='telegram' className='share__link'/></a>
                                        <a target='_blank' href="#"><img src={Whats} alt='whats' className='share__link'/></a>
                                        <a target='_blank' href="#"><img src={Vk} alt='vk' className='share__link'/></a>
                                    </li>
                                </ul>

                            </CSSTransition>

                        </div>
                    </div>
                    <div className='education__partner'>
                        <h3 className='education__title1'>Стать партнёром</h3>
                        <form className='education__form' action="#">
                            <label className='education__label'>
                                <p className='education__text'>Ваше имя:</p>
                                <input required className='education__input' type="text"/>
                            </label>
                            <label className='education__label'>
                                <input required className='education__input' placeholder='Учебное завведение' type="text"/>
                            </label>
                            <label className='education__label'>
                                <input required className='education__input' placeholder='Телефон' type="tel"/>
                            </label>
                            <label className='education__label'>
                                <input required className='education__input' placeholder='Почта' type="email"/>
                            </label>
                            <button className='education__btn' type='submit'>Отправить заявку</button>
                        </form>
                        <p className='education__subtitle1'>Нажимая “Отправить”, Вы соглашаетесь с условиями обработки персональных данных</p>
                    </div>
                </div>
                <div className='education__abi'>
                    <div className='education__abi-flexTwo'>
                        <div className='education__abi-flexOne'>
                            <div>
                                <p className='education__abi-title'>+200</p>
                                <p className='education__abi-subtitle'>новых студентов в год</p>
                            </div>
                            <div>
                                <p className='education__abi-title'>35</p>
                                <p className='education__abi-subtitle'>учебных заведений с нами</p>
                            </div>
                        </div>
                        <div className='education__abi-flexOne'>
                            <div>
                                <p className='education__abi-title'>5 млн. ₽</p>
                                <p className='education__abi-subtitle'>зарабатывают некоторые партнёры</p>
                            </div>
                            <div>
                                <p className='education__abi-title'>500 тыс. ₽</p>
                                <p className='education__abi-subtitle'>экономия на маркетинге</p>
                            </div>
                        </div>
                    </div>
                    <p className='education__abi-text'>* Представелены статистические данные за 2018 и 2019 года</p>
                </div>
            </div>
        </section>
    );
};

export default Institutions;