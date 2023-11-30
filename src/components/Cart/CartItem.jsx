import { PiArrowCircleRight, PiArrowSquareRight, PiCheckSquare, PiCheckSquareBold, PiCheckSquareOffset, PiEye, PiShoppingCart, PiTrash } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartItem = ({ item, serial, handleDeleteCart }) => {

    const { _id, productId, productName, productPrice, productColor, productImage, productManufacturer, productMaterial, customerEmail } = item;

    return (
        <tr>
            <td>{serial}</td>
            <td>
                <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                        <img src={productImage} />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{productName}</div>
                    <div className="text-sm opacity-50">Price: {productPrice.amount} {productPrice.currency}</div>
                </div>
            </td>
            <td>
                Color: <span className="font-medium">{productColor}</span>
                <br />
                <span className="mr-1 font-light">Material:</span>
                <span className="badge badge-ghost badge-sm">{productMaterial}</span>
            </td>
            <td>
                Manufacturer: <span className="font-medium">{productManufacturer}</span>
                <br />
                <span className="mr-1 font-light">Customer:</span>
                {
                    <span className="badge badge-ghost badge-sm">{customerEmail}</span>
                }
            </td>
            <td>
                <div className="join">
                    <Link to={`/toys/${productId}`}>
                        <button className="btn btn-sm hover:btn-ghost btn-info join-item tooltip" data-tip="View Details"><PiEye className="text-xl" /></button>
                    </Link>
                    <button onClick={() => handleDeleteCart(_id)} className="btn btn-sm hover:btn-ghost btn-error join-item tooltip" data-tip="Delete"><PiTrash className="text-xl" /></button>
                    <button className="btn btn-sm btn-success hover:btn-ghost join-item tooltip" data-tip="Checkout"><PiArrowSquareRight className="text-xl" /></button>
                </div>
            </td>
        </tr>
    );
};

export default CartItem;