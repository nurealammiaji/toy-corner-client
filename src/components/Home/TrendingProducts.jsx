import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import TrendingSlide from "./TrendingSlide";
import AOS from 'aos';
import 'aos/dist/aos.css';


const TrendingProducts = () => {

    AOS.init();

    const [toys, setToys] = useState(null);

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        fetch('http://localhost:5000/products?limit=20')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" >
            <br />
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-primary'>Trending Products</h2>
                <p className='mt-3 text-lg'>Choose your product from trending products</p>
            </div>
            <br /><br />
            <Slider {...settings}>
                {
                    (toys) ?
                        toys.map(toy => <TrendingSlide key={toy._id} toy={toy}></TrendingSlide>) :
                        null
                }
            </Slider>
        </div>
    );
};

export default TrendingProducts;