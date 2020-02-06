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
      college: college,
      registeredEvents: []
    })
  } catch (err) {
    console.log(err);
  }
}

export const updateUserData = async (userId, year, department, college) => {
  try {
    const userDetails = await getUserInfo(userId);
    const updatedUserDetails = {
      ...userDetails,
      year: year,
      department: department,
      college: college
    }
    firestore.collection('users').doc(userId).update(updatedUserDetails);
  } catch (err) {
    console.log(err);
  }
}

export const getEventData = async (eventID) => {
  try {
    const eventRef = await firestore.collection('events').doc(eventID).get();
    return eventRef.data();
  } catch (err) {
    console.log(err);
  }
}

export const getEvents = async () => {
  try {
    const querySnapshot = await firestore.collection('events').get();
    return querySnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
  } catch (err) {
    console.log(err);
  }
}
