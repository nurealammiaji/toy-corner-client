import { PiHeart, PiListBold, PiShoppingBag, PiSignIn, PiSignOut, PiUserCircle } from "react-icons/pi";
import logo from "../../assets/toycorner-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div>
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
                    <button><PiHeart className="text-lg md:text-2xl" /></button>
                    <button><PiShoppingBag className="text-lg md:text-2xl" /></button>
                    <button><PiSignIn className="text-lg md:text-2xl" /></button>
                    <button><PiUserCircle className="text-lg md:text-2xl" /></button>
                    <button><PiSignOut className="text-lg md:text-2xl" /></button>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Navbar;