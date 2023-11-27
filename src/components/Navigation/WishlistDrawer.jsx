import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Hourglass } from "react-loader-spinner";

const WishlistDrawer = () => {

    const { wishlist } = useContext(AuthContext);

    return (
        <div>
            <div className="drawer drawer-end">
                <input id="wishlist-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="wishlist-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="w-40 min-h-full p-4 menu md:w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <ul>
                            {
                                (wishlist) ?
                                    wishlist.map(wish => <li key={wish._id}>
                                        <div className="flex gap-5">
                                            <div className="avatar">
                                                <div className="w-12 h-12 mask mask-squircle">
                                                    <img src={wish.productImage} />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="text-base font-semibold">{wish.productName}</h5>
                                                <span>Price: {wish.productPrice}</span>,
                                                <span className="ml-1">Color: {wish.productColor}</span>
                                            </div>
                                        </div>
                                    </li>) :
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
                        </ul>
                        <Link to="/wishlist"><button className="w-full mt-5 btn btn-outline btn-primary">Go to Wishlist</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistDrawer;