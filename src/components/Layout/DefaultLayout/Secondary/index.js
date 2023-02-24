import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Secondary.module.scss";

const cx=classNames.bind(styles);

function Secondary() {
    return <div className ={cx("wrapper")}>
        <div className={cx("desc")}>Lập trình viên giỏi không phải chỉ biết code</div>
        <button>Bài viết random</button>
        <div className={cx("social")}>
            <span>SOCIAL -LINKS</span>
            <ul className={cx("social-list")}>
                <li><Link to="" >Personal Page </Link></li>
                <li><Link to="" >LinkedIn </Link></li>
                <li><Link to="" >Facebook (Fan Page) </Link></li>
                <li><Link to="" >Facebook (Personal Page) </Link></li>
            </ul>
        </div>

        <div className={cx("user-online")}>
            <span>Online User: </span>
            <span className={cx("box-user")}>899</span>
        </div>

        <div className={cx("blog-stats")}>BLOGS STATS </div>
        <span className={cx("stats-count")}>12.999.999 lượt xem</span>

        <div className={cx("link")}>
            <h5>LIÊN KẾT</h5> 
            <p> <Link to="" >Codeholiguy </Link></p>
            <p> <Link to="" >Fullstack.edu.vn </Link></p>
            <p> <Link to="" >The Full Snack Developer </Link></p>
            <p> <Link to="" >Tiger Nguyễn - BrSE blog </Link></p>
        </div>
        <div className={cx("storage")}>
            <h4>Lưu Trữ</h4>
            <span> <Link to="">DECEMBER 2022 (1) </Link></span>
            <span> <Link to="">NOVEMBER 2022 (5) </Link></span>
            <span> <Link to="">FEBRULARY 2022 (6) </Link></span>
            <span> <Link to="">JUNE 2021 (1) </Link></span>
            <span> <Link to="">DECEMBER 2020 (10) </Link></span>
            <span> <Link to="">JULY 2019 (2) </Link></span>
            <span> <Link to="">OCTORBER (1) </Link></span>
            <span> <Link to="">DECEMBER (6) </Link></span>
            <span> <Link to="">JUNE 2022 (4) </Link></span>
            <span> <Link to="">JUNE 2022 (12) </Link></span>
            <span> <Link to="">JULY 2022 (2) </Link></span>
            <span> <Link to="">DECEMBER 2022 (1) </Link></span>
            <span> <Link to="">NOVEMBER 2022 (5) </Link></span>
            <span> <Link to="">FEBRULARY 2022 (6) </Link></span>
            <span> <Link to="">JUNE 2021 (1) </Link></span>
            <span> <Link to="">DECEMBER 2020 (10) </Link></span>
            <span> <Link to="">JULY 2019 (2) </Link></span>
            <span> <Link to="">OCTORBER 2019 (1) </Link></span>
            <span> <Link to="">DECEMBER 2018 (6) </Link></span>
            <span> <Link to="">FREBULARY 2022 (4) </Link></span>
            <span> <Link to="">JUNE (10) </Link></span>
            <span> <Link to="">JULY 2019(2) </Link></span>
            <span> <Link to="">OCTORBER 2019 (1) </Link></span>
            <span> <Link to="">DECEMBER 2018 (6) </Link></span>
            <span> <Link to="">DECEMBER 2022 (4) </Link></span>
            <span> <Link to="">JUNE 2022 (12) </Link></span>
            <span> <Link to="">SEPTEMBER 2022 (2) </Link></span>
        </div>

    </div>;
}

export default Secondary;
