// layout
// import HeaderOnly from "../components/Layout/HeaderOnly";

//pages
import Coding from "../pages/Coding";
import Home from "../pages/Home";
import Post from "../components/Post";
import Something from "../pages/Something";
import Blog from "../pages/Blog";

//public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/blog/:id", component: Post },
    { path: "/blog", component: Blog },
    { path: "/something", component: Something },
    { path: "/coding", component: Coding },
    
];

//private router
const priveRoutes = [ ];

export { publicRoutes, priveRoutes };
