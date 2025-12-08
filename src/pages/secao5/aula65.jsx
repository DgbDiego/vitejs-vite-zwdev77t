import React from 'react'
import BorderBox from '../../components/BorderBox';
import TextBox from '../../components/TextBox';

 export const meta = {
    title: "Aula 65\nLabel envolvendo input",
    icon: "FileText",
    menu: true,
    component: "aula65",
    path: "/pages/secao5/aula65",
};

const aula65 = () => {
  return (
    <div>
        <h1>Aula 65 - Label envolvendo input</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • Envolver um elemento < input> com um elemento < label> melhora a acessibilidade, permitindo que os usuários cliquem no texto do rótulo para focar o campo de entrada;
                    • Isso é especialmente útil para usuários que dependem de tecnologias assistivas, como leitores de tela, pois associa claramente o rótulo ao campo correspondente;
                    • A prática também amplia a área clicável, facilitando a interação com o formulário, especialmente em dispositivos móveis.`
                }
            </TextBox>
        </BorderBox>
        <hr />
            <form>
                <div className='column'>
                    <label className='row'>
                        <span>Nome:</span>
                        <input type="text" name="nome" />
                    </label>
                    <label className='row'>
                        <span>Email:</span>
                        <input type="email" name="email" />
                    </label>
                    <label className='row'>
                        <input type="submit" value="Enviar" />
                    </label>

                </div>
            </form>
    </div>
  )
}

export default aula65