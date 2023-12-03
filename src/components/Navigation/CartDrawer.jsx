import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import CartItem from "./CartItem";
import { PiXBold } from "react-icons/pi";

const CartDrawer = () => {

    const { user, cart, handleDeleteCart } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div>
            <div className="drawer drawer-end z-20">
                <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="cart-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="w-6/12 min-h-full p-4 menu md:w-4/12 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <label htmlFor="cart-drawer" aria-label="close sidebar" className="btn btn-sm btn-error absolute top-0 left-0 rounded-none"><PiXBold className="text-lg" /></label>
                        <ul className="mt-8">
                            {
                                (user && cart) ?
                                    cart.map(cartItem => <CartItem key={cartItem._id} cartItem={cartItem} handleDeleteCart={handleDeleteCart} ></CartItem>) :
                                    <li className="font-semibold text-center text-red-600">Cart is empty !!</li>
                            }
                        </ul>
                        <label onClick={() => navigate("/cart")} htmlFor="cart-drawer" aria-label="close sidebar" className="w-full mt-5 btn btn-outline btn-primary">Go to Cart</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;