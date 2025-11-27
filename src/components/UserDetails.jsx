import React from 'react';
import TextBox from './TextBox.jsx';
const UserDetails = ({user, age, profession}) => {

  function canDrive(age){
    return age >=18 ? true : false;
  }

  return (
    <div>
    <h3>Usuario: {user}</h3>
    <TextBox>
      {`Idade: ${age} - Profissao: ${profession}
      Pode dirigir?: ${canDrive(age) ? "Sim": "Nao"}
      `}
    </TextBox>
    </div>
  );
};

export default UserDetails;