import pages from '~react-pages'
import HomeComponent from './pages/Home.jsx'; 
import NewLessonComponent from './pages/NewLesson.jsx';
import AppOldComponent from './AppOld.jsx';
import aula56 from './pages/secao4/aula56.jsx';

export const ComponentMap = {
  Home: HomeComponent, // Mapeia 'Home' para o componente importado/simulado
  AppOld: AppOldComponent, // Mapeia 'AppOld' para o componente importado/simulado
  aula56: aula56, // Mapeia 'aula56' para o componente importado/simulado
};
// 1. Definição das Páginas (PAGES_JSON)
export const PAGES_JSON = [
    { title: "Início", icon: "Home", menu: true, order: 0, component: "Home", path: "/" },
    { title: "Aulas", icon: "Folder", menu: true,order: 1,children: [
          { title: "Seção 4", icon: "Folder", menu: true, children: [
              { title: "Aula 56 - CSS global", icon: "FileText", menu: true, component: "aula56", path: "/pages/secao4/aula56" },
          ]},
          { title: "Aulas Antigas", icon: "FileClock", menu: true, component: "AppOld", path: "/AppOld" },
        ],
    },
];

// 3. Função para obter o Menu Hierárquico (usado pelo Sidebar)
export function getMenuPages() {
    // Retorna a estrutura hierárquica diretamente
    return PAGES_JSON.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

// 4. Função para achatar a estrutura para o Router (usado pelo App.jsx)
function flattenRoutes(pages, routes = []) {
    pages.forEach(page => {
        if (page.component && page.path) {
            routes.push({
                path: page.path,
                element: page.component, // Nome da chave no ComponentMap
            });
        }
        if (page.children) {
            flattenRoutes(page.children, routes);
        }
    });
    return routes;
}

export const routes = flattenRoutes(PAGES_JSON);

// export function getMenuPages() {
//   // Filtra as páginas do menu e ordena.
//   return PAGES
//     .filter(page => page.meta?.menu)
//     .sort((a, b) => (a.meta.order ?? 999) - (b.meta.order ?? 999));
// }

// export const routes = PAGES;