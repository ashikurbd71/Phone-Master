import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup ,signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';



export const Authcontext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const Authprovider = ({children}) => {


// google sigin
 const googleSigin = () =>{
 setLoader(true)
   return signInWithPopup(auth,googleProvider)
 }

//  githubprovider

const githubSign = () => {

  setLoader(true)
    return signInWithPopup(auth,githubProvider)
}


//  craete user

const createUser = (email,password) => {

    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// signin user

const siginuser = (email,password) => {

    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// update user

const updateuser = (name,img) => {

    return updateProfile(auth.currentuser, {

    
displayName: name, photoURL: img,
          

    })
}

// logout

const logout = () => {

    setLoader(true)
    return signOut(auth)
}

// observer

useEffect(() => {


    const unsubcribe =  onAuthStateChanged(auth, currentUser => {

        setUser(currentUser)
        setLoader(false)
      
    })

    return () => {

        unsubcribe()
    }



} ,[])


// resetpassword 

const resetpass = (email) => {

      return sendPasswordResetEmail(auth,email)
}


 const [user,setUser] = useState(null)
 const[loader,setLoader] = useState(true)

  const data = {googleSigin,user,createUser ,siginuser,logout,loader,githubSign,updateuser ,resetpass}

    return (
      
        <Authcontext.Provider value={data} >

           {children}

        </Authcontext.Provider>

    );
};

export default Authprovider;