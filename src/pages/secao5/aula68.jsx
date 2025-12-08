import React from 'react'
import BorderBox from '../../components/BorderBox';
import TextBox from '../../components/TextBox';

export const meta = {
    title: "Aula 68\nEnvio de formulário",
    icon: "FileText",
    menu: true,
    component: "aula68",
    path: "/pages/secao5/aula68",
};

const aula68 = () => {

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
        <h1>Aula 68 - Envio de formulário</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • O envio de formulários em React é geralmente tratado através do evento onSubmit, que permite capturar os dados do formulário quando o usuário o envia;
                    • Para evitar o comportamento padrão do navegador (recarregar a página), é comum usar event.preventDefault() dentro do manipulador de envio;
                    • Os dados do formulário podem ser acessados através do estado do componente, que é atualizado conforme o usuário interage com os campos de entrada;
                    • Após a captura dos dados, é possível processá-los, enviá-los para um servidor ou realizar outras ações conforme necessário.`
                }
            </TextBox>
        </BorderBox>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className='column'>
                <label className='row'>
                    <span>Nome:</span>
                    <input type="text" name="nome" onChange={(event) => handleChangeName(event)} />
                </label>
                <label className='row'>
                    <span>Email:</span>
                    <input type="email" name="email" onChange={(event) => handleChangeEmail(event)} />
                </label>
                <label className='row'>
                    <input type="submit" value="Enviar" />
                </label>
            </div>
        </form>
    </div>
  )
}

export default aula68