import pages from '~react-pages'
import HomeComponent from './pages/Home.jsx'; 
import NewLessonComponent from './pages/NewLesson.jsx';

const PAGES = [
  { path: '/', element: 'Home', meta: { title: 'Início',icon: 'Home', menu: true, order: 0 } },
  { path: '/pages/NewLesson', element: 'NewLesson', meta: { title: '📝 Nova Aula', menu: true, order: 1 } },
];
// --- FIM SIMULAÇÃO ---

export function getMenuPages() {
  // Filtra as páginas do menu e ordena.
  return PAGES
    .filter(page => page.meta?.menu)
    .sort((a, b) => (a.meta.order ?? 999) - (b.meta.order ?? 999));
}

export const routes = PAGES;
export const ComponentMap = {
  Home: HomeComponent, // Mapeia 'Home' para o componente importado/simulado
  NewLesson: NewLessonComponent, // Mapeia 'NewLesson' para o componente importado/simulado
};