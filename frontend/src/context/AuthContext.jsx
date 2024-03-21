import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

//to consume the value of the AuthContext.Provider - we will be using the hook useAuthContext
export const useAuthContext = ()=>{
    return useContext(AuthContext);
}

//here we will be providing some values that we can use throughout the application
export const AuthContextProvider = ({children}) =>{
                                               //if the user is null then we add nulll into it
//now localStorage.getItem("chat-user") - this will give us a string - but we need it in the form of json
//so we use json.parse
    const [authUser , setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>

}