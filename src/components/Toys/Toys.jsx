import Toy from './Toy';
import { Hourglass } from "react-loader-spinner";
import { useEffect, useState } from "react";

const Toys = () => {

    const [toys, setToys] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products?limit=20')
        .then(res => res.json())
        .then(data => setToys(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-primary divider w-full md:w-6/12 mx-auto'>All Toys</h2>
            </div>
            <br /><br />
            <div>
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
                                            <th>Description / Sub-Category</th>
                                            <th>Manufacturer / Seller</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row */}
                                        {
                                            toys.map((toy, index) => <Toy key={toy._id} serial={index + 1} toy={toy}></Toy>)
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
        </div>
    );
};

export default Toys;