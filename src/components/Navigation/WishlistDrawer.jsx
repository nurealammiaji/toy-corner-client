import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import WishItem from "./WishItem";

const WishlistDrawer = () => {

    const { user, wishlist } = useContext(AuthContext);

    return (
        <div>
            <div className="drawer drawer-end">
                <input id="wishlist-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="wishlist-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="w-40 min-h-full p-4 menu md:w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <ul>
                            {
                                (user && wishlist) ?
                                    wishlist.map(wishItem => <WishItem key={wishItem._id} wishItem={wishItem}></WishItem>) :
                                    <li className="font-semibold text-center text-red-600">Wishlist is empty !!</li>
                            }
                        </ul>
                        <Link to="/wishlist"><button className="w-full mt-5 btn btn-outline btn-primary">Go to Wishlist</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistDrawer;