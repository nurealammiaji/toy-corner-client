import { PiEye, PiHeart, PiShoppingCart } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slide = ({ product }) => {

    const { user, reFetchWishlist, reFetchCart } = useContext(AuthContext);
    const navigate = useNavigate();

    const { _id, name, manufacturer, price, image, description, ratings, color, subCategory } = product;

    const handleWishlist = () => {
        if (!user) {
            toast("Please Login First !!", {
                position: toast.POSITION.TOP_CENTER
            });
            navigate("/login", { replace: true })
        }
        else {
            const wish = {
                productId: _id,
                productName: name,
                productPrice: {
                    amount: price.amount,
                    currency: price.currency
                },
                productColor: color,
                productImage: image,
                productManufacturer: manufacturer,
                productMaterial: subCategory,
                customerEmail: user.email
            };
            fetch('https://toy-corner-server-bd.vercel.app/wishlist', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(wish)
            })
                .then(result => {
                    console.log(result);
                    if (result) {
                        Swal.fire({
                            title: "Added !!",
                            text: "Toy added to the wishlist",
                            icon: "success"
                        });
                        reFetchWishlist();
                    }
                })
                .catch(error => {
                    console.log(error.message);
                    if (error) {
                        Swal.fire({
                            title: "Can't Add !!",
                            text: "Toy can't add to the wishlist",
                            icon: "error"
                        });
                    }
                })
        }
    }

    const handleAddToCart = () => {
        if (!user) {
            toast("Please Login First !!", {
                position: toast.POSITION.TOP_CENTER
            });
            navigate("/login", { replace: true })
        }
        else {
            const cart = {
                productId: _id,
                productName: name,
                productPrice: {
                    amount: price.amount,
                    currency: price.currency
                },
                productColor: color,
                productImage: image,
                productManufacturer: manufacturer,
                productMaterial: subCategory,
                customerEmail: user.email
            };
            fetch('https://toy-corner-server-bd.vercel.app/cart', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cart)
            })
                .then(result => {
                    console.log(result);
                    if (result) {
                        Swal.fire({
                            title: "Added !!",
                            text: "Toy added to the cart",
                            icon: "success"
                        });
                        reFetchCart();
                    }
                })
                .catch(error => {
                    console.log(error.message);
                    if (error) {
                        Swal.fire({
                            title: "Can't Add !!",
                            text: "Toy can't add to the cart",
                            icon: "error"
                        });
                    }
                })
        }
    }


    return (
        <div className="m-5">
            <ToastContainer />
            <div className="shadow-lg card lg:card-side bg-base-100">
                <figure><img src={image} className="md:h-[300px] w-full" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl card-title">{name}</h2>
                    <br />
                    <div className="[&>*]:mb-2">
                        <p className="font-semibold">{manufacturer}</p>
                        <p>{description}</p>
                        <p className="font-medium">Price: {price.amount} {price.currency}</p>
                        <div>Ratings: <Rating style={{ maxWidth: 70, display: "inline-flex" }} value={ratings.value} readOnly /></div>
                    </div>
                    <br /><br />
                    <div className="justify-end card-actions">
                        <div className="join">
                            <Link to={`/toys/${_id}`}>
                                <button className="btn hover:btn-ghost btn-info join-item tooltip" data-tip="View Details"><PiEye className="text-xl" /></button>
                            </Link>
                            <button onClick={handleWishlist} className="btn hover:btn-ghost btn-error join-item tooltip" data-tip="Add to Wishlist"><PiHeart className="text-xl" /></button>
                            <button onClick={handleAddToCart} className="btn btn-success hover:btn-ghost join-item tooltip" data-tip="Add to Cart"><PiShoppingCart className="text-xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;