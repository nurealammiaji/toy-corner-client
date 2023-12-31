import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PiXBold } from "react-icons/pi";
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const Profile = () => {

    const { user } = useContext(AuthContext);
    const { email, displayName, photoURL } = user;
    const [isDisable, setIsDisable] = useState(true);

    const disableHandler = () => {
        setIsDisable(!isDisable);
    }

    const userDetailsHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
            email: email,
        })
            .then(result => {
                console.log("Profile Updated !!", result);
                toast.success("Profile Updated !!", {
                    position: toast.POSITION.TOP_CENTER
                });
                setIsDisable(true);
            })
            .catch(error => {
                console.log(error);
                toast.error("Sorry, Something is wrong !!", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }

    return (
        <div>
            <ToastContainer />
            <DynamicTitle title="Profile"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>User Profile</h2>
            </div>
            <br /><br />
            <div className="shadow-xl card lg:card-side bg-base-100">
                <figure><img src={photoURL} className="h-full" alt="Album" /></figure>
                <div className="card-body">
                    <form onSubmit={userDetailsHandler} className="card-body">
                        {
                            (!isDisable) &&
                            <div className="ml-auto">
                                <button onClick={disableHandler} className="btn btn-error btn-circle btn-sm"><PiXBold className="text-xl" /></button>
                            </div>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={displayName} disabled={isDisable} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photoURL" defaultValue={photoURL} disabled={isDisable} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={email} disabled={isDisable} className="input input-bordered" required />
                        </div>
                        {
                            (!isDisable) &&
                            <div className="mt-6 form-control">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        }
                    </form>
                    {
                        (isDisable) &&
                        <div className="justify-end card-actions">
                            <button onClick={disableHandler} className="btn btn-primary">Edit</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;