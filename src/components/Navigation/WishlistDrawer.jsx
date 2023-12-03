import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import WishItem from "./WishItem";
import { PiXBold } from "react-icons/pi";

const WishlistDrawer = () => {

    const { user, wishlist, handleDeleteWish } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div>
            <div className="drawer drawer-end z-20">
                <input id="wishlist-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="wishlist-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="w-6/12 min-h-full p-4 menu md:w-4/12 bg-base-200 text-base-content relative">
                        {/* Sidebar content here */}
                        <label htmlFor="wishlist-drawer" aria-label="close sidebar" className="btn btn-sm btn-error absolute top-0 left-0 rounded-none"><PiXBold className="text-lg" /></label>
                        <ul className="mt-8">
                            {
                                (user && wishlist) ?
                                    wishlist.map(wishItem => <WishItem key={wishItem._id} wishItem={wishItem} handleDeleteWish={handleDeleteWish} ></WishItem>) :
                                    <li className="font-semibold text-center text-red-600">Wishlist is empty !!</li>
                            }
                        </ul>
                        <label onClick={() => navigate("/wishlist")} htmlFor="wishlist-drawer" aria-label="close sidebar" className="w-full mt-5 btn btn-outline btn-primary">Go to Wishlist</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistDrawer;