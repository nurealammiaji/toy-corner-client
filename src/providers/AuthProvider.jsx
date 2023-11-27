import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [wishlist, setWishlist] = useState();
    const [cart, setCart] = useState();

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
                .then(data => setWishlist(data))
        }
    }, [user])

    useEffect(() => {
        if (user) {
            const customer = user.email;
            fetch(`https://toy-corner-server-bd.vercel.app/cart/${customer}`)
                .then(res => res.json())
                .then(data => setCart(data))
        }
    }, [user])

    const authInfo = {
        user,
        loading,
        wishlist,
        cart,
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