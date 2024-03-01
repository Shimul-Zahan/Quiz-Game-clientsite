import { createContext, useEffect, useState } from "react"

export const MyAuthContext = createContext(null);

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    // const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        console.log(loading);
        const storedUser = localStorage.getItem('loggedUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setLoading(false);
        }
    }, []);

    console.log(user);
    console.log(loading);


    const elements = {
        user,
        loading,
        setLoading,
    }

    return (
        <MyAuthContext.Provider value={elements}>
            {children}
        </MyAuthContext.Provider>
    )
}

export default AuthContext