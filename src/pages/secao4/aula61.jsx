import React from 'react'
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'
import styles from '../../components/aula61.module.css'

export const meta = { title: "Aula 61\nCSS Modules", icon: "FileText", menu: true, component: "aula61", path: "/pages/secao4/aula61" }

const aula61 = () => {
  return (
    <div>
        <h1>Aula 61 - CSS Modules</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • CSS Modules é uma técnica que permite escopo local para classes CSS em componentes React;
                    • Cada componente pode ter seu próprio arquivo CSS, evitando conflitos de nomes de classes;
                    • As classes são importadas como objetos JavaScript, permitindo acesso seguro e previsível aos estilos.`}
            </TextBox>
            
        </BorderBox>
        <h2 className={styles['aula61_title']}>Título estilizado com CSS Modules.</h2>
        <h2 className='aula61_title'>Elemento com a mesma classe mas não acessa o estilo devido ao escopo. Só existe dentro do arquivo.</h2>
    </div>
  )
}

export default aula61