import classNames from "classnames/bind";
import {Link} from "react-router-dom";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);


function Home() {
    return(
        <div className={cx("wrapper")} >
            <div><Link>Xin Chào các bạn</Link></div>
        </div>
    );
}

export default Home;