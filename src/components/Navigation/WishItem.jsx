import { PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";


const WishItem = ({ wishItem }) => {

    const { productId, productName, productPrice, productColor, productImage, productManufacturer, productMaterial, customerEmail } = wishItem;

    return (
        <li>
            <div className="flex">
                <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                        <img src={productImage} />
                    </div>
                </div>
                <div className="flex-grow ml-1">
                        <h5 className="font-bold">{productName}</h5>
                        <small className="text-sm opacity-50">Price: {productPrice.amount} {productPrice.currency}</small>
                </div>
                <div>
                <Link to={`/toys/${productId}`}>
                    <button className="btn btn-sm hover:btn-ghost btn-info join-item tooltip" data-tip="View Details"><PiEye className="text-xl" /></button>
                </Link>
                </div>
            </div>
        </li>
    );
};

export default WishItem;