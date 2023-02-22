import classNames from "classnames/bind";
import {Link} from "react-router-dom";

import { SearchIcon } from "../../../icons";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx("inner")}>
            <div className={cx("title")}> <Link to=""> Yêu Ngon 🐶!</Link> </div>
            <div className={cx("navigation")}>
                <ul className={cx("nav-list")}>
                    <li className={cx("nav-item")}><Link className={cx("nav-link")} to="">HOME</Link> </li>
                    <li className={cx("nav-item")}><Link className={cx("nav-link")} to="">CHUYỆN CODING</Link> </li>
                    <li className={cx("nav-item")}><Link className={cx("nav-link")} to="">CHUYỆN LINH TINH</Link> </li>
                    <li className={cx("nav-item")}><Link className={cx("nav-link")} to="">BÀI VIẾT HAY</Link> </li>
                    <li className={cx("nav-item")}><Link className={cx("nav-link")} to="">ABOUT ME</Link> </li>
                </ul>
            </div>
            <div className={cx("search")}><SearchIcon/></div>
        </div>
    </header>;
}

export default Header;