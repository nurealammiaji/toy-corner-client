import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h3 className="text-2xl">{error.status}</h3>
            <br />
            <h3 className="text-2xl">{error.statusText}</h3>
            <br />
            <h5 className="text-xl">{error.data}</h5>
        </div>
    );
};

export default Error;