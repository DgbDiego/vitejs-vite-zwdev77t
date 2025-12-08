import React from 'react'
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'
import MyForm from '../../components/MyForm'

export const meta = {
   title: "Aula 69\nControlled inputs",
   icon: "FileText",
   menu: true,
   component: "aula69",
   path: "/pages/secao5/aula69",
}

const aula69 = () => {

        const [name, setName] = React.useState('');
        const [email, setEmail] = React.useState('');
        
        const handleChangeName = (event) => {
            setName(event.target.value);
        }
    
        const handleChangeEmail = (event) => {
            setEmail(event.target.value);
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Nome:', name);
            console.log('Email:', email);
        }

  return (
    <div>
        <h1>Aula 69 - Controlled inputs</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • Controlled inputs em React são elementos de formulário cujo valor é controlado pelo estado do componente, permitindo sincronizar a interface do usuário com os dados do aplicativo;
                    • Para criar um controlled input, o valor do campo de entrada é vinculado a uma variável de estado usando o hook useState, e as mudanças no campo são gerenciadas por meio de um manipulador de eventos onChange;
                    • Isso permite validação em tempo real, formatação de entrada e outras manipulações antes que os dados sejam enviados ou processados, proporcionando maior controle sobre o comportamento do formulário.`
                }
            </TextBox>
        </BorderBox>
        <hr />
        <MyForm user={{name: "Josias", email: "josias@gmail.com"}} />
    </div>
  )
}

export default aula69