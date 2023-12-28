import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { HtmlEditor } from "./HtmlEditor";
import { News } from "./News";

export const ROUTES = [
  { index: 0, path: "/", component: Home },
  { index: 1, path: "/dashboard", component: Dashboard },
  { index: 2, path: "/news", component: News },
  { index: -1, path: "/html_editor", component: HtmlEditor },
];
export const SWIPEABLE_ROUTES = ROUTES.filter((route) => route.index !== -1);
