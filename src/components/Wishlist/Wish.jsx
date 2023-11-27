import { PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";


const Wish = ({ wish, serial }) => {

    const { productId, productName, productPrice, productColor, productImage, productManufacturer, productMaterial, customerEmail } = wish;

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
                    <div className="text-sm opacity-50">Price: {productPrice} </div>
                </div>
            </td>
            <td>
                Color: {productColor}
                <br />
                <span className="mr-1 font-light">Sub-Category:</span>
                <span className="badge badge-ghost badge-sm">{productMaterial}</span>
            </td>
            <td>
                {productManufacturer}
                <br />
                <span className="mr-1 font-light">Customer: </span>
                {
                    <span className="badge badge-ghost badge-sm">{customerEmail}</span>
                }
            </td>
            <td>
                <Link to={`/toys/${productId}`}>
                    <button className="btn btn-sm hover:btn-ghost btn-info join-item tooltip" data-tip="View Details"><PiEye className="text-xl" /></button>
                </Link>
            </td>
        </tr>
    );
};

export default Wish;