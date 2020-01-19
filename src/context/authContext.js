import React, { useState, useEffect } from 'react';
import firebase, { db } from '../firebase/config';

const writeUserData = (userId, userName, email, year, department) => {
  db.ref('users/' + userId).set({
    username: userName,
    email: email,
    year: year,
    department: department
  });
}

export const AuthContext = React.createContext({ currentUser: null });

const AuthContextProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, [])

  useEffect(() => {
    firebase.auth().getRedirectResult()
      .then(result => {
        console.log('[authContext] redirect result: ', result);
        if (result.user && result.additionalUserInfo.isNewUser) {
          const user = result.user;
          writeUserData(user.uid, user.displayName, user.email, 'unset', 'unset');
        }
      })
      .catch(err => console.log(err))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;