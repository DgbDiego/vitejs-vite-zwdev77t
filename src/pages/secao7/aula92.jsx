import React from 'react'
import BorderBox from '../../components/BorderBox'
import TextBox from '../../components/TextBox'
import '../../index.css'

 export const meta = {
    title: "Aula 92\nuseEffect",
    icon: "FileText",
    menu: true,
    component: "aula92",
    path: "/pages/secao7/aula92",
};

const aula92 = () => {
  return (
    <div>
        <h1>Aula 92 - useEffect</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {`
                    • O <b>useEffect</b> faz com que determinada ação seja executada apenas uma vez;
                    • Isso é interessante pois os componentes estão sempre se <b>re-renderizando</b>, então precisamos ter <b>ações únicas</b> as vezes;
                    • O useEffect ainda possui um <b>array de dependências</b>, que deve conter os dados que ativem a execução da função de forma automática;
                    • O useEffect estará presente sempre nas <b>requisições assíncronas</b>!
                `}
            </TextBox>
        </BorderBox>
    </div>
  )
}

export default aula92