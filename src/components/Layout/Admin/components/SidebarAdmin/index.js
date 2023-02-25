import styles from "./SidebarAdmin.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SidebarAdmin() {
    return <div className={cx("wrapper")}>
        <div className={cx("category-list")}>
            <h3>Category</h3>
            <ul>
                <li>Create</li>
                <li>Update</li>
            </ul>
        </div>
        <div className={cx("post-list")}>
            <h3>Post</h3>
            <ul>
                <li>Create</li>
                <li>Update</li>
            </ul>
        </div>
    </div>
}

export default SidebarAdmin;