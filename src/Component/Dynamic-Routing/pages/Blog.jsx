import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import {blogData} from "./data.js";
const Blog = () => {
    const {title} = useParams()
    const [bodyData,setBodyData] = useState("")
    useEffect(() => {
        const blogsData = blogData.filter((blog)=>blog.title===title)
        setBodyData(blogsData[0].body)
    }, []);
    return (
        <div>
            <h1>
                 {title} Page
            </h1>
            <p>
                {bodyData.slice(0,500)}
            </p>
            <p>
                {bodyData.slice(501,5000)}
            </p>
        </div>
    );
};

export default Blog;