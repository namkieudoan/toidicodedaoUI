import classNames from "classnames/bind";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Blog.module.scss";
import axios from "axios";

const cx = classNames.bind(styles);



function Blog() {
    const [postList, setPostList] = useState([])

    useEffect(()=> { 
    async function getAllPost(){
        const res = await axios.get("http://localhost:8000/v1/post");
        return res;
    };
        getAllPost()
            .then((res)=> setPostList(res.data))
            .catch((err)=>console.log(err));
    },[]);

    return(
        <div className={cx("wrapper")} >
            
            {postList.map((post)=>{ 
            return <article className={cx("post")}>
                    <Link  className={cx("post-image")} to={post._id}>
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
                    </div>
                </article>
            })}
            

        </div>
    );
}

export default Blog;