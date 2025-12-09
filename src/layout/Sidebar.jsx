import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as LucideIcons from 'lucide-react';
import { getMenuPages } from "../indexPages";
import TextBox from "../components/TextBox";


const IconMap = {
    Home: LucideIcons.Home,
    FileText: LucideIcons.FileText,
    FolderClock: LucideIcons.FolderClock,
    FileClock: LucideIcons.FileClock,
    FileCheck: LucideIcons.FileCheck,
    Folder: LucideIcons.Folder,
    File: LucideIcons.File,
    ChevronDown: LucideIcons.ChevronDown,
    ChevronUp: LucideIcons.ChevronUp,

};

const SidebarItem = ({ page, depth = 0 }) => {
    // Se o item tem filhos, ele é uma "pasta" e precisa de estado para abrir/fechar
    const isFolder = page.children && page.children.length > 0;
    const [isOpen, setIsOpen] = useState(false);
    
    // Icone base para o item
    const IconComponent = IconMap[page.icon] || IconMap.File;
    // Icone de toggle para pastas
    const ToggleIcon = isOpen ? IconMap.ChevronUp : IconMap.ChevronDown;

    // Estilo de indentação
    const paddingLeft = `${10 + depth * 15}px`;

    // Renderiza um Item de Página clicável (sem children)
    if (!isFolder) {
        const textComponent = ""
        return (
            <li className="mb-2">
                <NavLink
                    to={page.path}
                    style={{ paddingLeft }}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <IconComponent size={20} />
                    <TextBox textAlign="left" >{`${page.title}`}</TextBox>
                </NavLink>
            </li>
        );
    }

    // Renderiza uma Pasta (com children)
    return (
        <li className="mb-2">
            <div onClick={() => setIsOpen(!isOpen)} className="sidebar-folder-link"style={{ paddingLeft }}
            >
                <div className="sidebar-folder-title">
                    <IconComponent size={20} />
                    {page.title}
                </div>
                {/* Ícone de seta para abrir/fechar */}
                <ToggleIcon size={16} />
            </div>
            
            {/* Lista de filhos recursiva */}
            {isOpen && (
                <ul className="pl-0 mt-1">
                    {page.children.map((child) => (
                        <SidebarItem key={child.path || child.title} page={child} depth={depth + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default function Sidebar() {
    const menuPages = getMenuPages();

    return (
        <aside className="app-sidebar">
            <div>
                Menu de Aulas
            </div>
            <ul>
                {menuPages.map((page) => (
                    <SidebarItem key={page.path || page.title} page={page} />
                ))}
            </ul>
        </aside>
    );
}