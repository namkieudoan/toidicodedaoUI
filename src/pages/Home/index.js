import classNames from "classnames/bind";
import {Link} from "react-router-dom";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);


function Home() {
    return(
        <div className={cx("wrapper")} >
            <h1>🐶 Yêu Ngon 🐶! </h1>
            <br/>
            <span>Clone by @TOIDICODEDAO.COM 💚</span>
            <div>LET'S GET STARTED 🚀</div>
        </div>
    );
}

export default Home;