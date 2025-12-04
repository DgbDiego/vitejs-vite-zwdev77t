import React from "react";
import { NavLink } from "react-router-dom";
import * as LucideIcons from 'lucide-react';
import { getMenuPages } from "../indexPages";

export default function Sidebar() {
  const menuPages = getMenuPages();

  const IconMap = {
    Home: LucideIcons.Home,
    FileText: LucideIcons.FileText,
};

  return (
    <aside className="app-sidebar">
            <div className="text-white font-bold mb-6"> {/* Mantendo o estilo do título do menu */}
                Menu de Aulas
            </div>
      <ul>
        {menuPages.map((page) => {
          
          const IconComponent = IconMap[page.meta.icon] || LucideIcons.File;
          return (<li key={page.path}>
            <NavLink
              to={page.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <IconComponent size={20} className="mr-2" />
              {page.meta.title}
            </NavLink>
          </li>)
        })}
        
        {/* {pages.map((page) => (
          
          <li key={page.path}>
            <NavLink
              to={page.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {page.meta.title}
            </NavLink>
          </li>
        ))} */}
      </ul>
    </aside>
  );
}
