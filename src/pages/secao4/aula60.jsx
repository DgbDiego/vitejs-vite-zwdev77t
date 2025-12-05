import { useState } from 'react';
import React from 'react';
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'

export const meta = { title: "Aula 60\nClasses dinâmicas", icon: "FileText", menu: true, component: "aula60", path: "/pages/secao4/aula60" }

const aula60 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }

  return (
    <div>
        <h1>Aula 60 - Classes dinâmicas</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • Classes dinâmicas permitem alterar as classes CSS de um elemento com base em condições;
                    • Utiliza-se expressões JavaScript para definir quais classes serão aplicadas;
                    • Isso possibilita criar interfaces mais interativas e responsivas às ações do usuário;`}
            </TextBox>
        </BorderBox>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> Título vermelho
        <h2 className={isChecked ? "aula60-red-title" : "aula60-title"}>Título com classe dinâmica</h2>
    </div>
  )
}

export default aula60