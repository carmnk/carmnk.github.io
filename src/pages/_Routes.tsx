import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { News } from "./References";

export const ROUTES = [
  { index: 0, path: "/", component: Home },
  { index: 1, path: "/dashboard", component: Dashboard },
  { index: 2, path: "/references", component: News },
];
export const SWIPEABLE_ROUTES = ROUTES.filter((route) => route.index !== -1);
