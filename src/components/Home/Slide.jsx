import { PiEye, PiHeart, PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';

const Slide = ({ product }) => {

    const { _id, name, manufacturer, price, image, description, ratings } = product;
    console.log(product);

    return (
        <div className="m-5">
            <div className="shadow-lg card lg:card-side bg-base-100">
                <figure><img src={image} className="md:h-[300px] w-full" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl card-title">{name}</h2>
                    <br />
                    <div className="[&>*]:mb-2">
                        <p className="font-semibold">{manufacturer}</p>
                        <p>{description}</p>
                        <p className="font-medium">Price: {price.amount} {price.currency}</p>
                        <p>Ratings: <Rating style={{ maxWidth: 70, display: "inline-flex" }} value={ratings.value} readOnly /></p>
                    </div>
                    <br /><br />
                    <div className="justify-end card-actions">
                        <div className="join">
                            <Link to={`/toys/${_id}`}>
                                <button className="btn hover:btn-ghost btn-info join-item tooltip" data-tip="View Details"><PiEye className="text-xl" /></button>
                            </Link>
                            <button className="btn hover:btn-ghost btn-error join-item tooltip" data-tip="Add to Wishlist"><PiHeart className="text-xl" /></button>
                            <button className="btn btn-success hover:btn-ghost join-item tooltip" data-tip="Add to Cart"><PiShoppingCart className="text-xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;