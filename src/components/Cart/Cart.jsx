
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import CartItem from './CartItem';
import { Hourglass } from 'react-loader-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const Cart = () => {

    const { user, cart, reFetchCart } = useContext(AuthContext);

    const handleDeleteCart = (_id) => {
        fetch(`https://toy-corner-server-bd.vercel.app/cart/items/${_id}`, {
            method: "DELETE"
        })
            .then(result => {
                if (result) {
                    reFetchCart();
                    Swal.fire({
                        title: "Deleted !",
                        text: "Cart item deleted successfully",
                        icon: "success"
                    });
                }
            })
            .then(error => console.log(error))
    }

    return (
        <div>
            <DynamicTitle title="Cart"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>Cart</h2>
            </div>
            <br /><br />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Image</th>
                                <th>Name / Price</th>
                                <th>Color / Material</th>
                                <th>Manufacturer / Customer</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                (user && cart) ?
                                    cart.map((item, index) => <CartItem key={item._id} serial={index + 1} item={item} handleDeleteCart={handleDeleteCart} ></CartItem>) :
                                    <>
                                        <div className="flex items-center justify-center">
                                            <Hourglass
                                                visible={true}
                                                height="20"
                                                width="20"
                                                ariaLabel="hourglass-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                                colors={['navy', 'crimson']}
                                            /><p className='ml-3 text-lg font-medium text-red-700'>Loading ...</p>
                                        </div>
                                    </>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;