import { useContext } from "react";
import { PiEye, PiShoppingCart, PiTrash } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


const Wish = ({ wish, serial, handleDeleteWish }) => {

    const { _id, productId, productName, productPrice, productColor, productImage, productManufacturer, productMaterial, customerEmail } = wish;

    const { user, reFetchCart } = useContext(AuthContext);

    const handleAddToCart = () => {
        const cart = {
            productId: productId,
            productName: productName,
            productPrice: {
                amount: productPrice.amount,
                currency: productPrice.currency
            },
            productColor: productColor,
            productImage: productImage,
            productManufacturer: productManufacturer,
            productMaterial: productMaterial,
            customerEmail: user.email
        };
        fetch('https://toy-corner-server-bd.vercel.app/cart', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(result => {
                console.log(result);
                if (result) {
                    Swal.fire({
                        title: "Added !!",
                        text: "Toy added to the cart",
                        icon: "success"
                    });
                    reFetchCart();
                }
            })
            .catch(error => {
                console.log(error.message);
                if (error) {
                    Swal.fire({
                        title: "Can't Add !!",
                        text: "Toy can't add to the cart",
                        icon: "error"
                    });
                }
            })
    }

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
                    <button onClick={() => handleDeleteWish(_id)} className="btn btn-sm hover:btn-ghost btn-error join-item tooltip" data-tip="Delete"><PiTrash className="text-xl" /></button>
                    <button onClick={() => handleAddToCart(_id)} className="btn btn-sm btn-success hover:btn-ghost join-item tooltip" data-tip="Add to Cart"><PiShoppingCart className="text-xl" /></button>
                </div>
            </td>
        </tr>
    );
};

export default Wish;