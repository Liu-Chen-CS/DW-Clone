import "./hero.css";

const Hero:React.FC = () => {
    return(
        <div className="hero-container">
            <div className="headline-container">
                <div className="live-icon"><span>LIVE</span></div>
                <div className="headline">Israel launches massive strikes against Hezbollah in Beirut</div>
                <div className="headline2">
                    <ul>
                        <li>
                            <span>Conflicts</span>
                        </li>
                        <li>
                            <span>10 minutes ago</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Hero;