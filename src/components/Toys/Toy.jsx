import { PiEye, PiHeart, PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {

    const { _id, name, manufacturer, price, image, description } = toy;

    return (
        <div>
            <div className="w-full shadow-xl card card-compact bg-base-100">
                <figure><img src={image} className="h-[250px] w-full" alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <br />
                    <div className="justify-center card-actions">
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

export default Toy;