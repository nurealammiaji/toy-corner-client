import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiGoogleLogoBold } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { emailLogin, googleLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const destination = location?.state?.from?.pathname || "/";

    const emailLoginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailLogin(email, password)
            .then(result => {
                console.log(result);
                toast.success("Logged in Successfully !!", {
                    position: toast.POSITION.TOP_CENTER
                });
                navigate(destination, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                toast.error(`${error.message}`, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }

    const googleLoginHandler = () => {
        googleLogin()
            .then(result => {
                console.log(result);
                toast.success("Logged in Successfully !!", {
                    position: toast.POSITION.TOP_CENTER
                });
                navigate(destination, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                toast.error(`${error.message}`, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }

    return (
        <div>
            <ToastContainer />
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src="" alt="" />
                </div>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <form onSubmit={emailLoginHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <div className="flex items-center justify-between">
                                <label className="label">
                                    <Link to="/register" className="label-text-alt">Need Account?</Link>
                                </label>
                                <label className="label">
                                    <Link to="/forgot" className="label-text-alt">Forgot password?</Link>
                                </label>
                            </div>
                        </div>
                        <div className="mt-3 form-control">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <p className="divider">or</p>
                        <div className="text-center">
                            <button onClick={googleLoginHandler} className="tooltip" data-tip="Google Sign In"><PiGoogleLogoBold className="text-3xl" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;