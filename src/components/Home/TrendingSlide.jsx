import { Rating } from "@smastrom/react-rating";
import { PiEye, PiHeart, PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";


const TrendingSlide = ({ toy, handleWishlist, handleAddToCart }) => {

    const { _id, name, price, image, description, ratings } = toy;

    return (
        <div className="w-11/12 border card card-compact bg-base-100">
            <figure><img src={image} className="h-[300px] w-full" alt="Toy" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="font-medium">Price: {price.amount} {price.currency}</p>
                <p>{description.slice(0, 25)}..</p>
                <div>Ratings: <Rating style={{ maxWidth: 70, display: "inline-flex" }} value={ratings.value} readOnly /></div>
                <br /><br />
                <div className="justify-center card-actions">
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
    );
};

export default TrendingSlide;