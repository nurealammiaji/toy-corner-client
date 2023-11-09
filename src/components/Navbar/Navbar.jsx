import { PiHeart, PiListBold, PiShoppingBag, PiSignIn, PiSignOut, PiUserCircle } from "react-icons/pi";
import logo from "../../assets/toycorner-logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const notify = () => toast.position("Wow so easy !");

    const logoutHandler = () => {
        logout()
            .then(result => {
                console.log(result);
                toast.success("Success Notification !", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <ToastContainer />
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <details className="dropdown">
                        <summary tabIndex={0} className="btn btn-ghost lg:hidden">
                            <PiListBold className="text-lg" />
                        </summary>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Category</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </details>
                    <Link to="/">
                        <img className="md:h-[60px]" src={logo} alt="" />
                    </Link>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Category</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end [&>*]:ml-1 hover:[&>*]:text-red-600">
                    <button className="relative mr-1 tooltip" data-tip="Wishlist"><PiHeart className="text-lg md:text-2xl" />
                        <span className="absolute bottom-0 p-1 badge badge-primary badge-sm">0</span>
                    </button>
                    <button className="mr-5 tooltip" data-tip="Cart"><PiShoppingBag className="text-lg md:text-2xl" />
                        <span className="absolute bottom-0 p-1 badge badge-primary badge-sm">0</span>
                    </button>
                    {(user) ?
                        <>
                            <button className="tooltip" data-tip="Profile"><PiUserCircle className="text-lg md:text-2xl" /></button>
                            <button onClick={logoutHandler} className="tooltip" data-tip="Logout"><PiSignOut className="text-lg md:text-2xl" /></button>
                        </> :
                        <>
                            <button className="tooltip" data-tip="Login"><PiSignIn className="text-lg md:text-2xl" /></button>
                        </>}
                    <button onClick={notify}>Notify !</button>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Navbar;