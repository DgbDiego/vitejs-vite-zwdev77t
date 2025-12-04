import React from "react";
import { NavLink } from "react-router-dom";

export default function ListLink({ routes }) {
    const pages = routes
    .filter(r => r.meta?.menu)
    .sort((a,b) => (a.meta?.order ?? ));

    return (
        <ul>
          {pages.map((page) => (
            <li key={page.path}>
              <NavLink
                to={page.path}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                {page.meta.title}
              </NavLink>
            </li>
          ))}
        </ul>
      );
    }
