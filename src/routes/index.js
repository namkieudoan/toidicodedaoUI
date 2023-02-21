import Coding from "../pages/Coding";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Something from "../pages/Something";

//public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/something", component: Something },
    { path: "/coding", component: Coding },
    { path: "/profile", component: Profile },
    
];

//private router
const priveRoutes = [ ];

export { publicRoutes, priveRoutes };
