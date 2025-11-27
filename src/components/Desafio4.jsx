import React from 'react';
import BorderBox from './BorderBox.jsx';
import UserDetails from './UserDetails.jsx';

const pessoas = [
  { id: 1, nome: 'Diego', idade: 35, profissao: 'Prog' },
  { id: 2, nome: 'Camila', idade: 27, profissao: 'Prog' },
  { id: 3, nome: 'Livia', idade: 17, profissao: 'Nada' },
];

const Desafio4 = () => {
  return (
    <div>
      <BorderBox maxWidth="60%">
      {pessoas.map((pessoa) => (
        <UserDetails 
        user = {pessoa.nome}
        age = {pessoa.idade}
        profession = {pessoa.profissao}
        />
        ))}
      </BorderBox>
    </div>
  );
};

export default Desafio4;
