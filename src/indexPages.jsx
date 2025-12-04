import pages from '~react-pages'
import HomeComponent from './pages/Home.jsx'; 
import NewLessonComponent from './pages/NewLesson.jsx';
import AppOldComponent from './AppOld.jsx';

export const ComponentMap = {
  Home: HomeComponent, // Mapeia 'Home' para o componente importado/simulado
  NewLesson: NewLessonComponent, // Mapeia 'NewLesson' para o componente importado/simulado
  AppOld: AppOldComponent, // Mapeia 'AppOld' para o componente importado/simulado
};

const PAGES = [
  { path: '/', element: 'Home', meta: { title: 'Início',icon: 'Home', menu: true, order: 0 } },
  { path: '/pages/NewLesson', element: 'NewLesson', meta:  { title: 'Nova Aula',icon: 'FileText', menu: true, order: 1 } },
  { path: '/AppOld', element: 'AppOld', meta:  { title: 'Aulas Antigas',icon: 'Archive', menu: true, order: 1 } },
];
// --- FIM SIMULAÇÃO ---

export const PAGES_JSON = [
  {title: "Início", icon: "Home",     menu: true, order: 0, component: "Home", path: "/",},
  {title: "Aulas",  icon: "Archive",  menu: true, order: 1,children: [
      {title: "Nova Aula",    icon: "File",       menu: true, component: "NewLesson", path: "/pages/NewLesson",},
      {title: "Aulas Antigas",icon: "FolderClock",menu: true, component: "AppOld",    path: "/AppOld",},
    ],
  },
];

export function getMenuPages() {
  // Filtra as páginas do menu e ordena.
  return PAGES;
    // .filter(page => page.meta?.menu)
    // .sort((a, b) => (a.meta.order ?? 999) - (b.meta.order ?? 999));
}

export const routes = PAGES;