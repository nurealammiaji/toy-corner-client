import { Link, useLoaderData } from 'react-router-dom';
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import { ToastContainer } from 'react-toastify';
import { PiEye, PiHeart, PiShoppingCart } from 'react-icons/pi';
import { Rating } from '@smastrom/react-rating';

const Checkout = () => {

    const checkout = useLoaderData();

    const { _id, productId, productName, productPrice, productColor, productImage, productManufacturer, productMaterial, customerEmail } = checkout;

    return (
        <div>
            <DynamicTitle title="Checkout"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>Checkout</h2>
            </div>
            <br /><br />
            <div className="m-5">
                <ToastContainer />
                <div className="shadow-lg card lg:card-side bg-base-100">
                    <figure><img src={productImage} className="md:h-[300px] w-full" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl card-title">{productName}</h2>
                        <br />
                        <p className="font-semibold mb-3 italic">{productManufacturer}</p>
                        <div className="[&>*]:mb-2">
                            <p><span className='font-medium'>Color:</span> {productColor}</p>
                            <p><span className='font-medium'>Material:</span> {productMaterial}</p>
                            <p><span className="font-medium">Price:</span> {productPrice.amount} {productPrice.currency}</p>
                        </div>
                        <br /><br />
                        <div className="justify-end card-actions">
                            <div className="join">
                                <Link to={`/toys/${productId}`}>
                                    <button className="btn hover:btn-ghost btn-info join-item tooltip" data-tip="View Details"><PiEye className="text-xl" /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;