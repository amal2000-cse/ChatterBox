import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

 const SocketContext = createContext();

export const useSocketContext = ()=>{
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {

    const[socket, setSocket] =useState(null);
    const [onlineUsers, setOnlineUsers]=useState([]);
    const {authUser}=useAuthContext();

    useEffect(()=>{
        if(authUser){
          const socket=io("http://localhost:5000",{
            query:{
              userId: authUser._id,
            }
          });
          setSocket(socket);

          //now to get the number of online user from the backend
          // we will be using socket.on - to the value - "getonlineUsers"
          socket.on("getonlineUsers",(users)=>{
            setOnlineUsers(users);
          })
          
          //this is th clean up function - this will close the socket
          //when the socket is unmounted
          return ()=>{
            socket.close();
          }
            
        }else{
          if(socket){
            socket.close();
            setSocket(null);
          }
        }

    },[authUser]);
  return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>;
};
