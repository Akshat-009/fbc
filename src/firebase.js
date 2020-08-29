import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyB7eisF6XFjbPQC4_1YYb8FFaGfM-dBRZk",
    authDomain: "socials-35202.firebaseapp.com",
    databaseURL: "https://socials-35202.firebaseio.com",
    projectId: "socials-35202",
    storageBucket: "socials-35202.appspot.com",
    messagingSenderId: "626506085091",
    appId: "1:626506085091:web:e70a4c7a05c71e4c12cbd6",
    measurementId: "G-0ZMRQRRHVJ"
  };
const firebaseapp=firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
const auth=firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export {auth,provider};
