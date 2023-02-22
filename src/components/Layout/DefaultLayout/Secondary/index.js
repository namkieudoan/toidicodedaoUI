import classNames from "classnames/bind";
import styles from "./Secondary.module.scss";

const cx=classNames.bind(styles);

function Secondary() {
    return <div className ={cx("wrapper")}>Secondary</div>;
}

export default Secondary;