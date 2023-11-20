import { PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";

const Toy = ({ toy, serial }) => {

    const { _id, name, manufacturer, quantity, image, subCategory, description, seller } = toy;

    return (
        <tr>
            <td>{serial}</td>
            <td>
                <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">Quantity: {quantity}</div>
                </div>
            </td>
            <td>
                {description.slice(0,35)} ...
                <br />
                <span className="badge badge-ghost badge-sm"><span className="mr-1">Sub-Category:</span> {subCategory}</span>
            </td>
            <td>
                {manufacturer}
                <br />
                {
                    (seller) ?
                        <>
                            <span className="badge badge-ghost badge-sm">Seller: {seller}</span>
                        </> :
                        <>
                            <span className="badge badge-ghost badge-sm">Seller: None </span>
                        </>
                }
            </td>
            <td>
                <Link to={`/toys/${_id}`}>
                    <button className="btn btn-sm hover:btn-ghost btn-info join-item tooltip" data-tip="View Details"><PiEye className="text-xl" /></button>
                </Link>
            </td>
        </tr>
    );
};

export default Toy;