import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "../../firebase.confige";

import useAxios from "../Hooks/useAxios";
export const AuthContext = createContext(null);
const AuthContextProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  // create new user email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name = "", photo = null) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logOUtUser = () => {
    return signOut(auth);
  };
  // Google Provider Authentication
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // GitHub Provider Authentication
  const githubProvider = new GithubAuthProvider();
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post(`/user/access-token`, loggedInUser)
          .then((result) => {
            console.log(result.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        axios
          .post(`/user/delete-token`, loggedInUser)
          .then((result) => {
            console.log(result.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });

    return () => {
      unSubscribe();
    };
  }, [axios, user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    logOUtUser,
    updateUser,
    signInWithGoogle,
    signInWithGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProviders;
