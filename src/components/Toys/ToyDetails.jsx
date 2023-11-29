import { useLoaderData, useNavigate } from "react-router-dom";
import { PiHeart, PiHeartFill, PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import { Rating } from '@smastrom/react-rating';
import DynamicTitle from "../DynamicTitle/DynamicTitle";
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const ToyDetails = () => {

    const toy = useLoaderData();

    const { _id, name, manufacturer, price, image, description, ratings, ageRange, color, availability, subCategory } = toy;

    const { user, reFetch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleWishlist = () => {
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
                    reFetch();
                    navigate("/wishlist", { replace: true });
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

    const handleAddToCart = () => {
        Swal.fire({
            title: "Added !!",
            text: "Toy added to the cart",
            icon: "success"
        });
        navigate("/cart", { replace: true });
    }

    return (
        <div>
            <DynamicTitle title="Toy Details"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>Toy Details</h2>
            </div>
            <br /><br />
            <div className="w-full mx-auto shadow-xl md:w-8/12 card card-compact bg-base-100">
                <figure><img src={image} className="w-full md:w-6/12" alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <br />
                    <h4><span className="font-medium">Price:</span> {price.amount} {price.currency}</h4>
                    <p><span className="font-medium">Availability:</span> {availability}</p>
                    <p><span className="font-medium">Color:</span> {color}</p>
                    <p><span className="font-medium">Material:</span> {subCategory}</p>
                    <p><span className="font-medium">Age Group:</span> {ageRange}</p>
                    <p><span className="font-medium">Manufacturer:</span>  {manufacturer}</p>
                    <p><span className="font-medium">Description:</span> {description}</p>
                    <div><span className="font-medium">Ratings:</span> <Rating style={{ maxWidth: 70, display: "inline-flex" }} value={ratings.value} readOnly /></div>
                    <br /><br />
                    <div className="justify-center hidden mx-auto card-actions md:block">
                        <div className="join">
                            <button onClick={handleWishlist} className="btn hover:btn-ghost btn-error join-item tooltip" data-tip="Add to Wishlist">
                                <div className="flex items-center justify-between">
                                    <p><PiHeartFill className="mr-2 text-xl" /></p><p>Add to Wishlist</p>
                                </div>
                            </button>
                            <button onClick={handleAddToCart} className="btn hover:btn-ghost btn-success join-item tooltip" data-tip="Add to Cart">
                                <div className="flex items-center justify-between">
                                    <p>Add to Cart</p>
                                    <p><PiShoppingCartFill className="ml-2 text-xl" /></p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="justify-center block mx-auto card-actions md:hidden">
                        <div className="join">
                            <button onClick={handleWishlist} className="btn hover:btn-ghost btn-error join-item tooltip" data-tip="Add to Wishlist"><PiHeart className="text-xl" /></button>
                            <button onClick={handleAddToCart} className="btn btn-success hover:btn-ghost join-item tooltip" data-tip="Add to Cart"><PiShoppingCart className="text-xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;