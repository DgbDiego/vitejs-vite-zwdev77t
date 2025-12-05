import React from 'react'
import CarDetails from '../../components/CarDetails'

export const meta = { title: "Desafio 5\nEstilização", icon: "FileCheck", menu: true, component: "desafio5", path: "/pages/secao4/desafio5" }

const carList = [
    { brand: "Ford", km: 0, color: "Vermelho", newCar: true },
    { brand: "Chevrolet", km: 45000, color: "Prata", newCar: false },
    { brand: "Volkswagen", km: 12000, color: "Azul", newCar: false },
];

const desafio5 = () => {
  return (
    <div className='desafio5'>
        <h1>Desafio 5 - Estilização</h1>
        <p>Estilize o componente CarDetails utilizando CSS Modules. Crie um arquivo CarDetails.module.css e aplique estilos para melhorar a aparência do componente, como cores, fontes e layout.</p>
        {carList.map((car, index) => (
            <CarDetails 
                key={index}
                brand={car.brand}
                km={car.km}
                color={car.color}
                newCar={car.newCar}
            />
        ))}
    </div>
  )
}

export default desafio5