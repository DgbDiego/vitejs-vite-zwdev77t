import React from "react";
import { NavLink } from "react-router-dom";
import * as LucideIcons from 'lucide-react';
import { getMenuPages } from "../indexPages";

export default function Sidebar() {
  const pages = getMenuPages();

  return (
    <aside className="app-sidebar">
      <ul>

        {pages.map((page) => (
          <li key={page.path}>
            <NavLink
              to={page.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {page.meta.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
