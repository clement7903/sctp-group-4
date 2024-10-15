import { useState, createContext } from 'react';

export const AuthContext = createContext()

// Create the context provider component to manage states
export function AuthContextProvider({ children }) {

    // Define states to manage in our context
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Define handler methods if needed
    const loginHandler = () => setIsLoggedIn(true);
    const logoutHandler = () => setIsLoggedIn(false);

    // Context object to be passed to the provider
    const context = {
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler
    }

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}