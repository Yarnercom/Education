import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Higher from "../routes/Higher";
import Average from "../routes/Average";
import Ape from "../routes/Ape";

const Showeucation = () => {
    const [content, setContent] = useState('first');
    return (
        <div>
            {
                content === 'first' ? <Higher content={content} setContent={setContent}/>
                : content === 'second' ? <Average content={content} setContent={setContent}/>
                : content === 'third' ? <Ape content={content} setContent={setContent}/>
                : ''
            }
        </div>
    );
};

export default Showeucation;