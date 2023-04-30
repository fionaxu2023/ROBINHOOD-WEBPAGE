import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMmNWKzQuOFoKQbLu_TH4LB2kP3tJOIDQ",
  authDomain: "robinhood-clone-576a6.firebaseapp.com",
  projectId: "robinhood-clone-576a6",
  storageBucket: "robinhood-clone-576a6.appspot.com",
  messagingSenderId: "957140687640",
  appId: "1:957140687640:web:9ab0b8c3361075e0041c6d",
  measurementId: "G-F3RGGY24DV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };