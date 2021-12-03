import IRoute from "../interfaces/route";
import Login from "../pages/Login";
import SearchAndManage from "../pages/SearchAndManage";
import ErrorPage from "../pages/ErrorPage";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Login Page",
    component: Login,
  },
  {
    path: "/musics",
    name: "Musics Page",
    component: SearchAndManage,
  },
  {
    path: "*",
    name: "Error Page",
    component: ErrorPage,
  },
];

export default routes;
