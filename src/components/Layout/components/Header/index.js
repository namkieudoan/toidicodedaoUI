import classNames from "classnames/bind";
import { useState } from "react";
import {Link} from "react-router-dom";

import { SearchIcon } from "../../../icons";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {

    const [isActive ,setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
      };
    
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
            <div className={cx("search")} onClick={handleClick}><SearchIcon/></div>
            
            <div className={cx("search-container", `${isActive ? 'active-search': null}`)} >
                <form method="" action="">
                    <label htmlFor="search">
                        <input type={"search"} id="search"  name={"search"} placeholder={"Search..."}/>
                    </label>
                </form>
            </div>
        </div>
    </header>;
}

export default Header;
