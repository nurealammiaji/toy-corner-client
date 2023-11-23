import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Gallery from "./Gallery";
import ProductTabs from "./ProductTabs";
import TrendingProducts from "./TrendingProducts";
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import PinnedPost from "./PinnedPost";

const Home = () => {

    return (
        <div>
            <DynamicTitle title="Home"></DynamicTitle>
            <PinnedPost></PinnedPost>
            <Banner></Banner>
            <br /><br />
            <FeaturedProducts></FeaturedProducts>
            <br /><br />
            <ProductTabs></ProductTabs>
            <br /><br />
            <TrendingProducts></TrendingProducts>
            <br /><br />
            <Gallery></Gallery>
            <br /><br />
        </div>
    );
};

export default Home;