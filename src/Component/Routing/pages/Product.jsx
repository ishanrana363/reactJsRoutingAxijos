import {useNavigate} from "react-router-dom";

const Product = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Product page </h1>
            <button
                onClick={()=>{navigate("/")}} >
                Go to Home page
            </button>
        </div>
    );
};

export default Product;