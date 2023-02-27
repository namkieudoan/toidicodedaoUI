import classNames from "classnames/bind";
import { useState } from "react";
import {Link} from "react-router-dom";

import { DropIcon, MenuIcon, SearchIcon } from "../../../icons";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {

    const [isActiveSearch ,setIsActiveSearch] = useState(false);
    const [isActiveMenu ,setIsActiveMenu] = useState(false);

    const handleClickSearch = event => {
            setIsActiveSearch(current => !current);
      };
    const handleClickMenu = event => {
        setIsActiveMenu(current => !current);
    }
    
    return <header className={cx('wrapper')}>
        <div className={cx("inner")}>
            <div className={cx("title")}> <Link to=""> Yêu Ngon 🐶! </Link> </div>
            
            {/* navbar */}
            <div className={cx("navigation" , `${isActiveMenu ? 'active-menu': null}`)}>
                <ul className={cx("nav-list")}>
                    <li className={cx("nav-item")}><Link className={cx("nav-link")} to="/">TRANG CHỦ</Link> </li>

                    <li className={cx("nav-item")}><Link className={cx("nav-link")} to="/blog">BLOG</Link> </li>

                    <li className={cx("nav-item")}>
                        <Link className={cx("nav-link")} to="/coding">
                            CHUYỆN CODING 
                            <span><DropIcon/></span>
                            <ul className={cx("dropdown-menu")}>
                                <li className={cx("dropdown-item")}><Link className={cx("dropdown-link")} to="laptrinh" >LẬP TRÌNH KHÔNG CODE </Link> </li>
                                <li className={cx("dropdown-item")}><Link className={cx("dropdown-link")} to="js-coban" >REACT JS CƠ BẢN</Link> </li>
                                <li className={cx("dropdown-item")}><Link className={cx("dropdown-link")} to="sida" >SERIES JAVASCRIPT SIDA </Link> </li>
                            </ul>
                        </Link> 
                    </li>
                    
                    <li className={cx("nav-item")}><Link className={cx("nav-link")} to="/post">BÀI VIẾT HAY</Link> </li>
                    <li className={cx("nav-item")}><Link className={cx("nav-link")} to="/profile">ABOUT ME</Link> </li>
                </ul>
            </div>
            
            {/* search */}
            <div className={cx("search")} onClick={handleClickSearch}><SearchIcon/></div>
            <div className={cx("search-container", `${isActiveSearch ? 'active-search': null}`)} >
                <form method="" action="">
                    <label htmlFor="search">
                        <input type={"search"} id="search"  name={"search"} placeholder={"Search..."}/>
                    </label>
                </form>
            </div>

            {/* Menu bar */}
            <div className={cx("menubar")} onClick={handleClickMenu}>
                <div className={cx("container-menu")}>
                    <MenuIcon/>
                </div>
            </div>
        </div>
    </header>;
}

export default Header;
