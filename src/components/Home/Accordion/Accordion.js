import React, {useState} from 'react';
import './../Home.css';

const Accordion = () => {

    const [select, setSelect] = useState(null);

    const toggle = (i) =>{
        if (select === i){
            return setSelect(null)
        }

        setSelect(i)
    };

    const data = [
        {
            question: 'question1',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!'
        },
        {
            question: 'question2',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!'
        },
        {
            question: 'question3',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!'
        },
        {
            question: 'question4',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minus nesciunt non sapiente voluptatibus!\n' +
                '                Accusamus accusantium culpa mollitia numquam tenetur!'
        }
    ];


    return (
        <div>
            <div className='accordion'>
                {
                    data.map((item, i)=>(
                        <div className='item'>
                            <div className='title' onClick={()=> toggle(i)}>
                                <h3>{item.question}</h3>
                                <span>{select === i ? '-' : '+'}</span>
                            </div>
                            <div className={select === i ? 'content show' : 'content'}>{item.answer}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Accordion;