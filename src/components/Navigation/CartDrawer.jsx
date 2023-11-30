import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import CartItem from "./CartItem";

const CartDrawer = () => {

    const { user, cart, handleDeleteCart } = useContext(AuthContext);

    return (
        <div>
            <div className="drawer drawer-end">
                <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="cart-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="w-40 min-h-full p-4 menu md:w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <ul>
                            {
                                (user && cart) ?
                                    cart.map(cartItem => <CartItem key={cartItem._id} cartItem={cartItem} handleDeleteCart={handleDeleteCart} ></CartItem>) :
                                    <li className="font-semibold text-center text-red-600">Cart is empty !!</li>
                            }
                        </ul>
                        <Link to="/cart"><button className="w-full mt-5 btn btn-outline btn-primary">Go to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;