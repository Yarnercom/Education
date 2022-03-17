import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Routes.css'
import Card from "../Home/card/Card";


const Enroll = () => {


    const [all, setAll] = useState([]);


    useEffect(() => {
        axios('http://localhost:8080/mainTitle')
            .then(({data}) => setAll(Object.values(data)))
    }, []);



    return (
        <section className='enroll'>
            <div className='container'>
                <div className='enroll__container'>


                    <div className='enroll__first'>
                        {
                            all.map((item, idx) => (
                                <h3 className='enroll__title'>{item.title}</h3>
                            ))
                        }
                    </div>

                    <div className='firstPage__order'>
                        <Card/>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Enroll;