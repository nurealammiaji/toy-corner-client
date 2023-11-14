import { useLoaderData } from "react-router-dom";
import Toy from './Toy';
import { Hourglass } from "react-loader-spinner";

const Toys = () => {

    const toys = useLoaderData();

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