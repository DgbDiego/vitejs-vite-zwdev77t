import React from 'react'

export const meta = { title: "404\nPágina Não Encontrada", icon: "AlertCircle", menu: false, component: "NotFound", path: "/pages/NotFound" }
const NotFound = () => {
  return (
    <div>
        <h1>404 - Página Não Encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <p>Verifique o URL ou volte para a página inicial.</p>
    </div>
  )
}

export default NotFound