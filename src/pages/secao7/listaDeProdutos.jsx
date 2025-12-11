import React, {useState, useEffect} from 'react'
import {useFetch} from '../../hooks/useFetch'
import LoadingPanel, {vis } from '../../components/loadingPanel';
 export const meta = {
    title: "Lista de Produtos",
    icon: "FileCheck",
    menu: true,
    component: "listaDeProdutos",
    path: "/pages/secao7/listaDeProdutos",
};

export const url = "http://localhost:3001/products"

const listaDeProdutos = () => {

    const [products, setProducts] = useState([]);

    // Aula 96 - Custom Hook
    const { data: items, httpConfig, loading } = useFetch(url);

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");

    // Aula 93 - Resgatando dados
    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         setProducts(data);
    //     }

    //     fetchData();
    // },[]);

    // Aula 94 - Adicionando dados
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Calcular o próximo ID
        // const response = await fetch(url);
        // const products = await response.json();

        // console.log("quantidade: " + products.length)

        // const lastId = products.length > 0 
        //     ? Math.max(...products.map(p => typeof p.id === 'number' ? p.id : 0)) // Garante que o ID é numérico e pega o maior
        //     : 0;
        
        // const nextId = lastId + 1;

        const product = {
            // id: nextId,
            name,
            price
        };

        // Aula 97 - Refatorando Post
        // const res = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(product)
        // });

        // const addedProduct = await res.json();

        // Aula 95 - Carregamento dinamico
        // setProducts((prevProducts) => [...prevProducts,addedProduct]);

        httpConfig(product, "POST")

        resetForm();
        alert("Produto inserido com sucesso")

    }
    const [showInfoPanel, setShowInfoPanel] = useState(false)

    const showMessage = ({sec}) => {

        const ms = sec * 1000;
        setShowInfoPanel(true);
        
        setTimeout(() => {
            setShowInfoPanel(false);
        },ms);
        
        console.log(teste)
    };

    const showPanel = () => {
        LoadingPanel(message= "teste", enabled=true)
    }

    const resetForm = () => {
        setName("")
        setPrice("")
    }

  return (
      <div>
        <h1>Lista de Produtos</h1>
        {/* Aula 98 - Loading */}
        <button onClick={() => showPanel()}></button>
        {loading && <p>Carregando...</p> }
        {!loading && <ul>
            {items && items.map((product) => ( 
                <li key={product.id}>[{product.id}] -- {product.name} - R$: {product.price}</li>
            ))}
        </ul>}
        <div className="add-product">
            <form onSubmit={handleSubmit}>
                <h2>Incluir novo produto</h2>
                <label htmlFor="name">
                    Nome:
                    <input type="text" onChange={(e => setName(e.target.value))} name='name' value={name} placeholder='Nome do produto'/>
                </label>
                <label htmlFor="price">
                    Valor:
                    <input type="number" onChange={(e) => setPrice(e.target.value)} name='price' value={price} placeholder='Valor'/>
                </label>
                <input type="submit" value="Criar" />
            </form>
        </div>
        <LoadingPanel /> 
    </div>
  )
}

export default listaDeProdutos