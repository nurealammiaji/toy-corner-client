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
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ', ' + time;

    return (
        <div>
            <DynamicTitle title="Checkout"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>Checkout</h2>
            </div>
            <br /><br />
            <div className="rounded-b-none shadow-lg card lg:card-side bg-base-100 md:w-9/12 md:mx-auto">
                <figure><img src={productImage} className="md:h-[350px] w-full" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl card-title">{productName}</h2>
                    <br />
                    <p className="mb-3 italic font-semibold">{productManufacturer}</p>
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
            <form className="w-full p-10 mx-auto rounded-t-none card md:w-9/12 bg-base-200">
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
                    <div className="flex-row justify-between gap-5 md:flex">
                        <div className="w-full md:w-6/12 form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="text" defaultValue={date} name="orderDate" placeholder="select date here" className="w-full input input-bordered" />
                        </div>
                        <div className="w-full form-control md:w-6/12">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input type="text" defaultValue={time} name="orderTime" placeholder="select date here" className="w-full input input-bordered" />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-5 form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <textarea type="text" name="address" placeholder="Type address here" className="textarea textarea-bordered" rows={3} />
                </div>
                <button type="submit" className="w-full mt-10 btn btn-primary">Order</button>
            </form>
        </div>
    );
};

export default Checkout;