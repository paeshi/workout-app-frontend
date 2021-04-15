// import firebase core module
import firebase from "firebase/app";
// import the auth package from firebase
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy4Lhkw_r2HgSqMVdoPzKXMfHmZ7tnKVw",
  authDomain: "workout-app-7b8e9.firebaseapp.com",
  projectId: "workout-app-7b8e9",
  storageBucket: "workout-app-7b8e9.appspot.com",
  messagingSenderId: "1003995142484",
  appId: "1:1003995142484:web:8b3eef429daabcadbdd0c1",
  measurementId: "G-KZQ8QCZ6XL",
};

// initialize the firebase app
firebase.initializeApp(firebaseConfig);
// set up a firebase provider(s)
const provider = new firebase.auth.GoogleAuthProvider();
// configure the firebase provider(s)
const auth = firebase.auth();
// set up auth actions ie. login, logout
function login() {
  auth.signInWithPopup(provider);
}
function logout() {
  auth.signOut();
}
// export our actions
export { auth, login, logout };
