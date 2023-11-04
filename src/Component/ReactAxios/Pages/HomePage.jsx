import React, {useState} from 'react';
import {readRequest} from "./apiRequest.js";

const HomePage = () => {
    const [data, setData] = useState([])
    const readData = async () =>{
        let res = await readRequest()
        setData(res)
    }
    return (
        <div>
            <button onClick={readData}>click</button>
            <ul>
                {
                    data.map((item,i)=>{
                        return(
                            <article key={i} >
                                <li>
                                    {item.ProductCode}
                                </li>
                            </article>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default HomePage;