import classNames from "classnames/bind";

import Header from "../components/Header";
import Secondary from "./Secondary";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";

const cx=classNames.bind(styles);

function DefaulLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx("container")}>
                <div className={cx("secondary")}>
                    <Secondary/>
                </div>
                <div className={cx("content")}>
                    <div className={cx('content-children')}>{children}</div>
                    <div className={cx("sidebar")}><Sidebar/></div>
                </div>
            </div>
        </div>
    )
}

export default DefaulLayout;