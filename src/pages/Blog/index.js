import classNames from "classnames/bind";
import axios from "axios";
import {Link} from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import styles from "./Blog.module.scss";
import { PostContext } from "../../contexts/PostContext";
import { LoadingIcon } from "../../components/icons";

const cx = classNames.bind(styles);

function Blog() {
    const {getId} = useContext(PostContext);
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    //Get List Post
    useEffect(()=> {
        setLoading(true); 
    async function getAllPost(){
        const res = await axios.get("http://localhost:8000/v1/post");
        return res;
    };
        getAllPost()
            .then((res)=> {
                setPostList(res.data);
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            });
    },[]);

    //handle to post detail
    const handlePost = (id) =>{
        getId(id); 
        window.scrollTo(0,0)
    }

    return(
        <div className={cx("wrapper")} >

            {loading && <div className={cx("loading")}><LoadingIcon/></div>}

            {postList.map((post,id)=>{ 
            return( 
                <article className={cx("post")} key={id} >
                    <Link  className={cx("post-image")} to={post._id} >
                        <img src={post.images[0]}  alt="img-post" onClick={()=> handlePost(post._id)}/>
                    </Link>
                    <div className={cx("container")}>
                        <div className={cx("post-header")}>
                            <span className={cx("entry-category")}>{post.category}</span>
                            <h2 className={cx("entry-title")}><Link to={post._id} onClick={()=> handlePost(post._id)}>{post.title}</Link></h2>
                            <span className={cx("entry-meta")}>
                                <span> {post.publishedDate}</span>
                                <span> 62 comment </span>
                            </span>
                        </div>
                        <div className={cx("post-content")}>
                            <p>{post.content}</p>
                                
                        </div>
                        <div className={cx("post-direct")}>
                            <Link  className={cx("post-direct-link")} to={post._id} onClick={()=> handlePost(post._id)}>- Continute Reading -</Link>
                            <span>{post.tags}</span>
                        </div>
                    </div>
                </article>
                )

            })}
            

        </div>
    );
}

export default Blog;