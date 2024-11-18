import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
        return storedIsLoggedIn;
    });

    const resetIsLoggedIn = () => {
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
        setIsLoggedIn(false)
    }

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, resetIsLoggedIn }}>
            {children}
        </LoginContext.Provider>
    );
}