import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);


function Home() {
    return(
        <div className={cx("wrapper")} >
            <h1>🐶 Tôi Đi Code Dạo 🐶! </h1>
            <br/>
            <div className={cx("start")}><Link to={"/blog"}>LET'S GET STARTED 🚀</Link></div>
            <span>Clone by @TOIDICODEDAO.COM 💚</span>
        </div>
    );
}

export default Home;