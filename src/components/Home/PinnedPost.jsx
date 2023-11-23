import { PiEyeBold, PiPushPinFill, PiPushPinSimpleSlashBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PinnedPost = () => {

    let title = localStorage.getItem('toyCorner-pinnedPost');

    const navigate = useNavigate();

    const unpinHandler = () => {
        localStorage.removeItem('toyCorner-pinnedPost');
        toast("Post Unpinned Successfully !!", {
            position: toast.POSITION.TOP_CENTER
        });
        navigate("/", { replace: true });
    }

    return (
        <div>
            <ToastContainer />
            <div className="md:text-right">
                {
                    (title) ?
                        <ul className="menu bg-base-200 menu-horizontal rounded-box">
                            <li className="w-full md:w-fit">
                                <p>
                                    <PiPushPinFill className="text-lg font-extrabold text-primary" />
                                    <span>{title}</span>
                                </p>
                            </li>
                            <li className="w-6/12 md:w-fit">
                                <Link to="/blog">
                                    <PiEyeBold className="text-blue-600" />
                                    View
                                </Link>
                            </li>
                            <li className="w-6/12 md:w-fit">
                                <button onClick={() => unpinHandler()}>
                                    <PiPushPinSimpleSlashBold className="text-red-600" />
                                    Unpin
                                </button>
                            </li>
                        </ul> : null
                }
            </div>
        </div>
    );
};

export default PinnedPost;