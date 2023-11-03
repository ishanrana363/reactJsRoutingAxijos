import {useNavigate} from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Contact page </h1>
            <button
                onClick={()=>{navigate("/product")}} >
                Go to Product page
            </button>
        </div>
    );
};

export default Contact;