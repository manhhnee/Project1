import config from '~/config';
import Home from '~/pages/Home';
import Search from '~/pages/Search';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
];

export { publicRoutes };
