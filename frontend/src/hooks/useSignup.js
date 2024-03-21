import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  
    //in the hooks rather than returning normal jsx or html
    //in this hooks we will be returning state or functions

    const [loading, setLoading]=useState(false);

    //now getting the values which is inside the useAuthContext hook
    const {authUser, setAuthUser} = useAuthContext();

    const signup = async({fullName, username, password, confirmPassword,gender})=>{

        //here we will also be adding validation
        const success = handleInputErrors({fullName,username,password,confirmPassword,gender});
        if(!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    fullName,
                    username,
                    password,
                    confirmPassword,
                    gender
                })
            })

            const data = await res.json();
            console.log(data);

            if(data.error){
                throw new Error(data.error)
            }
            
            //now we will set the user to the local storage
            localStorage.setItem("chat-user",JSON.stringify(data));
            //now we will also update our context
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false);
        }

    }

    return {
        loading,
        signup
    }

}

export default useSignup

//here we are using react hot toast for error showing

function handleInputErrors({fullName, username, password, confirmPassword,  gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fields");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters long");
        return false;
    }

    return true;
}