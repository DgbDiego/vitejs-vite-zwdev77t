import React from 'react'
import BorderBox from '../../components/BorderBox';
import TextBox from '../../components/TextBox';
import MyForm from '../../components/MyForm';

export const meta = {
    title: "Aula 70\nResetando formulários",
    icon: "FileText",
    menu: true,
    component: "aula70",
    path: "/pages/secao5/aula70",
};

function limparFormulario() {
    setName(''); // Função para setar o email
    setEmail('');
    // Função para setar o nome
}

const aula70 = () => {
  return (
    <div>
        <h1>Aula 70 - Resetando formulários</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • Resetar formulários em React pode ser feito de várias maneiras, dependendo de como o formulário foi implementado;
                    • Uma abordagem comum é redefinir o estado dos campos do formulário para seus valores iniciais usando o hook useState;
                    • Outra opção é usar a referência do formulário (usando useRef) para chamar o método reset() do elemento de formulário HTML, que limpa todos os campos para seus valores padrão;
                    • É importante garantir que qualquer estado relacionado ao formulário também seja atualizado para refletir o reset, especialmente se houver validação ou mensagens de erro associadas aos campos.`
                }
            </TextBox>
        </BorderBox>
        <hr />
        <MyForm user={{name: "José", email: "jose@gmail.com"} } myFunction={"limparFormulario"}  />

    </div>
  )
}

export default aula70