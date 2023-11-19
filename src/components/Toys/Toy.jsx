import { PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";

const Toy = ({ toy, serial }) => {

    const { _id, name, manufacturer, price, image, material, description, seller } = toy;

    return (
        <tr>
            <td>{serial}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{price.amount} {price.currency}</div>
                </div>
            </td>
            <td>
                {description.slice(0,35)} ...
                <br />
                <span className="badge badge-ghost badge-sm"><span className="mr-1">Sub-Category:</span> {material}</span>
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