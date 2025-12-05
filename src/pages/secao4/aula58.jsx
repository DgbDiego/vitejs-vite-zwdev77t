import React from 'react'
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'

export const meta = { title: "Aula 58\nCSS Inline", icon: "FileText", menu: true, component: "aula58", path: "/pages/secao4/aula58" }

const aula58 = () => {
  return (
    <div>
        <h1>Aula 58 - CSS Inline</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • O CSS Inline é utilizado para estilizar elementos diretamente no JSX;
                    • As propriedades CSS são passadas como um objeto JavaScript;
                    • As propriedades em CSS que possuem hífen (-) são convertidas para camelCase (ex: background-color vira backgroundColor);
                    • Valores numéricos podem ser passados sem aspas, exceto quando a unidade não é 'px';`}
            </TextBox>
        </BorderBox>
        <div style={{color: "black", padding: 15, backgroundColor: "white", borderRadius: 15, boxShadow: "#000 0px 0px 3px"}}>Este elemento foi estilizado de forma inline</div>
    </div>

  )
}

export default aula58
