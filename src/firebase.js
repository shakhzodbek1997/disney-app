import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCCQ5hUv3jMjbIcyeC_DMMavk-WWcVHaQ4",
  authDomain: "disney-clone-445cb.firebaseapp.com",
  projectId: "disney-clone-445cb",
  storageBucket: "disney-clone-445cb.appspot.com",
  messagingSenderId: "427401649719",
  appId: "1:427401649719:web:160cfc090a31ed24f2e9b2",
  measurementId: "G-TRT0ZN3D00"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;