import React from 'react'
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'
import '../../components/aula57.css'

export const meta = { title: "Aula 57\nCSS de Componente", icon: "FileText", menu: true, component: "aula57", path: "/pages/secao4/aula57" }

const aula57 = () => {
  return (
    <div>
        <h1>Aula 57 - CSS de Componente</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • O CSS de componente é utilizado para um componente em específico;
                    • Geralmente é criado um arquivo com o mesmo nome do componente;
                    • Note que este método não é scoped, ou seja, o CSS vaza pra outros componentes se houver uma regra em colisão;
                `}
            </TextBox>
        </BorderBox>
            <p>
                • Este parágrafo está no componente Aula57 e estilizado com CSS do Componente.
            </p>
            <p className="p-aula57">
                • Este parágrafo está no componente Aula57 e estilizado com CSS do Componente, mas com uma classe específica.
            </p>
    </div>
  )
}

export default aula57