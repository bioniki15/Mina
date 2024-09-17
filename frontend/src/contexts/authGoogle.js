import { Children, createContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseCofing";
const provider = new GoogleAuthProvider();


export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
 
    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                sessionStorage.setItem("@AuthFirebase:token", token);
                sessionStorage.setItem("@AuthFirebase:token", JSON.stringify(user));
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };
    
    return (
        <AuthGoogleContext.Provider value={{signInGoogle, signed: !!user }}>
            
        </AuthGoogleContext.Provider>
    );
};
