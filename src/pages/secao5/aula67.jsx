import React from 'react'
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'

export const meta = {
    title: "Aula 67\nAlteração de state inline",
    icon: "FileText",
    menu: true,
    component: "aula67",
    path: "/pages/secao5/aula67",
}

const aula67 = () => {

    const [email, setEmail] = React.useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    console.log('Email:', email);

  return (
    <div>
        <h1>Aula 67 - Alteração de state inline</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • A alteração de state inline em React refere-se à prática de atualizar o estado diretamente dentro do JSX, geralmente através de funções anônimas ou arrow functions;
                    • Embora essa abordagem possa ser conveniente para mudanças simples e rápidas, ela pode levar a problemas de desempenho, pois cria novas funções a cada renderização;
                    • É recomendado usar funções definidas fora do JSX para atualizações de estado mais complexas ou frequentes, garantindo melhor legibilidade e eficiência do código;
                    • O uso de hooks como useCallback pode ajudar a otimizar a performance ao evitar a recriação desnecessária de funções durante as renderizações.`
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

export default aula67