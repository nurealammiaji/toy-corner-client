import { PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';

const MyToy = ({ toy, serial }) => {

    const { _id, name, manufacturer, price, image, description, ratings } = toy;

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
                {description}
                <br />
                <span className="badge badge-ghost badge-sm">Ratings: <Rating style={{ maxWidth: 70, display: "inline-flex" }} value={ratings.value} readOnly /></span>
            </td>
            <td>{manufacturer}</td>
            <td>
                <Link to={`/toys/${_id}`}>
                    <button className="btn btn-sm hover:btn-ghost btn-info join-item tooltip" data-tip="View Details"><PiEye className="text-xl" /></button>
                </Link>
            </td>
        </tr>
    );
};

export default MyToy;