import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";

const User = () => {
    const [params,setParams] = useSearchParams();
    const [name,setName] = useState('');
    const [age,setAge] = useState('')
    const onHandleSubmit = (e) =>{
        e.preventDefault();
        setParams({name:name,age:age})
    }
    return (
        <div>
            <form onSubmit={onHandleSubmit} >
                <input placeholder= "Name" type= "text" value={name} onChange={(e)=>setName(e.target.value)} /> <br/> <br/>
                <input placeholder= "Age" type= "text" value={age} onChange={(e)=>setAge(e.target.value)} /> <br/> <br/>
                <button type= "submit" >Submit</button>

            </form>
        </div>
    );
};

export default User;