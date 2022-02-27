import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Higher from "../routes/Higher";
import Average from "../routes/Average";
import Ape from "../routes/Ape";

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Higher/>}/>
                <Route path='/average' element={<Average/>}/>
                <Route path='/ape' element={<Ape/>}/>
            </Routes>
        </div>
    );
};

export default Content;