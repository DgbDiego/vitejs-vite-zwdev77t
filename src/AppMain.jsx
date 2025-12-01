import React from "react";
import {Routes, Route} from 'react-router-dom';
import AppLayout from "./layout/AppLayout";
import Home from './pages/Home';
import NewLesson from './pages/NewLesson';

export default function App(){
    return (
        <Routes>
            <Route path='/' element={<AppLayout/>} />
            <Route index element={<Home/>}/>
            <Route path='nova-aula' element={<NewLesson/>}/>
        </Routes>

    );
}
