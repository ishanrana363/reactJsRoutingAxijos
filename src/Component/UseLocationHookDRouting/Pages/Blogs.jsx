import {blogsData} from "./data.js";
import {useState} from "react";
import {Link} from "react-router-dom";

const Blogs = () => {
    const [blogs,setBlogs] = useState(blogsData);
    const truncateData = (str,num) =>{
        if (str.length>100){
            return(
                str.slice(0,num)+ "..."
            )
        }
    }
    return (
        <div>
            <section>
                {
                    blogs.map((blog)=>{
                        const {id,title,body} = blog
                        return(
                            <article key={id} >
                                <h1 className= "title" >
                                    {title}
                                </h1>
                                <p>
                                    {
                                        truncateData(body,100)
                                    }
                                </p>
                                <Link state={{id,title,body}} className="learn-more" to={title}>Learn More</Link>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;