import React, {useState} from 'react'
import BorderBox from '../../components/BorderBox';
import TextBox from '../../components/TextBox';

export const meta = {
    title: "Aula 66\nGerenciamento de dados",
    icon: "FileText",
    menu: true,
    component: "aula66",
    path: "/pages/secao5/aula66",
};

const aula66 = () => {

    const [name, setName] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    console.log('Nome:', name);

  return (
    <div>
        <h1>Aula 66 - Gerenciamento de dados</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `   • O gerenciamento de dados em React envolve o uso de estado local, contexto e bibliotecas externas para manter e manipular dados de forma eficiente;
                    • O hook useState é usado para gerenciar o estado local dentro de componentes funcionais, permitindo que os componentes respondam a mudanças de dados;
                    • Para compartilhamento de estado entre múltiplos componentes, o Context API do React pode ser utilizado, evitando a necessidade de prop drilling;
                    • Bibliotecas como Redux ou MobX oferecem soluções mais robustas para gerenciamento de estado global em aplicações maiores, facilitando a manutenção e escalabilidade do código.`
                }
            </TextBox>
            </BorderBox>
        <hr />
        <form>
            <div className='column'>
                <label className='row'>
                    <span>Nome:</span>
                    <input type="text" name="nome" onChange={handleChangeName} />
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

export default aula66