import classNames from "classnames/bind";

import styles from "./AdminLayout.module.scss";

const cx=classNames.bind(styles);

function AdminLayout({children}) {
    return (
        <div className={cx("wrapper")}>
            <h3>DASHBOARD</h3>
            <div className={cx("container")}>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;