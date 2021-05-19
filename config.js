import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDVdAqosE7XD51c1aXuOIfDuGXpxB3gI2Q",
  authDomain: "barter-system-231bc.firebaseapp.com",
  projectId: "barter-system-231bc",
  storageBucket: "barter-system-231bc.appspot.com",
  messagingSenderId: "94235810243",
  appId: "1:94235810243:web:be9c4d798fe85e6adb0576",
  measurementId: "G-5ZB96YR2C4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()