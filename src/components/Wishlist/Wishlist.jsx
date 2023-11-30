
import { useContext } from 'react';
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import { AuthContext } from '../../providers/AuthProvider';
import Wish from './Wish';
import { Hourglass } from 'react-loader-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const Wishlist = () => {

    const { user, wishlist, reFetchWishlist } = useContext(AuthContext);

    const handleDeleteWish = (_id) => {
        fetch(`https://toy-corner-server-bd.vercel.app/wishlist/items/${_id}`, {
            method: "DELETE"
        })
            .then(result => {
                if (result) {
                    reFetchWishlist();
                    Swal.fire({
                        title: "Deleted !",
                        text: "Wishlist item deleted successfully",
                        icon: "success"
                    });
                }
            })
            .then(error => console.log(error))
    }

    return (
        <div>
            <DynamicTitle title="Wishlist"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>Wishlist</h2>
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
                                (user && wishlist) ?
                                    wishlist.map((wish, index) => <Wish key={wish._id} serial={index + 1} wish={wish} handleDeleteWish={handleDeleteWish} ></Wish>) :
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

export default Wishlist;