import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';


export default function AppLayout() {
  return (
    <div className="app-root">
      
      {/* Cabeçalho fixo */}
      <Header />

      <div className="app-body">

        {/* Menu lateral dinâmico */}
        <Sidebar />

        {/* Área principal onde as páginas são renderizadas */}
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
