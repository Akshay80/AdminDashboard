import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC9X8yl0Iv8D5Lb4HHgQRA-Exi0I8NCq84",
    authDomain: "admindashboard-9a8a9.firebaseapp.com",
    projectId: "admindashboard-9a8a9",
    storageBucket: "admindashboard-9a8a9.appspot.com",
    messagingSenderId: "603791568676",
    appId: "1:603791568676:web:362184e2126110cff0cdb1",
    measurementId: "G-SKSDRJD9MQ"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }