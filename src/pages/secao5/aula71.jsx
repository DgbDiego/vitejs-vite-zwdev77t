import React from 'react'
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'
import MyForm from '../../components/MyForm';

export const meta = {
   title: "Aula 71\nTextarea",
   icon: "FileText",
   menu: true,
   component: "aula71",
   path: "/pages/secao5/aula71",
};

const aula71 = () => {
  return (
    <div>
        <h1>Aula 71 - Textarea</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • O componente < textarea> em React é usado para criar áreas de texto multilinha, permitindo que os usuários insiram grandes quantidades de texto;
                    • Assim como outros elementos de formulário em React, o valor do < textarea> pode ser controlado usando o estado do componente com o hook useState;
                    • O atributo value do < textarea> é vinculado a uma variável de estado, e as mudanças no conteúdo são gerenciadas por meio de um manipulador de eventos onChange;
                    • Isso permite que o aplicativo reaja às alterações do usuário em tempo real, facilitando a validação, formatação e manipulação dos dados inseridos.`
                }
            </TextBox>
        </BorderBox>
        <hr />
        <MyForm showTextArea={true} myFunction={"limparFormulario"} />

    </div>
  )
}

export default aula71