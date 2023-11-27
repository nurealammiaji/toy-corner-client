import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabData from './TabData';
import { Hourglass } from 'react-loader-spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const ProductTabs = () => {

    AOS.init();

    const { user } = useContext(AuthContext);
    const [tabIndex, setTabIndex] = useState(0);
    const [products, setProducts] = useState(null);
    const [category, setCategory] = useState("Plastic");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://toy-corner-server-bd.vercel.app/products/categories/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [category])

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

    const tabPanel = <>
        <TabPanel>
            {
                (products) ?
                    <div className='grid gap-5 md:grid-cols-3'>
                        {
                            products.map(product => <TabData key={product._id} product={product} handleAddToCart={handleAddToCart} handleWishlist={handleWishlist} ></TabData>)
                        }
                    </div> :
                    <>
                        <br /><br />
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
        </TabPanel>
    </>

    return (
        <div>
            <ToastContainer />
            <div data-aos="zoom-out" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" >
                <br />
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-primary'>Shop by Category</h2>
                    <p className='mt-3 text-lg'>Choose your product by your desire categories</p>
                </div>
                <br /><br />
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <div className='text-center'>
                            <Tab onClick={() => setCategory("Plastic")}><h5 className='font-semibold'>Plastic</h5></Tab>
                            <Tab onClick={() => setCategory("Metal")}><h5 className='font-semibold'>Metal</h5></Tab>
                            <Tab onClick={() => setCategory("Alloy")}><h5 className='font-semibold'>Alloy</h5></Tab>
                            <Tab onClick={() => setCategory("Composite")}><h5 className='font-semibold'>Composite</h5></Tab>
                        </div>
                    </TabList>
                    <br />
                    {
                        tabPanel
                    }
                    {
                        tabPanel
                    }
                    {
                        tabPanel
                    }
                    {
                        tabPanel
                    }
                </Tabs>
            </div>
        </div>
    );
};

export default ProductTabs;