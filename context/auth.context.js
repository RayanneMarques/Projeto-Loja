import {
    createContext,
    useContext,
    useEffect,
    useState,
}
from "react";
import api from "../api"

const Context = createContext()

export function AuthProvider(props){
    const[isAuthenticated, setIsAutheticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token){
            setIsAutheticated(true);
            api.defaults.headers.common["Authorization"] = token;
        }
    }, []);

    return (<Context.Provider value={[isAuthenticated, setIsAutheticated]}>
        {props.children}
    </Context.Provider>);
}

export function useAuthContext(){
    return useContext(Context);
}