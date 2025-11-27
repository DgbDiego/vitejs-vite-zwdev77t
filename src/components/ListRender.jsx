import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias']);

  const [users, setUsers] = useState([
    { id: 1, name: 'Matheus', age: 31 },
    { id: 2, name: 'Joao', age: 28 },
    { id: 3, name: 'Pedro', age: 44 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <h1>Aula 39: Renderiza Lista</h1>
      <div>Mostrando que dá pra renderizar listas normalmente. Pode usar o parâmetro 'i' como chave, vai considerar o index da lista.</div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h1> Aula 40: Propriedade Key</h1>
      <div>Apesar do 'i' funcionar, não é recomendado. Usar sempre uma chave para a lista não se perder.</div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name}, {item.id}, {item.age}
          </li>
        ))}
      </ul>
      <h1> Aula 41: Previous State</h1>
      <div>Uma forma de capturar o valor antigo do State e modificar seu valor. O botão abaixo vai remover aleatoriamente um usuário da lista da <b>aula 40.</b></div>
      <button onClick={deleteRandom}> Delete Random</button>
    </div>
  );
};
export default ListRender;
