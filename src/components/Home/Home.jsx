import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Gallery from "./Gallery";
import ProductTabs from "./ProductTabs";
import TrendingProducts from "./TrendingProducts";
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const Home = () => {

    const pinnedPost = localStorage.getItem('pinnedPost-title');

    return (
        <div>
            <DynamicTitle title="Home"></DynamicTitle>
            <div>
                <p>Pinned Blog: {pinnedPost}</p>
            </div>
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