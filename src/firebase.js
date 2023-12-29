import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBX3Etzg-bvqnWtE4kJvvrY49jRS4XOJQs",
    authDomain: "podcast-platform-5a80f.firebaseapp.com",
    projectId: "podcast-platform-5a80f",
    storageBucket: "podcast-platform-5a80f.appspot.com",
    messagingSenderId: "364573484230",
    appId: "1:364573484230:web:230ebdff3cb795a167a3c7",
    measurementId: "G-D6J1MBEKVW"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };