import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuOIXzwEvthSxi-zcOXcdLqqpasUTRR2o",
  authDomain: "facebook-clone-3bdb7.firebaseapp.com",
  projectId: "facebook-clone-3bdb7",
  storageBucket: "facebook-clone-3bdb7.appspot.com",
  messagingSenderId: "725335482607",
  appId: "1:725335482607:web:acf3f9825bdc3172d5bb1a",
  measurementId: "G-SXL247T40B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
