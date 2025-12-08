import React from 'react'
import './MyForm.css';

const MyForm = ({user, myFunction, showTextArea=false, showSelect=false}) => {

    const [name, setName] = React.useState(user? user.name : '');
    const [email, setEmail] = React.useState(user? user.email : '');
    const [mensagem, setMensagem] = React.useState(user && showTextArea ? user.mensagem : '');
    const [role, setRole] = React.useState(user && showSelect ? user.role : '');

    const handleChangeRole = (event) => {
        setRole(event.target.value);
    }
    
    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangeMensagem = (event) => {
        setMensagem(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', name);
        console.log('Email:', email);

        if(showTextArea) console.log('Mensagem:', mensagem);

        if(showSelect) console.log('Função:', role);

        if(myFunction) caseFunction(myFunction);

    }

    const limparFormulario = () => {
        setName('');
        setEmail('');
        setMensagem('');
    }

const caseFunction = (param) => {
  switch (param) {
    case 'limparFormulario':
      limparFormulario();
      break;

    default:
      // Ação padrão caso nenhum parâmetro coincida
      console.log('Nenhuma ação definida para:', param);
      break;
  }
};

  return (
    <div>
        <h2>Exemplo de Formulário Simples</h2>
        <form onSubmit={handleSubmit}>
            <div className='column'>
                <label className='row'>
                    <span>Nome:</span>
                    <input type="text" name="nome" placeholder='Digite seu nome' onChange={(e) => handleChangeName(e)} value={name} />
                </label>
                <label className='row'>
                    <span>Email:</span>
                    <input type="email" name="email" placeholder='Digite seu email' onChange={(e) => handleChangeEmail(e)} value={email} />
                </label>
                {/* TextArea */}
                { showTextArea &&
                <label className='row'>
                  <span>Mensagem:</span>
                  <textarea placeholder="Digite sua mensagem aqui..." rows="4" cols="50" onChange={(e) => handleChangeMensagem(e)} value={mensagem}  ></textarea>
                </label>
                }
                {/* Select */}
                { showSelect &&
                <label className='row'>
                  <span>Funcao:</span>
                    <select name="role" onChange={(e) => handleChangeRole(e)} value={role} >
                      <option value="">Selecione uma função</option>
                      <option value="admin">Administrador</option>
                      <option value="editor">Editor</option>
                      <option value="viewer">Visualizador</option>
                    </select>
                </label>
                }
                <label className='row'>
                    <input type="submit" value="Enviar" />
                </label>
            </div>
        </form>
    </div>
  )
}

export default MyForm