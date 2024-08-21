import { createContext, useState } from "react";

//Context
export const AuthContext = createContext()

export default function AuthProvider({children}){
    const [number, setNumber] = useState(0)

    return (
        <AuthContext.Provider value = {{number}}>
            {children}
        </AuthContext.Provider>
    )
}