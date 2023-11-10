import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiGoogleLogoBold } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {

    const { emailRegister, googleLogin } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const destination = location?.state?.from?.pathname || "/";

    const emailLoginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password === confirmPassword) {
            emailRegister(email, password)
            .then(result => {
                console.log(result);
                const currentUser = result.user;
                updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photoURL
                })
                toast.success("Registered Successfully !!", {
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
        else {
            return;
        }
    }

    const googleLoginHandler = () => {
        googleLogin()
            .then(result => {
                console.log(result);
                toast.success("Registered Successfully !!", {
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
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photoURL" placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
                            <div className="flex items-center justify-between">
                                <label className="label">
                                    <Link to="/login" className="label-text-alt">Have Account?</Link>
                                </label>
                                <label className="label">
                                    <Link to="/forgot" className="label-text-alt">Forgot password?</Link>
                                </label>
                            </div>
                        </div>
                        <div className="mt-3 form-control">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p className="divider">or</p>
                        <div>
                            <button onClick={googleLoginHandler} className="tooltip" data-tip="Register with Google"><PiGoogleLogoBold className="text-3xl" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;