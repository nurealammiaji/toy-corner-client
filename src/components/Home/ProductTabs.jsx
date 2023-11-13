import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabData from './TabData';

const ProductTabs = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>
                <TabPanel>
                    {
                        (products) ?
                            products.map(product => <TabData key={product._id} product={product}></TabData>) :
                            <div className="text-center">
                                <button className="text-red-600 btn btn-ghost">
                                    <span className="loading loading-spinner"></span>
                                    Loading
                                </button>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    Bla Bla Bla
                </TabPanel>
                <TabPanel>
                    Bla Bla Bla
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProductTabs;