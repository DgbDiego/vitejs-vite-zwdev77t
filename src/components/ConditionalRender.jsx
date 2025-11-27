import React, { useState } from 'react';

const ConditionalRender = () => {
  const [x] = useState(2);
  const [y] = useState(6);
  const [z, zRandomNumber] = useState(6);

  const randomizaNumero = () => {
    const rnd = Math.floor(Math.random() * 10);

    zRandomNumber((prevNumber) => {
      return rnd;
    });
  };

  return (
    <div>
      <div>
        É possível usar condicionais para determinar a renderização. Como
        exemplo, mude o valor de 'x'.
      </div>
      {x < 5 && <p>x menor q 5</p>}
      {x == 5 && <p>exatamente 5</p>}
      {x > 5 && <p>maior que 5</p>}
      <h1>Aula 43: If else ternário</h1>
      <div>
        Dá pra usar ternário também. Clique no botão abaixo para randomizar
        valor de Z. A condicional avalia o número entre 0 e 10.{' '}
      </div>
      <button onClick={randomizaNumero}>Z = {z}</button>
      {z < 5 ? (
        <p>Z menor q 5</p>
      ) : z == 5 ? (
        <p>Z igual a 5 </p>
      ) : (
        <p>Z maior que 5</p>
      )}
    </div>
  );
};

export default ConditionalRender;
