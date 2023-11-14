import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import ProductTabs from "./ProductTabs";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <br /><br />
            <FeaturedProducts></FeaturedProducts>
            <br /><br />
            <ProductTabs></ProductTabs>
            <br /><br />
        </div>
    );
};

export default Home;