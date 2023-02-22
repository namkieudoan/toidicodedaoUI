import Header from "../components/Header";
import Secondary from "./Secondary";
import Sidebar from "./Sidebar";

function DefaulLayout({children}) {
    return (
        <div className="layout">
            <Header/>
            <div className="container">
                <Secondary/>
                {children}
                <Sidebar/>
            </div>
        </div>
    )
}

export default DefaulLayout;