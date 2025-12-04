import React from "react";
import App from "../App";
import { routes, getMenuPages } from '../indexPages';

export const meta = {
    title: 'Home',
    menu: true,
    order: 1,
  };

  export default function Home() {
    return (
      <div>
        <h1>Página Inicial</h1>
      </div>
    );
  }