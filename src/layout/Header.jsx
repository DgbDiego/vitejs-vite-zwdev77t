import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header className='app-header'>
            <div className='app-header-inner'>
                <div className='logo'>
                    <span className='logo-icon'>⚛️</span>
                    <span className='logo-text'>App de estudo</span>
                </div>
                <nav>
                    <Link to='/' className='header-link' >Inicio</Link>
                </nav>
            </div>
        </header>
    );
}