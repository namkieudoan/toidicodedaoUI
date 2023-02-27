import classNames from "classnames/bind";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";

import styles from "./Post.module.scss";

const cx = classNames.bind(styles);

function Post() {
    const navigate = useNavigate();
    const {post} = useContext(PostContext);
    console.log(post)

    return<div className={cx("post")}>
        <button className={cx("back-btn")} onClick={()=>navigate("/blog")}> Back </button>
            <article className={cx("post")} key={""}>
                    <div  className={cx("post-image")} to={""} >
                        <img src= {post.images} alt="img-post"/>
                    </div>
                    <div className={cx("container")}>
                        <div className={cx("post-header")}>
                            <span className={cx("entry-category")}>{post.categorys}</span>
                            <h2 className={cx("entry-title")}>{post.title}</h2>
                            <span className={cx("entry-meta")}>
                                <span> {post.publishedDate}</span>
                                <span> 62 comment </span>
                            </span>
                        </div>
                        <div className={cx("post-content")}>
                            {post.content }
                            {post.content }
                            {post.content }
                            {post.content }
                            {post.content }

                        </div>
                        <div className={cx("post-direct")}>
                            <span>javascript - reactjs - html</span>
                        </div>
                    </div>
                </article>
        </div>
}

export default Post;