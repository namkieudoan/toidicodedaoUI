import classNames from "classnames/bind";
import {Link} from "react-router-dom";

import styles from "./Post.module.scss";

const cx = classNames.bind(styles);

function Post() {
    return<div className={cx("post")}>
            <h2>Post Name</h2>
            
            {/* <Link  className={cx("post-image")} to={post._id}>
                <img src={post.images[0]}  alt="img-post"/>
            </Link>
            <div className={cx("container")}>
                <div className={cx("post-header")}>
                    <span className={cx("entry-category")}>{post.category}</span>
                    <h2 className={cx("entry-title")}><Link to={post._id}>{post.title} </Link></h2>
                    <span className={cx("entry-meta")}>
                        <span> {post.publishedDate}</span>
                        <span> 62 comment </span>
                    </span>
                </div>
                <div className={cx("post-content")}>
                    <p>{post.content}</p>
                        
                </div>
                <div className={cx("post-direct")}>
                    <Link  className={cx("post-direct-link")} to={post._id}>- Continute Reading -</Link>
                    <span>{post.tags}</span>
                </div>
            </div> */}
        </div>
}

export default Post;