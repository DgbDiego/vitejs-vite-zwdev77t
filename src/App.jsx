import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import { routes, getMenuPages, ComponentMap } from './indexPages';

export default function App() {
  const menuPages = getMenuPages();

  return (
    <BrowserRouter>
      <Routes>

        {/* Rota pai SEM path — Layout global. Renderiza AppLayout, que contém o Sidebar e o Outlet. */}
        <Route path="/" element={<AppLayout menuPages={menuPages} />}>
          
          {/* Rotas de Conteúdo */}
          {routes.map(page => {
            // Buscamos a referência à função do componente (e.g., HomeComponent)
            const Component = ComponentMap[page.element];

            // É crucial garantir que o componente exista antes de tentar renderizá-lo
            if (!Component) {
                // Caso não encontre, usaremos o fallback 404
                return null;
            }
            
            return (
              <Route
                key={page.path}
                // Rotas aninhadas: a rota index (path="/") usa path="", e outras rotas removem a barra inicial.
                path={page.path === "/" ? "" : page.path.replace(/^\//, "")}
                // Instanciamos o componente como um elemento JSX: <Component />
                element={<Component />} 
              />
            );
          })}

          {/* fallback: A rota "Página não encontrada" precisa estar aninhada para aparecer dentro do AppLayout */}
          <Route path="*" element={<ComponentMap.NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}