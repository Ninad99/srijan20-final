import { db } from './config';

export const getUsernameFromDatabase = async (userId) => {
  try {
    const userRef = await db.ref('users/' + userId).once('value');
    const user = userRef.val();
    return user.username;
  } catch (err) {
    console.log(err);
    return '';
  }
}

export const getUserInfo = async (userId) => {
  try {
    const userRef = await db.ref('users/' + userId).once('value');
    return userRef.val();
  } catch(err) {
    console.log(err);
  }
}

export const writeUserData = (userId, userName, email, year, department, college) => {
  db.ref('users/' + userId).set({
    username: userName,
    email: email,
    year: year,
    department: department,
    college: college
  });
}