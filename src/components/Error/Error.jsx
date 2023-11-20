import { Link, useRouteError } from "react-router-dom";
import image from "../../assets/404.png";
import { PiArrowLeftBold } from "react-icons/pi";
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className="text-center">
            <DynamicTitle title="404"></DynamicTitle>
            <img className="mx-auto md:h-[300px]" src={image} alt="" />
            <div className="flex [&>*]:mx-2 justify-center items-center">
                <h3 className="text-2xl font-bold">{error.status}</h3>
                {(error.status === 404) ? <p className="text-3xl">||</p> : '' }
                <h3 className="text-2xl font-bold">{error.statusText}</h3>
            </div>
            <br />
            <h5 className="text-xl italic">{error.data}</h5>
            <br /><br />
            <Link to="/"><button className="btn"><PiArrowLeftBold className="text-lg" /> Back to Home</button></Link>
        </div>
    );
};

export default Error;