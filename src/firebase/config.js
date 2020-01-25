import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SRIJAN20_apiKey,
  authDomain: process.env.REACT_APP_SRIJAN20_authDomain,
  databaseURL: process.env.REACT_APP_SRIJAN20_databaseURL,
  projectId: process.env.REACT_APP_SRIJAN20_projectId,
  storageBucket: process.env.REACT_APP_SRIJAN20_storageBucket,
  messagingSenderId: process.env.REACT_APP_SRIJAN20_messagingSenderId,
  appId: process.env.REACT_APP_SRIJAN20_appId
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;