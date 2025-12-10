import React, {useState, useEffect} from 'react'

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

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");

    // Aula 93 - Resgatando dados
    useEffect(() => {
        async function fetchData() {
            // Consome a url ( ela retorna em formato texto)
            const res = await fetch(url);
            // Converte para json
            const data = await res.json();
            setProducts(data);
        }

        fetchData();
    },[]);
    console.log(products);

    // Aula 94 - Adicionando dados
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(url);
        const products = await response.json();

        console.log("quantidade: " + products.length)

        // 2. Calcular o próximo ID
        const lastId = products.length > 0 
            ? Math.max(...products.map(p => typeof p.id === 'number' ? p.id : 0)) // Garante que o ID é numérico e pega o maior
            : 0;
        
        const nextId = lastId + 1;

        const product = {
            id: nextId,
            name,
            price
        };

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        console.log(product)

    }



  return (
    <div>
        <h1>Lista de Produtos</h1>
        <ul>
            {products.map((product) => ( 
                <li key={product.id}>{product.name} - R$: {product.price}</li>
            ))}
        </ul>
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
    </div>
  )
}

export default listaDeProdutos