import { useEffect } from "react";
import Carousel from "./Carousel";
import { useState } from "react";

const Home = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {
                (products) ?
                    <Carousel products={products.slice(0, 5)}></Carousel> :
                    <div className="text-center">
                        <button className="text-red-600 btn btn-ghost">
                            <span className="loading loading-spinner"></span>
                            Loading
                        </button>
                    </div>
            }
        </div>
    );
};

export default Home;