import Articles from '../view/pages/Articles';
import Home from '../view/pages/Home';
import Contact from '../view/pages/Contact';
import PageNotFound from '../view/pages/PageNotFound';

export const ROUTES_MAP = [
  {path: '/', component: Home },
  {path: '/acticles', component: Articles },
  {path: '/contact', component: Contact },
  {path: '*', component: PageNotFound }
];
