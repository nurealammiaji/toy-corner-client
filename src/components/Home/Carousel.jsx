import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import { useEffect, useState } from "react";

const Carousel = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products?limit=10')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        // className: "center",
        // centerMode: true,
        // centerPadding: "50px",
        swipeToSlide: true,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    (products) ?
                        products.map(product => <Slide key={product._id} product={product}></Slide>) :
                        <div className="text-center">
                            <button className="text-red-600 btn btn-ghost">
                                <span className="loading loading-spinner"></span>
                                Loading
                            </button>
                        </div>
                }
            </Slider>
        </div>
    );
};

export default Carousel;