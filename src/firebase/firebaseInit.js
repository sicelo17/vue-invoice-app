import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvlpkV5FLM63pBNDtMtoQ3ecxv3RyrMck",
    authDomain: "invoice-app-proj.firebaseapp.com",
    projectId: "invoice-app-proj",
    storageBucket: "invoice-app-proj.appspot.com",
    messagingSenderId: "521044525535",
    appId: "1:521044525535:web:00f6445871e5c95e31846a"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();