import config from '~/config';
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Activity from '~/pages/Activity';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
  { path: config.routes.activity, component: Activity },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.login, component: Login, layout: null },
];

export { publicRoutes };
