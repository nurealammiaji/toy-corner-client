import Toy from './Toy';
import { Hourglass } from "react-loader-spinner";
import { useEffect, useState } from "react";
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toys = () => {

    const [toys, setToys] = useState(null);
    const [found, setFound] = useState(null);
    const [sortMethod, setSortMethod] = useState(null);
    const [quantity, setQuantity] = useState(20);

    useEffect(() => {
        fetch(`https://toy-corner-server-bd.vercel.app/products?sort=${sortMethod}&limit=${quantity}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [sortMethod, quantity])

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.search.value;
        fetch(`https://toy-corner-server-bd.vercel.app/products/search/${text}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setFound(data);
                if (data.length === 0) {
                    toast.error("Sorry, Not Found !!", {
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

    const handleLimit = (event) => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.limit.value;
        setQuantity(quantity);
    }

    const handleSorting = (event) => {
        event.preventDefault();
        const form = event.target;
        const sortMethod = form.sort.value;
        setSortMethod(sortMethod);
    }

    return (
        <div>
            <ToastContainer />
            <DynamicTitle title="All Toys"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold text-primary divider md:w-6/12'>All Toys</h2>
            </div>
            <br /><br />
            <div className='justify-center gap-10 md:flex'>
                <form onSubmit={handleSorting} className='w-full join md:w-3/12'>
                    <select name='sort' className="w-full max-w-xs join-item select select-bordered">
                        <option disabled selected>Select Type</option>
                        <option>default</option>
                        <option>ascending</option>
                        <option>descending</option>
                    </select>
                    <button className='join-item btn' type='submit'>Sort</button>
                </form>
                <div className="divider md:divider-horizontal"></div>
                <form onSubmit={handleSearch} className="w-full mt-5 md:mt-0 md:w-3/12 join">
                    <div>
                        <input name='search' type='text' className="w-full input input-bordered join-item" placeholder="Toy Name" required />
                    </div>
                    <div>
                        <button type='submit' className="btn join-item">Search</button>
                    </div>
                </form>
                <div className="divider md:divider-horizontal"></div>
                <form onSubmit={handleLimit} className="w-full mt-5 md:mt-0 md:w-3/12 join">
                    <div>
                        <input name='limit' type='number' min="0" className="w-full input input-bordered join-item" placeholder="type quantity" required />
                    </div>
                    <div>
                        <button type='submit' className="btn join-item">Limit</button>
                    </div>
                </form>
            </div>
            <br />
            {
                (found && found.length === 0) ?
                    <div className='text-center'>
                        <p className='mb-1 font-semibold text-red-600'>Sorry, Not Found !!</p>
                        <p className='text-sm italic'>Please try with another character or word</p>
                    </div> : null
            }
            {
                (found && found.length === 1) ?
                    <div className='text-center'>
                        <p className='mb-1 font-semibold text-green-600'>{found.length} Result Found !!</p>
                    </div> : null
            }
            {
                (found && found.length > 1) ?
                    <div className='text-center'>
                        <p className='mb-1 font-semibold text-green-600'>{found.length} Results Found !!</p>
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