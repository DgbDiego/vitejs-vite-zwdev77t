import {useState, useEffect} from 'react'

// Aula 96 - Custom Hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    // Aula 97 - Refatorando Post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // Aula 98 - Loading
    const [loading, setLoading] = useState(false)


    const httpConfig = (data, method) => {
        setConfig({
            method,
             headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
      })

      setMethod(method);
    }
  

  useEffect(() => {
    const fetchData = async () => {

        setLoading(true)

        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false)

    } 
    fetchData();
  },[url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
        if(method === "POST"){
            let fetchOptions = [url, config]
            const res = await fetch(...fetchOptions)
            const json = await res.json();
            setCallFetch(json);
        }
    }

    httpRequest();
  },[config,method,url])

  return {data, httpConfig, loading};
}