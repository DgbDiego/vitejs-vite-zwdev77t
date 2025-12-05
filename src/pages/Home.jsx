import React from "react";

export const meta = { title: "Início", icon: "Home", menu: true, component: "Home", path: "/pages/Home" }

export default function Home(){
    return (
        <div>
            <h1>Inicio</h1>
            <p>Bem vindo ao app de estudos</p>
        </div>
    );

}