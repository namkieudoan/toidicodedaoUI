import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaulLayout({children}) {
    return (
        <div className="layout">
            <Header/>
            <div className="container">
                {children}
                <Sidebar/>
            </div>
        </div>
    )
}

export default DefaulLayout;