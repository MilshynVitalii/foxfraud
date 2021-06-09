import {Home, Cart, Result, E404} from '@/pages';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart
  },
  {
    name: 'result',
    path: '/result',
    component: Result
  },
  {
    path: '**',
    component: E404
  }
];

const routesMap = {};

routes.forEach((r) => {
  if (r.hasOwnProperty('name')) {
    routesMap[r.name] = r.path;
  }
});

export {routesMap};
export default routes;
