import "./header.css";
import {Link, NavLink, useNavigate} from "react-router-dom";
import dwLogo from "../../assets/dwLogo.png";
import 'remixicon/fonts/remixicon.css'

const Header: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="header-container">
            <div className="flag-wrapper">
                <div className="flag-sectoion1"></div>
                <div className="flag-sectoion2"></div>
                <div className="flag-sectoion3"></div>
            </div>
            <div className="menu-wrapper">
                <div className="left">
                    <NavLink to={"/home"}><img src={dwLogo}/></NavLink>
                </div>
                <div className="middle">
                    <ul>
                        <span className="title1">IM FOKUS</span>
                        <li className="title2"><Link to="">Flucht und Migration</Link></li>
                        <li className="title3"><Link to="">Ukraine-Krieg</Link></li>
                        <li className="title4"><Link to="">Israel-Hamas-Krieg</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <Link to="">
                                <i className="ri-video-on-fill"></i>
                                <span>Neueste Videos</span>
                            </Link>
                        </li>
                        <li>
                            <i className="ri-global-line"></i>
                            <span onClick={()=>{navigate("/news")}}>Admin</span>
                        </li>
                        <li>
                            <i className="ri-menu-line"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="add-news-hover"
                 onClick={():void => navigate("/news/new")}
            >
                <div><i className="ri-add-line"></i></div>
                <div>Add News</div>
            </div>
        </div>
    );
};
export default Header;