// layout

//pages
import Coding from "../pages/Coding";
import Home from "../pages/Home";
import Post from "../components/Post";
import Blog from "../pages/Blog";
import HomeAdmin from "../components/Layout/Admin/pages/HomeAdmin";
import Notfoud from "../pages/Notfound";

//public routes
const publicRoutes = [
    { path: "/blog/:id", component: Post },
    { path: "/blog", component: Blog },
    { path: "/coding", component: Coding },
    { path: "/", component: Home },
    { path: "/:id", component: Notfoud },
    
];

//private router
const priveRoutes = [
    { path: "/admin", component: HomeAdmin },
];

export { publicRoutes, priveRoutes };
