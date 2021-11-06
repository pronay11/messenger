import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAwhE4Y57S22ES16wE5RvpBkGCuFHPVlGk",
    authDomain: "messenger-ed85a.firebaseapp.com",
    projectId: "messenger-ed85a",
    storageBucket: "messenger-ed85a.appspot.com",
    messagingSenderId: "39635853569",
    appId: "1:39635853569:web:f6804b0c2e3ec79b837b00",
    measurementId: "G-HER9NRH0PY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

const auth= firebase.auth();
const db = firebase.firestore();
export{ auth, db };