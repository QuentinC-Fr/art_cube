import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyCv8XLBPVF-bHNZsDbiYDnxfjVk5a3ycao",
  authDomain: "art-cube-bcc32.firebaseapp.com",
  databaseURL:
    "https://art-cube-bcc32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "art-cube-bcc32",
  storageBucket: "art-cube-bcc32.appspot.com",
  messagingSenderId: "322249349615",
  appId: "1:322249349615:web:2148c620ce2ed1a9433e1a",
};

const app = initializeApp(firebaseConfig);
// Get a reference to the database service
export const database = getDatabase(app);
