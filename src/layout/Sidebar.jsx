import React from "react";
import { NavLink } from "react-router-dom";
import * as LucideIcons from 'lucide-react';
import { getMenuPages } from "../indexPages";

export default function Sidebar() {
  const menuPages = getMenuPages();

  const IconMap = {
    Home: LucideIcons.Home,
    FileText: LucideIcons.FileText,
    Archive: LucideIcons.FolderClock,
    FolderClock: LucideIcons.FolderClock,
    Folder: LucideIcons.Folder,
    File: LucideIcons.File,
  };

  return (
    <aside className="app-sidebar">
            <div> {/* Mantendo o estilo do título do menu */}
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
      </ul>
    </aside>
  );
}
