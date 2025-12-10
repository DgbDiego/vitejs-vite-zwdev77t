import React from 'react'
import BorderBox from '../../components/BorderBox';
import TextBox from '../../components/TextBox';

 export const meta = {
    title: "Aula 91\nJSON server",
    icon: "FileText",
    menu: true,
    component: "aula91",
    path: "/pages/secao7/aula91",
};

const aula91 = () => {
  return (
    <div>
        <h1>Aula 91 - JSON server</h1>
        <BorderBox maxWidth="70%">
            <TextBox>
                {
                `
                    • O <b>JSON server</b> é um pacote npm;
                    • Ele <b>simula uma API</b>, e isso nos possibilita fazer requisições HTTP;
                    • Vamos aprender a <b>integrar este recurso com o React</b>;
                    • Podemos entender isso como uma etapa de preparação para API reais;
                    • Ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no back-end;
                    • Vamos criar um projeto e instalar o JSON server;
                `}
            </TextBox>
        </BorderBox>
        <hr/>
        <h1>Criando projeto com JSON Server</h1>
        <TextBox maxWidth="70%">
            {`
                Um projeto foi criado usando a biblioteca JSON Server.
                
                1. Foi criado um novo projeto usando o comando
                <b>npx create-react-app httpreact</b>


                2. Para esse projeto, foi importada a seguinte pacote
                <b>npm i json-server</b>
                Ele é um pacote de API, onde vamos disponibilizar um arquivo JSON para consumo quando executarmos o projeto.
                
                Para executar o projeto e abrir a Home, use o seguinte comando
                <b>npm start</b>


                3. Como a idéia é disponibilizar uma base de dados, foi criado um arquivo <i>db.json</i> no caminho <i>"./data/db.json"</i>.
                Inicialmente, somente esse arquivo será disponibilizado.
                Pra isso, inclua a seguinte entrada nos scripts do <i>packages.json</i>

                <code>
                  "scripts": {
                    "start": "react-scripts start",
                    "build": "react-scripts build",
                    "test": "react-scripts test",
                    "eject": "react-scripts eject",
                    <b>"server": "json-server --watch data/db.json"</b>
                },
                </code>

                Agora, pra disponibilizar a lista como endpoint, basta rodar o seguinte comando <b>EM UM NOVO TERMINAL</b>:
                
                <b>npm run server</b>
                
                <b>IMPORTANTE</b>
                <i>Obs.: Como cada projeto será executado em um terminal, o próprio React lida com as execuções e determina quais portas serão usadas. Com o primeiro projeto em execução, ao iniciar o segundo o sistema pergunta se pode abrir em outra porta. Só confirmar.</i>

                4. Ao executar a nossa minimal API, um novo endereço é disponibilizado onde é possível consumir os dados. No exemplo foi criado o seguinte link:
                <b>http://localhost:3000/products</b>: Retorna a lisa de todos os produtos da base;
                <b>http://localhost:3000/products/1</b>: Retorna o item com id 1;

                <b><i>--Extra--</i></b>

                Para iniciar os 2 ao mesmo tempo, instalei no projeto o pacote <b>concurrently</b>.
                <b>npm i concurrently</b>

                e implementar nos scripts a seguinte linha:
                <code>
                "scripts": {
                <b>"start": "react-scripts start --port 3000",</b>
                "build": "react-scripts build",
                "test": "react-scripts test",
                "eject": "react-scripts eject",
                <b>"server": "json-server --watch data/db.json --port 3001"</b>
                <b>"api": "concurrently \"npm run start\" \"npm run server\""</b>
                },
                </code>

                <b>Alterações:
                -- Inclusao da porta no script 'start';
                -- Inclusao da porta no script 'server';
                -- Inclusao do novo script <i>api</i>.
                </b>

            `}
        </TextBox>

    </div>
  )
}

export default aula91