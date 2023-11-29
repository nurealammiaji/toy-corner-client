import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);

    const emailRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        return signOut(auth)
    }

    const reFetch = () => {
        fetch(`https://toy-corner-server-bd.vercel.app/wishlist/${user.email}`)
            .then(res => res.json())
            .then(data => setWishlist(data))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(true);
            setUser(currentUser);
            setLoading(false);
            // Adding JWT
            if (currentUser) {
                const user = currentUser.email;
                fetch('https://toy-corner-server-bd.vercel.app/jwt/', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ user })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('toyCorner-user-token', data.token);
                    })
            }
            else {
                return;
            }
        })
        return () => {
            return unsubscribe();
        }
    })

    useEffect(() => {
        if (user) {
            const customer = user.email;
            fetch(`https://toy-corner-server-bd.vercel.app/wishlist/${customer}`)
                .then(res => res.json())
                .then(data => {
                    setWishlist(data);
                })
        }
    }, [user])

    useEffect(() => {
        if (user) {
            const customer = user.email;
            fetch(`https://toy-corner-server-bd.vercel.app/cart/${customer}`)
                .then(res => res.json())
                .then(data => {
                    setCart(data);
                })
        }
    }, [user])

    const handleDeleteWish = (_id) => {
        fetch(`https://toy-corner-server-bd.vercel.app/wishlist/items/${_id}`, {
            method: "DELETE"
        })
            .then(result => {
                if (result) {
                    const remaining = wishlist.filter(item => item._id !== _id);
                    setWishlist(remaining);
                    reFetch();
                    Swal.fire({
                        title: "Deleted !",
                        text: "Wishlist item deleted successfully",
                        icon: "success"
                    });
                }
            })
            .then(error => console.log(error))
    }

    const handleDeleteCart = (_id) => {
        fetch(`https://toy-corner-server-bd.vercel.app/cart/items/${_id}`, {
            method: "DELETE"
        })
            .then(result => {
                if (result) {
                    const remaining = cart.filter(item => item._id !== _id);
                    setCart(remaining);
                    Swal.fire({
                        title: "Deleted !",
                        text: "Cart item deleted successfully",
                        icon: "success"
                    });
                }
            })
            .then(error => console.log(error))
    }

    const authInfo = {
        user,
        loading,
        wishlist,
        cart,
        reFetch,
        handleDeleteWish,
        handleDeleteCart,
        emailLogin,
        emailRegister,
        googleLogin,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;