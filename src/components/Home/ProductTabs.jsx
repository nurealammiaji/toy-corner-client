import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabData from './TabData';

const ProductTabs = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [products, setProducts] = useState(null);
    const [category, setCategory] = useState("Plastic");

    useEffect(() => {
        fetch(`http://localhost:5000/products/categories/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [category])

    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab onClick={() => setCategory("Plastic")}>Plastic</Tab>
                    <Tab onClick={() => setCategory("Metal")}>Metal</Tab>
                    <Tab onClick={() => setCategory("Alloy")}>Alloy</Tab>
                    <Tab onClick={() => setCategory("Composite")}>Composite</Tab>
                </TabList>
                <TabPanel>
                    {
                        (products) ?
                            <div className='grid gap-5 md:grid-cols-3'>
                                {
                                    products.map(product => <TabData key={product._id} product={product}></TabData>)
                                }
                            </div> :
                            <div className="text-center">
                                <button className="text-red-600 btn btn-ghost">
                                    <span className="loading loading-spinner"></span>
                                    Loading
                                </button>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        (products) ?
                            <div className='grid gap-5 md:grid-cols-3'>
                                {
                                    products.map(product => <TabData key={product._id} product={product}></TabData>)
                                }
                            </div> :
                            <div className="text-center">
                                <button className="text-red-600 btn btn-ghost">
                                    <span className="loading loading-spinner"></span>
                                    Loading
                                </button>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        (products) ?
                            <div className='grid gap-5 md:grid-cols-3'>
                                {
                                    products.map(product => <TabData key={product._id} product={product}></TabData>)
                                }
                            </div> :
                            <div className="text-center">
                                <button className="text-red-600 btn btn-ghost">
                                    <span className="loading loading-spinner"></span>
                                    Loading
                                </button>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        (products) ?
                            <div className='grid gap-5 md:grid-cols-3'>
                                {
                                    products.map(product => <TabData key={product._id} product={product}></TabData>)
                                }
                            </div> :
                            <div className="text-center">
                                <button className="text-red-600 btn btn-ghost">
                                    <span className="loading loading-spinner"></span>
                                    Loading
                                </button>
                            </div>
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProductTabs;