import { useLoaderData } from 'react-router-dom';
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const Checkout = () => {

    const checkout = useLoaderData();
    
    console.log(checkout);

    return (
        <div>
            <DynamicTitle title="Checkout"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>Checkout</h2>
            </div>
            <br /><br />
        </div>
    );
};

export default Checkout;