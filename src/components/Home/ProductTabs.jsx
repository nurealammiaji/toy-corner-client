import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabData from './TabData';
import { Hourglass } from 'react-loader-spinner';

const ProductTabs = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [products, setProducts] = useState(null);
    const [category, setCategory] = useState("Plastic");

    useEffect(() => {
        fetch(`http://localhost:5000/products/categories/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [category])

    const tabPanel = <>
        <TabPanel>
            {
                (products) ?
                    <div className='grid gap-5 md:grid-cols-3'>
                        {
                            products.map(product => <TabData key={product._id} product={product}></TabData>)
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
            <br />
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Shop by Category</h2>
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
    );
};

export default ProductTabs;