import axios from "axios";
import { useEffect, useState } from "react";

function Coding() {
    const [postList, setPostList] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () => {
        let res = await axios.get("http://localhost:8000/v1/post");
        setPostList(res.data)
        };
        fetchPosts();
    },[])

    //post Api
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        PostApi(title,content);
    }
    const PostApi = async (title, content,images) => {
        let res = await axios.post("http://localhost:8000/v1/post", {
            title: title,
            content : content,
            images:images
        });
        console.log(res.data); 
        setPostList([res.data, ...postList]);
    }
    
    console.log(postList);
    
    const handleTitleChange = (e)=> {
        setTitle(e.target.value);
    }
    const handleContentChange = (e)=> {
        setContent(e.target.value);
    }
    const handleImagesChange = (e)=> {
        setImages(e.target.value);
    }
    return(
        <div>
            <h1>RUD axios Api</h1>
            <form onSubmit={handleSubmit}>
                <lable>
                    Title
                    <input type={"text"} name={"name"} onChange = {e => handleTitleChange(e)}/>
                </lable>

                <lable>
                    Content
                    <input type={"text"} name={"content"} onChange = {e => handleContentChange(e)}/>
                </lable>
                <lable>
                    Images
                    <input type={"url"} name={"images"} onChange = {e => handleImagesChange(e)}/>
                </lable>
                <button type={"submit"}>Add</button>
            </form>

            <ul>
                {postList.map((post,id) => <li key={id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

export default Coding;