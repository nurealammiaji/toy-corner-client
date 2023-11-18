import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Gallery from "./Gallery";
import ProductTabs from "./ProductTabs";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <br /><br />
            <FeaturedProducts></FeaturedProducts>
            <br /><br />
            <ProductTabs></ProductTabs>
            <br /><br />
            <Gallery></Gallery>
            <br /><br />
            {/* <div style={{ marginTop: "150vh" }} />
            <ScrollToTop smooth /> */}
        </div>
    );
};

export default Home;