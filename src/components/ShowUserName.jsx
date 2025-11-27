const ShowUserName = (props) => {
  return (
    <div>
      <div>
        Recurso do react pra passar valores de um componente pra outro, como
        declaração no momento da instância do componente. Nesse caso, 'props' me
        deixa acessar o parâmetro 'name' passado ao chamar o componente no
        App.tsx usando 'props.name'.
      </div>
      <b>Nome do usuário: {props.name} </b>
    </div>
  );
};

export default ShowUserName;
