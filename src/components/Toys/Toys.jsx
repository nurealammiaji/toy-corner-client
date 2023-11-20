import Toy from './Toy';
import { Hourglass } from "react-loader-spinner";
import { useEffect, useState } from "react";
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const Toys = () => {

    const [toys, setToys] = useState(null);

    useEffect(() => {
        fetch('https://toy-corner-server-bd.vercel.app/products?limit=20')
        .then(res => res.json())
        .then(data => setToys(data))
    }, [])

    return (
        <div>
            <DynamicTitle title="All Toys"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold text-primary divider md:w-6/12'>All Toys</h2>
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
                                            <th>Name / Quantity</th>
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