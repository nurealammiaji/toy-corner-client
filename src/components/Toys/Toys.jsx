import { useLoaderData } from "react-router-dom";
import Toy from './Toy';

const Toys = () => {

    const toys = useLoaderData();
    console.log(toys);

    return (
        <div>
            <div>
                {
                    (toys) ?
                        <div className="grid gap-5 md:grid-cols-3">
                            {
                                toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                            }
                        </div> :
                        <div className="text-center">
                            <button className="text-red-600 btn btn-ghost">
                                <span className="loading loading-spinner"></span>
                                Loading
                            </button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Toys;