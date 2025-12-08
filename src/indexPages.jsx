import HomeComponent, {meta as homeMeta} from './pages/Home.jsx'; 
import NewLessonComponent from './pages/NewLesson.jsx';
import AppOldComponent from './AppOld.jsx';
import aula56, {meta as aula56Meta} from './pages/secao4/aula56.jsx';
import aula57, {meta as aula57Meta} from './pages/secao4/aula57.jsx';
import aula58, {meta as aula58Meta} from './pages/secao4/aula58.jsx';
import aula59, {meta as aula59Meta} from './pages/secao4/aula59.jsx';
import aula60, {meta as aula60Meta} from './pages/secao4/aula60.jsx';
import aula61, {meta as aula61Meta} from './pages/secao4/aula61.jsx';
import desafio5, {meta as desafio5Meta} from './pages/secao4/desafio5.jsx';
import aula64, {meta as aula64Meta} from './pages/secao5/aula64.jsx';
import aula65, {meta as aula65Meta} from './pages/secao5/aula65.jsx';
import aula66, {meta as aula66Meta} from './pages/secao5/aula66.jsx';
import aula67, {meta as aula67Meta} from './pages/secao5/aula67.jsx';
import aula68, {meta as aula68Meta} from './pages/secao5/aula68.jsx';
import aula69, {meta as aula69Meta} from './pages/secao5/aula69.jsx';
import aula70, {meta as aula70Meta} from './pages/secao5/aula70.jsx';
import aula71, {meta as aula71Meta} from './pages/secao5/aula71.jsx';
import aula72, {meta as aula72Meta} from './pages/secao5/aula72.jsx';
import NotFound, {meta as notFoundMeta} from './pages/NotFound.jsx';


export const ComponentMap = {
    Home: HomeComponent, // Mapeia 'Home' para o componente importado/simulado
    AppOld: AppOldComponent, // Mapeia 'AppOld' para o componente importado/simulado
    NotFound: NotFound, // Componente padrão para páginas não encontradas
    aula56: aula56, // Mapeia 'aula56' para o componente importado/simulado
    aula57: aula57, // Mapeia 'aula57' para o componente importado/simulado
    aula58: aula58, // Mapeia 'aula58' para o componente importado/simulado
    aula59: aula59, // Mapeia 'aula59' para o componente importado/simulado
    aula60: aula60, // Mapeia 'aula60' para o componente importado/simulado
    aula61: aula61, // Mapeia 'aula61' para o componente importado/simulado
    desafio5: desafio5, // Mapeia 'desafio5' para o componente importado/simulado
    aula64: aula64, // Mapeia 'aula64' para o componente importado/simulado
    aula65: aula65, // Mapeia 'aula65' para o componente importado/simulado
    aula66: aula66, // Mapeia 'aula66' para o componente importado/simulado
    aula67: aula67, // Mapeia 'aula67' para o componente importado/simulado
    aula68: aula68, // Mapeia 'aula68' para o componente importado/simulado
    aula69: aula69, // Mapeia 'aula69' para o componente importado/simulado
    aula70: aula70, // Mapeia 'aula70' para o componente importado/simulado
    aula71: aula71, // Mapeia 'aula71' para o componente importado/simulado
    aula72: aula72, // Mapeia 'aula72' para o componente importado/simulado
};
// 1. Definição das Páginas (PAGES_JSON)
export const PAGES_JSON = [
    homeMeta,
    { title: "Aulas", icon: "Folder", menu: true, children: [
        { title: "Seção 4", icon: "Folder", menu: true, children: [
            aula56Meta,
            aula57Meta,
            aula58Meta,
            aula59Meta,
            aula60Meta,
            aula61Meta,
            desafio5Meta,
        ]},
        { title: "Seção 5", icon: "Folder", menu: true, children: [
            aula64Meta,
            aula65Meta,
            aula66Meta,
            aula67Meta,
            aula68Meta,
            aula69Meta,
            aula70Meta,
            aula71Meta,
            aula72Meta,
        ]},
    
        { title: "Aulas Antigas", icon: "FileClock", menu: true, component: "AppOld", path: "/AppOld" },
    ]},
];

// 3. Função para obter o Menu Hierárquico (usado pelo Sidebar)
export function getMenuPages() {
    // Retorna a estrutura hierárquica diretamente
    const filteredPages = filterMenuRecursive(PAGES_JSON);
    return filteredPages;
}

function filterMenuRecursive(items) {
    // Usamos flatMap para filtrar e retornar o novo array, garantindo imutabilidade (sem modificar PAGES_JSON original)
    return items.flatMap(item => {
        // 1. Verifica a flag de visibilidade no menu
        if (item.menu !== true) {
            return []; // Ignora o item
        }

        const newItem = { ...item }; // Copia o objeto

        // 2. Se for uma pasta, processa os filhos recursivamente
        if (newItem.children) {
            // Opcional: Se a pasta não tiver filhos visíveis, você pode optar por escondê-la,
            // mas mantivemos o comportamento de mostrar a pasta se ela tiver menu: true.
            const hasVisibleChildren = newItem.children.length > 0;
            const isContainerOnly = !newItem.path; // Verifica se a pasta não tem uma rota própria
            if (isContainerOnly && !hasVisibleChildren) {
                return []; // Remove a pasta vazia
            }

            newItem.children = filterMenuRecursive(newItem.children);
            
        }

        return [newItem]; // Mantém o item (página ou pasta)
    });
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