
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase.config";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loding,setloding] = useState(true);

    //signup function------>
    const UserSignup = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(auth, email, password);

    };
    //Login Function---->
    const UserLogin = (email, password) => {
        setloding(true)
    return signInWithEmailAndPassword(auth, email, password)
    };
//Logout-------->
const UserLogOut=()=>{
    setloding(true)
    return signOut(auth);
}
//one state changed-->
useEffect(()=>{
 onAuthStateChanged(auth,(current)=>{
        setUser(current)
        setloding(false)
    });
},[])

console.log(user)

const autnation = {
    UserSignup,
    UserLogin,
    UserLogOut,
    user,
    loding
};


return (
    <AuthContext.Provider value={autnation}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;