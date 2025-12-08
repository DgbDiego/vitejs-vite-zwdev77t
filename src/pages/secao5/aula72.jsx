import React from 'react'
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'
import MyForm from '../../components/MyForm';

export const meta = {
   title: "Aula 72\nSelect no React",
   icon: "FileText",
   menu: true,
   component: "aula72",
   path: "/pages/secao5/aula72",
};

const aula72 = () => {
  return (
    <div>
        <h1>Aula 72 - Select no React</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • O componente < select> em React é usado para criar menus suspensos que permitem aos usuários selecionar uma opção dentre várias disponíveis;
                    • Assim como outros elementos de formulário em React, o valor do < select> pode ser controlado usando o estado do componente com o hook useState;
                    • O atributo value do < select> é vinculado a uma variável de estado, e as mudanças na seleção são gerenciadas por meio de um manipulador de eventos onChange;
                    • Isso permite que o aplicativo reaja às alterações do usuário em tempo real, facilitando a validação, formatação e manipulação dos dados selecionados.`
                }
            </TextBox>
        </BorderBox>
        <hr />
        <MyForm showSelect={true} />
    </div>
  )
}

export default aula72