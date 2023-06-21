import Greetings from "../components/Greetings";
import { CABoard } from "../pages/CABoard";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Notification from "../pages/Notification";
const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path: "/CABoard",
    exact: true,
    name: "CA Board",
    component: CABoard,
  },
  {
    path: "/notification",
    exact: true,
    name: "Quality Notification",
    component: Notification,
  },
  {
    path: "/greetings",
    exact: true,
    name: "Greetings",
    component: Greetings,
  },
  {
    path: "/contacts",
    exact: true,
    name: "Contact",
    component: Contact,
  },
];

export default routes;
