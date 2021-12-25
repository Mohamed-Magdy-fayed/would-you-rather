import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxwrTCZY2zDTKoUUdVAA5dn_ayUW1qSTw",
    authDomain: "would-you-rather-3302c.firebaseapp.com",
    projectId: "would-you-rather-3302c",
    storageBucket: "would-you-rather-3302c.appspot.com",
    messagingSenderId: "427909105110",
    appId: "1:427909105110:web:07aa4def09e4828598d077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

// const firestore = app.firestore()
// export const database = {
//   folders: firestore.collection("folders"),
//   files: firestore.collection("files"),
//   formatDoc: doc => {
//     return { id: doc.id, ...doc.data() }
//   },
//   getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
// }