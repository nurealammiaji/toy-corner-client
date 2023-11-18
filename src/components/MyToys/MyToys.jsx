import { useContext, useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "./MyToy";

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [toys, setToys] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/products/seller/${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user.email])

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-primary divider w-6/12 mx-auto'>My Toys</h2>
            </div>
            <br /><br />
            {
                (toys) ?
                    <>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Serial</th>
                                        <th>Image</th>
                                        <th>Name / Price</th>
                                        <th>Description / Ratings</th>
                                        <th>Manufacturer / Seller</th>
                                        <th>View / Update / Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row */}
                                    {
                                        toys.map((toy, index) => <MyToy key={toy._id} toy={toy} serial={index + 1}></MyToy>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </> :
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

        </div>
    );
};

export default MyToys;