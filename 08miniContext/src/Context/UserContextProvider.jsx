import React, { Children } from "react";
import UserContext from "./UserContext";

{/**UserContextProvider kuch nahi hain yeh ek method hain */}


const UserContextProvider = ({children}) =>{
    const [user, setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;