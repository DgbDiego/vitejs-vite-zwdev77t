import React from 'react'
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'

export const meta = { title: "Aula 59\nCSS Inline Dinâmico", icon: "FileText", menu: true, component: "aula59", path: "/pages/secao4/aula59" }

const n = 10;

const aula59 = () => {
  return (
    <div>
        <h1>Aula 59 - CSS Inline Dinâmico</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • O CSS Inline Dinâmico permite alterar estilos com base no estado ou props do componente;
                    • Utiliza-se expressões JavaScript para definir os valores das propriedades CSS;
                    • Isso possibilita criar interfaces mais interativas e responsivas às ações do usuário;`}
            </TextBox>
        </BorderBox>
        <h2 style={n < 10 ? ({color: "purple"}) : ({color: "blue"})} >Exemplo de CSS Inline Dinâmico. Se 'n' for menor que 10, a fonte fica roxa. Senão, fica azul.</h2>
    </div>
  )
}

export default aula59