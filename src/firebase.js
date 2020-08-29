import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAAlkoKXLvSfOe6GFoYxxlP_x6KYDuSs1c",
    authDomain: "dog-cb19f.firebaseapp.com",
    databaseURL: "https://dog-cb19f.firebaseio.com",
    projectId: "dog-cb19f",
    storageBucket: "dog-cb19f.appspot.com",
    messagingSenderId: "607933378962",
    appId: "1:607933378962:web:3c3964e34b2c42a293d14b",
    measurementId: "G-5G41BW380B",
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };