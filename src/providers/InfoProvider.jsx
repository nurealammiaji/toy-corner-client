import { createContext } from "react";

export const InfoContext = createContext();

const InfoProvider = ({ children }) => {

    const info = {

    }

    return (
        <InfoContext.Provider value={info}>
            {children}
        </InfoContext.Provider>
    );
};

export default InfoProvider;