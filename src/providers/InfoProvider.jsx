import { createContext, useEffect, useState } from "react";

export const InfoContext = createContext();

const InfoProvider = ({ children }) => {

    const [posts, setPosts] = useState(null);
    const [pinPost, setPinPost] = useState(null);

    useEffect(() => {
        fetch('https://toy-corner-server-bd.vercel.app/blog')
            .then(res => res.json())
            .then(data => setPosts(data))
    })

    const blogPinHandler = (_id) => {
        fetch(`https://toy-corner-server-bd.vercel.app/blog?id=${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPinPost(data);
        })
    }

    const info = {
        posts,
        blogPinHandler,
        pinPost,
    }

    return (
        <InfoContext.Provider value={info}>
            {children}
        </InfoContext.Provider>
    );
};

export default InfoProvider;