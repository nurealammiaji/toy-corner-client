import { Link, useLoaderData } from 'react-router-dom';
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import { PiEye } from 'react-icons/pi';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Checkout = () => {

    const checkout = useLoaderData();

    const { _id, productId, productName, productPrice, productColor, productImage, productManufacturer, productMaterial, customerEmail } = checkout;

    const { user } = useContext(AuthContext);

    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();

    return (
        <div>
            <DynamicTitle title="Checkout"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>Checkout</h2>
            </div>
            <br /><br />
            <div className="shadow-lg card lg:card-side bg-base-100 md:w-[700px] md:mx-auto rounded-b-none">
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
            <form className="w-full p-10 mx-auto card md:w-[700px] bg-base-200 rounded-t-none">
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="CustomerName" placeholder="Type name here" className="w-full input input-bordered" />
                    </div>
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="customerEmail" defaultValue={customerEmail} placeholder="Type email here" className="w-full input input-bordered" />
                    </div>
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name="customerPhone" placeholder="Type phone here" className="w-full input input-bordered" />
                    </div>
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="label-text">Date / Time</span>
                        </label>
                        <input type="text" defaultValue={`${date}-${month}-${year}, ${hour}:${minute}:${second}`} name="orderDate" placeholder="select date here" className="w-full input input-bordered" />
                    </div>
                </div>
                <div className="w-full mt-5 form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <textarea type="text" name="address" placeholder="Type address here" className="textarea textarea-bordered" rows={4} />
                </div>
                <button type="submit" className="w-full mt-10 btn btn-primary">Order</button>
            </form>
        </div>
    );
};

export default Checkout;