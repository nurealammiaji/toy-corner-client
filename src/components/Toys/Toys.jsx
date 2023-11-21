import Toy from './Toy';
import { Hourglass } from "react-loader-spinner";
import { useEffect, useState } from "react";
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toys = () => {

    const [toys, setToys] = useState(null);
    const [found, setFound] = useState(null);

    useEffect(() => {
        fetch('https://toy-corner-server-bd.vercel.app/products?limit=20')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;
        fetch(`https://toy-corner-server-bd.vercel.app/products/search/${text}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setFound(data);
                if (data.length === 0) {
                    toast.error("Not Found !!", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                else if (data.length === 1) {
                    toast.success(`${data.length} Result Found !!`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                else {
                    toast.success(`${data.length} Results Found !!`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })
    }

    return (
        <div>
            <ToastContainer />
            <DynamicTitle title="All Toys"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold text-primary divider md:w-6/12'>All Toys</h2>
            </div>
            <br /><br />
            <div className="text-center">
                <form onSubmit={handleSearch} className="join">
                    <div>
                        <input name='text' type='text' className="input input-bordered join-item w-full" placeholder="Toy Name" required />
                    </div>
                    <div>
                        <button type='submit' className="btn join-item">Search</button>
                    </div>
                </form>
            </div>
            <br />
            {
                (found && found.length === 0) ?
                    <div className='text-center'>
                        <p className='text-red-600 font-semibold mb-1'>Sorry, Not Found !!</p>
                        <p className='italic text-sm'>Please try with another character or word</p>
                    </div> : null
            }
            {
                (found && found.length === 1) ?
                    <div className='text-center'>
                        <p className='text-green-600 font-semibold mb-1'>{found.length} Result Found !!</p>
                    </div> : null
            }
            {
                (found && found.length > 1) ?
                    <div className='text-center'>
                        <p className='text-green-600 font-semibold mb-1'>{found.length} Results Found !!</p>
                    </div> : null
            }
            <br />
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