import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import TrendingSlide from "./TrendingSlide";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Hourglass } from "react-loader-spinner";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const TrendingProducts = () => {

    AOS.init();

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState(null);
    const navigate = useNavigate();

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
        fetch('https://toy-corner-server-bd.vercel.app/products')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleWishlist = () => {
        if (!user) {
            toast("Please Login First !!", {
                position: toast.POSITION.TOP_CENTER
            });
            navigate("/login", { replace: true })
        }
        else {
            toast("Product added to the wishlist !!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    const handleAddToCart = () => {
        if (!user) {
            toast("Please Login First !!", {
                position: toast.POSITION.TOP_CENTER
            });
            navigate("/login", { replace: true })
        }
        else {
            toast("Product added to the cart !!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <div>
            <ToastContainer />
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
                            toys.map(toy => <TrendingSlide key={toy._id} toy={toy} handleAddToCart={handleAddToCart} handleWishlist={handleWishlist} ></TrendingSlide>) :
                            <>
                                <div className="flex items-center justify-center">
                                    <Hourglass
                                        visible={true}
                                        height="20"
                                        width="20"
                                        ariaLabel="hourglass-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        colors={['navy', 'crimson']}
                                    /><p className='ml-3 text-lg font-medium text-red-700'>Loading ...</p>
                                </div>
                            </>
                    }
                </Slider>
            </div>
        </div>
    );
};

export default TrendingProducts;