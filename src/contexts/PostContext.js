import axios from "axios";
import { createContext,useEffect,useState } from "react";
const PostContext= createContext();

function PostProvider({children}) {
    const [postId, setPostId] = useState("");
    const [post,setPost] = useState({});
    
    const getId = (data)=>{
        setPostId(data);
    };

    //Get a post
    useEffect(()=>{
        async function getPost(){
            const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/v1/post/${postId}`);
            return res;
        };
            getPost()
                .then((res)=> setPost(res.data)) 
                .catch((error)=>console.log(error));
        
    },[postId])

    return <PostContext.Provider value={{getId , post}}>
        {children}
    </PostContext.Provider>;
}

export {PostProvider,PostContext};