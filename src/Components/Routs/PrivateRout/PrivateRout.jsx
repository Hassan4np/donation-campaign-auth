import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user,loding} = useContext(AuthContext);
    if(loding){
        return <h1 className="text-2xl"> Loding...</h1>
    }
    if(user){
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default PrivateRout;