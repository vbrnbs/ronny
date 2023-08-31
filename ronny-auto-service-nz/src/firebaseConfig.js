// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp({
  apiKey: "AIzaSyAyAWLSf9A3e1qQd4N-j_8_CCcSwLKrpts",
  authDomain: "ronny-nzgorge.firebaseapp.com",
  projectId: "ronny-nzgorge",
  storageBucket: "ronny-nzgorge.appspot.com",
  messagingSenderId: "37839314828",
  appId: "1:37839314828:web:7b665c39aabf73934d00a9",
  measurementId: "G-HCV190EENX"
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;