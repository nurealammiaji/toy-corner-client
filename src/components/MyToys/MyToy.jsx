import { PiEye, PiPen, PiTrash } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';

const MyToy = ({ toy, serial, handleDeleteToy }) => {

    const { _id, name, manufacturer, price, image, description, ratings, seller } = toy;



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
                    <div className="text-sm opacity-50">{price.amount} {price.currency}</div>
                </div>
            </td>
            <td>
                {description.slice(0, 35)}..
                <br />
                <span className="badge badge-ghost badge-sm"><span className="mr-2">Ratings:</span> <Rating style={{ maxWidth: 70, display: "inline-flex" }} value={ratings.value} readOnly /></span>
            </td>
            <td>
                {manufacturer}
                <br />
                {
                    (seller) ?
                        <>
                            <span className="badge badge-ghost badge-sm"><span className="mr-1">Seller:</span> {seller}</span>
                        </> :
                        <>
                            <span className="badge badge-ghost badge-sm">Seller: None </span>
                        </>
                }
            </td>
            <td>
                <div className="card-actions">
                    <div className="join">
                        <Link to={`/toys/${_id}`}>
                            <button className="btn btn-sm hover:btn-ghost btn-info join-item tooltip" data-tip="View"><PiEye className="text-xl" /></button>
                        </Link>
                        <Link to={`/toys/update/${_id}`}>
                            <button className="btn btn-sm btn-success hover:btn-ghost join-item tooltip" data-tip="Update"><PiPen className="text-xl" /></button>
                        </Link>
                        <button onClick={() => { handleDeleteToy(_id) }} className="btn btn-sm hover:btn-ghost btn-error join-item tooltip" data-tip="Delete"><PiTrash className="text-xl" /></button>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default MyToy;