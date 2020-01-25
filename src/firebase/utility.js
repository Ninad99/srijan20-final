import { firestore } from './config';

export const getUsernameFromDatabase = async (userId) => {
  try {
    const userRef = await firestore.collection('users').doc(userId).get();
    const user = userRef.data();
    return user.username;
  } catch (err) {
    console.log(err);
    return '';
  }
}

export const getUserInfo = async (userId) => {
  try {
    const userRef = await firestore.collection('users').doc(userId).get();
    return userRef.data();
  } catch (err) {
    console.log(err);
  }
}

export const writeUserData = async (userId, userName, email, year, department, college) => {
  try {
    firestore.collection('users').doc(userId).set({
      username: userName,
      email: email,
      year: year,
      department: department,
      college: college
    })
  } catch (err) {
    console.log(err);
  }
}
