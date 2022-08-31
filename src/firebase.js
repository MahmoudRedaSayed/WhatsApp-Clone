import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGvRLj6laF665h6w2vyLUoLEGQy1GRARs",
  authDomain: "whatsapp-clone-d7f31.firebaseapp.com",
  projectId: "whatsapp-clone-d7f31",
  storageBucket: "whatsapp-clone-d7f31.appspot.com",
  messagingSenderId: "290069718702",
  appId: "1:290069718702:web:baa35b15b75b7419f86f3f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db=app.firestore();
const auth = app.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage().ref("images");
const audioStorage=firebase.storage().ref("audios");
const createTimeStamp=firebase.firestore.FieldValue.serverTimestamp;
const serverTimeStamp=firebase.database.ServerValue.TIMESTAMP;
export{
  db,
  storage,
  auth,
  provider,
  audioStorage,
  createTimeStamp,
  serverTimeStamp
}