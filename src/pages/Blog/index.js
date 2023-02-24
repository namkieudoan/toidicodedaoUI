import classNames from "classnames/bind";
import {Link} from "react-router-dom";

import styles from "./Blog.module.scss";

const cx = classNames.bind(styles);


function Blog(

) {
    return(
        <div className={cx("wrapper")} >
            
            <article className={cx("post")}>
                <Link to="/" className={cx("post-image")}>
                    <img src="https://toidicodedao.files.wordpress.com/2021/02/img_f0046f5ad169-1-e1612968404807.jpeg?w=672&h=372&crop=1"  alt="img-post"/>
                </Link>
                <div className={cx("container")}>
                    <div className={cx("post-header")}>
                        <span className={cx("entry-category")}>CHUYỆN CODING, CHUYỆN NGHỀ NGHIỆP</span>
                        <h2 className={cx("entry-title")}>REVIEW NHẸ CÁC NGÔN NGỮ, CÔNG NGHỆ, FRAMEWORK MÀ MÌNH ĐÃ VÀ ĐANG DÙNG KIẾM CƠM - PHẦN CUỐI</h2>
                        <span className={cx("entry-meta")}>
                            <span> 24/4/2023</span>
                            <span> 62 comment </span>
                        </span>
                    </div>
                    <div className={cx("post-content")}>
                        <p>Hiện tại, mình đang làm tại SwatMobility. Team dev cũng nho nhỏ (tổng cộng tầm 8-10 người), nhưng anh em làm việc rất vui và chuyên nghiệp  </p>
                        <p>Hiện tại, mình đang làm tại SwatMobility. Team dev cũng nho nhỏ (tổng cộng tầm 8-10 người), nhưng anh em làm việc rất vui và chuyên nghiệp  </p>
                        <p>Hiện tại, mình đang làm tại SwatMobility. Team dev cũng nho nhỏ (tổng cộng tầm 8-10 người), nhưng anh em làm việc rất vui và chuyên nghiệp  </p>
                            
                    </div>
                    <div className={cx("post-direct")}>
                        <Link  className={cx("post-direct-link")} to={""}>--- continute reading ---</Link>
                        <span>tag01 tag02 tag03</span>
                    </div>
                </div>

            </article>

        </div>
    );
}

export default Blog;