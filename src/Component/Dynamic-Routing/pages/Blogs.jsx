import {useState} from "react";
import {blogData} from "./data.js";
import {Link} from "react-router-dom";
const Blogs = () => {
    const [blogs,setBlogs] = useState(blogData)
    const truncateString = (str,num) =>{
        if(str.length>100){
            return(
                str.slice(0,num) + "..."
            )
        }
    }
    return (
        <div>
            <h1> Blog page</h1>
            <section>
                {
                    blogs.map((blog)=>{
                        const {id,title,body} = blog
                        return(
                            <article key= {id} >
                                <h3 className= "title" >
                                    {title}
                                </h3>
                                <p className="body" >
                                    {
                                        truncateString(body,100)
                                    }
                                </p>
                                <Link className= "learn-more" to={title}>Learn more</Link>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;