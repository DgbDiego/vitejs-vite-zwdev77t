import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppLayout() {

    return (
        <div className='app-root'>
            {/* <Header/> */}
            <div className='app-body'>
                {/* <Sidebar/> */}
                <main className='app-content'>
                    {/* <Outlet/> */}
                </main>
            </div>
        </div>
    );

}