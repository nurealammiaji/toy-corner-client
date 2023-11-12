import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carousel from './Carousel';

const ProductTabs = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>
                <TabPanel>
                    Bla Bla Bla
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