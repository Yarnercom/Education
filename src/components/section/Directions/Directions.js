import React, {useState} from 'react';
import './Directions.css'
import Arrow from './../../../assets/icon/Vector.svg'
import Average from "../../routes/Average";
import Higher from "../../routes/Higher";
import Ape from "../../routes/Ape";


const Directions = () => {


    const [content, setContent] = useState('higher');


    return (
        <section className='directions'>
            <div className='container'>
                <div className='directions__container'>
                    <h2 className='directions__title'>Направления</h2>
                    <ul className='directions__navbar'>
                        <p onClick={() => setContent('higher')} className={`${content === 'higher' ? 'active' : ''} directions__navbar-list`}>
                            Высшее<sup className='sup'>14</sup>
                        </p>
                        <p onClick={() => setContent('average')} className={`${content === 'average' ? 'active' : ''} directions__navbar-list`}>
                            Среднее <sup className='sup'>9</sup>
                        </p>
                        <p onClick={() => setContent('ape')} className={`${content === 'ape' ? 'active' : ''} directions__navbar-list`}>
                            ДПО <sup className='sup'>36</sup>
                        </p>
                    </ul>
                    <div className='line'></div>

                    {
                        content === 'higher' ? <Higher/>
                            : content === 'average' ? <Average/>
                            : content === 'ape' ? <Ape/>
                                : ''
                    }
                    <div className='directions__showMore'>
                        <p className='directions__showMore-more'>Показать ещё 24 направления</p>
                        <img src={Arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Directions;
