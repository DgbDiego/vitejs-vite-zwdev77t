import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar(){
    return(
        <aside className="app-sidebar">
            <ul>
            <li><NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink></li>
            <li><NavLink to="/nova-aula" className={({isActive}) => isActive ? 'active' : ''}>Nova Aula</NavLink></li>
            {/* <li><NavLink to="/aulas-antigas" className={({isActive}) => isActive ? 'active' : ''}>Aulas Antigas</NavLink></li> */}
            </ul>
        </aside>
    );
}