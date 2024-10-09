import "./layout.scss";
import {Outlet} from "react-router-dom";
import Header from "../../component/header/Header.tsx";

const Layout:React.FC = ()=>{

    return(
        <div className="layout-wrapper">
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
            <footer>asdsdadsadsadasda</footer>
        </div>
    );
};
export default Layout;