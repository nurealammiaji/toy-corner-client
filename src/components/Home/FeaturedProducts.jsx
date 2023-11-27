import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import { useContext, useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeaturedProducts = () => {

    AOS.init();

    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://toy-corner-server-bd.vercel.app/products?limit=10')
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
        swipeToSlide: true,
    };

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
            <div data-aos="flip-right" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" >
                <br />
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-primary'>Featured Products</h2>
                    <p className='mt-3 text-lg'>Choose your product from featured products</p>
                </div>
                <br /><br />
                <Slider {...settings}>
                    {
                        (products) ?
                            products.map(product => <Slide key={product._id} product={product} handleWishlist={handleWishlist} handleAddToCart={handleAddToCart} ></Slide>) :
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

export default FeaturedProducts;