import { useLoaderData} from "react-router-dom";
import { PiHeartFill, PiShoppingCartFill } from "react-icons/pi";

const ToyDetails = () => {

    const toy = useLoaderData();
    const { _id, name, manufacturer, price, image, description } = toy;

    return (
        <div>
            <div className="w-full mx-auto shadow-xl md:w-8/12 card card-compact bg-base-100">
                <figure><img src={image} className="w-full" alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <br />
                    <h4>Price: {price.amount} {price.currency}</h4>
                    <br />
                    <p>Manufacturer: {manufacturer}</p>
                    <p>{description}</p>
                    <br />
                    <div className="justify-center card-actions">
                        <div className="join">
                            <button className="btn hover:btn-ghost btn-error join-item tooltip" data-tip="Add to Wishlist">
                                <div className="flex items-center justify-between">
                                    <p><PiHeartFill className="mr-2 text-xl" /></p><p>Add to Wishlist</p>
                                </div>
                            </button>
                            <button className="btn hover:btn-ghost btn-success join-item tooltip" data-tip="Add to Cart">
                                <div className="flex items-center justify-between">
                                    <p>Add to Cart</p>
                                    <p><PiShoppingCartFill className="ml-2 text-xl" /></p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;