import React from 'react'
import BorderBox from '../../components/BorderBox';
import TextBox from '../../components/TextBox';
import '../../components/MyForm.css';

 export const meta = {
    title: "Aula 64\nCriando formulários",
    icon: "FileText",
    menu: true,
    component: "aula64",
    path: "/pages/secao5/aula64",
};


const aula64 = () => {
  return (
    <div>
        <h1>Aula 64 - Criando formulários</h1>
        <BorderBox maxWidth="70%">
          <TextBox>
            {
            `   • Formulários em React são criados usando elementos HTML padrão, como < form>, < input>, < textarea> e < button>;
                • O estado dos campos do formulário é gerenciado usando o hook useState, permitindo capturar e atualizar os valores conforme o usuário interage;
                • Manipuladores de eventos, como onChange e onSubmit, são usados para responder às ações do usuário e processar os dados do formulário.`
            }
          </TextBox>
        </BorderBox>
        <hr />
        <h2>Exemplo de Formulário Simples</h2>
        <form>
          <div className="row">
            <label htmlFor='name'>Nome: </label>
            <input type="text" id="name" name="name" placeholder='Digite o seu nome' />
          </div>
          <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default aula64