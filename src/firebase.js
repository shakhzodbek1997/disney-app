import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMY96wpm3x-uQ3MwOj4yUyJZjfVtpVqPU",
  authDomain: "disney-clone-92812.firebaseapp.com",
  projectId: "disney-clone-92812",
  storageBucket: "disney-clone-92812.appspot.com",
  messagingSenderId: "734795365122",
  appId: "1:734795365122:web:ed09e23 f74a10b2573a01b",
  measurementId: "G-8EBP0CDR62"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;