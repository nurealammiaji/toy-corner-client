import { Link } from "react-router-dom";

const WishlistDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="wishlist-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="wishlist-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="w-40 min-h-full p-4 menu md:w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <ul>
                            <li><a>Wish Item 1</a></li>
                            <li><a>Wish Item 2</a></li>
                        </ul>
                        <Link to="/wishlist"><button className="w-full mt-5 btn btn-outline btn-primary">Go to Wishlist</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistDrawer;