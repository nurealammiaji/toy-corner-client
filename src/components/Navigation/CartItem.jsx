import { PiTrash } from "react-icons/pi";


const CartItem = ({ cartItem, handleDeleteCart }) => {

    const { _id, productId, productName, productPrice, productColor, productImage, productManufacturer, productMaterial, customerEmail } = cartItem;

    return (
        <li>
            <div className="flex">
                <div className="flex-grow md:flex-grow-0 avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                        <img src={productImage} />
                    </div>
                </div>
                <div className="flex-grow hidden ml-1 md:block">
                    <h5 className="font-bold">{productName}</h5>
                    <small className="text-sm opacity-50">Price: {productPrice.amount} {productPrice.currency}</small>
                </div>
                <div>
                    <button onClick={() => handleDeleteCart(_id)} className="btn btn-sm hover:btn-ghost btn-error join-item tooltip" data-tip="Delete"><PiTrash className="text-xl" /></button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;