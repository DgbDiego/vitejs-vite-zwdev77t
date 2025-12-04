import { useState } from 'react';
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Comp } from './components';
import City from './assets/city.jpg';

export default function AppOld() {
  const MENU_ITEMS = [
    { id: 0, title: 'Inicio', icon: '🏠' },
    { id: 1, title: 'Nova Aula', icon: '✍️' },
  ];

  const nomeUsuario = 'Diego';

  const isVisible = true;

  const cars = [
    { id: 1, brand: 'Ferrari', km: 0, color: 'Amarelo', newCar: true },
    { id: 2, brand: 'Kia', km: 100000, color: 'Azul', newCar: false },
    { id: 3, brand: 'Renault', km: 200000, color: 'Verde', newCar: false },
  ];

  function showMessage() {
    console.log('Evento do componente pai');
  }

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const [activeItem, setActiveItem] = useState(MENU_ITEMS[0].id);

  return (
    <div>
      {isVisible && (
        <>
          <title>Secao 3</title>
          <h1>Avancando em React</h1>
          <div>
            <img src="/img1.jpg" alt="Paisagem" />
          </div>
          <div>
            <img src={City} alt="Cidade" />
          </div>
          <Comp.ManageData />
          <Comp.ListRender />
          <h1>Aula 43: Condicionais</h1>
          <Comp.ConditionalRender />
          <h1>Aula 44: Props</h1>
          <Comp.ShowUserName name={nomeUsuario} />
          {/* Aula 45 - Destructuring */}
          <h1>Aula 45: Desestructuring</h1>
          <Comp.TextBox maxWidth="100%">
            {`Variação do 'props' onde permite que eu declare a variável que eu quero
        explícitamente, desestruturando sua declaração do prop`}
          </Comp.TextBox>
          <Comp.CarDetails brand="Ford" km={154000} color="Branco" />
          <h1>Aula 46: Reutilizacao de componentes</h1>
          <div>
            <Comp.TextBox maxWidth="100%">
              {`
        Os componentes podem ser reaproveitados'.
        `}
            </Comp.TextBox>
            <Comp.CarDetails brand="Fusca" km={180000} color="Azul" />
          </div>
          <h1>Aula 47: Renderizacao de Lista em componentes</h1>
          <Comp.TextBox maxWidth="100%">
            {`
        Loop em array de objetos
        `}
          </Comp.TextBox>
          <div>
            {cars.map((car) => (
              <Comp.CarDetails
                key={car.id}
                brand={car.brand}
                km={car.km}
                color={car.color}
                newCar={car.newCar}
              />
            ))}
          </div>
          <h1>Aula 48: Fragments</h1>
          <Comp.TextBox maxWidth="100%">
            {`
        Os <b>React fragments</b> são recursos do React que vc cria uma tag vazia para ser usada como elemento pai sem alterar a estrutura do HTML.
        Assim os elementos criados são aninhados ao elemento pai sem interferência na sua estrutura        
        `}
          </Comp.TextBox>
          <Comp.Fragment propFragment="teste" />
          <h1>Aula 49: Children Prop</h1>
          <Comp.TextBox maxWidth="100%">
            {`
        Recurso usado pra quando um componente precisa ter um JSX dentro dele porém esse JSX vem do componente pai. Então o componente age como um "container", abraçando estes elementos. O children é considerado um prop do componente.
        No exemplo será usado um container com uma estrutura própria que pode receber conteúdo renderizado além da sua própria estrutura.      
        `}
          </Comp.TextBox>
          <Comp.Container>
            <p>Conteudo do container</p>
          </Comp.Container>
          <h1>Aula 50: Funcoes em props</h1>
          <Comp.TextBox maxWidth="90%">
            {`
        As funcoes podem ser passadas para as props normalmente;
        Basta criar a funcao no componente pai e enviar como prop para o componente;
        No componente filho ela pode ser ativada por um evento, por exemplo;
        No exemplo, a injeção de uma função do componente pai no componente filho e sua execução.
      `}
          </Comp.TextBox>
          <Comp.ExecuteFunction myFunction={showMessage} />
          <h1>Aula 51. State lift</h1>
          <Comp.TextBox maxWidth="90%">
            {`
        
        Elevação de estado ou <b>State lift</b> é quando um valor é elevado do componente filho para o componente pai;
        Geralmente temos <b>um componente que usa o state e outro que o altera;</b>
        
        Podemos ter o gerenciamento de um estado pelo componente pai, consumo do estado em um componente filho e a alteração em outro componente filho;
        `}
          </Comp.TextBox>
          <Comp.Message msg={message} />
          <Comp.ChangeMessageState handleMessage={handleMessage} />
          <h1>Desafio 4</h1>
          <Comp.Desafio4 />
        </>
      )}
    </div>
  );
}
