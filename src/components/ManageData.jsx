import { useState } from 'react';

const ManageData = () => {
  let someData = 0;

  function alteraValor(sinal) {
    var tempo = number;
    if (sinal == '+') {
      tempo++;
    } else {
      tempo--;
    }

    setNumber(tempo);
  }

  const [number, setNumber] = useState(someData);

  return (
    <div>
      <h2>Valor</h2>
      <h3>{number}</h3>
      <button onClick={() => alteraValor('-')}>-1</button>
      <button onClick={() => alteraValor('+')}>+1</button>
    </div>
  );
};

export default ManageData;
