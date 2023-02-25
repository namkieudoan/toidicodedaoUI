import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLayout from "./components/Layout/Admin/AdminLayout";
import DefaulLayout from "./components/Layout/DefaultLayout";
import { publicRoutes,priveRoutes } from "./routes";
 

function App() {
  document.title = "Từ coder đến developer - Tôi đi code dạo";
  return (
    <Router>
      <div className="App">
        <Routes>
           {publicRoutes.map((route,index)=>{

              // logic tải layout 
              let Layout = DefaulLayout;

              if (route.layout){
                Layout = route.layout;
              }
              else if (route.layout === null){
                Layout = Fragment;
              }

              const Page = route.component;
              return <Route key={index} path={route.path} element={ <Layout> <Page /> </Layout> }/>
           })}

           {priveRoutes.map((route,index)=>{

              // tải layout 
              let Layout = AdminLayout;

              const Page = route.component;
              return <Route key={index} path={route.path} element={ <Layout> <Page /> </Layout> }/>
           })}

            
        </Routes>

      </div>
    </Router>
  );
}

export default App;
