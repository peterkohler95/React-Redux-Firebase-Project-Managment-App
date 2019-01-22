import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBlPSbLLxZ-WrK17ewzEkbEcvhjSJJYzNE",
    authDomain: "my-project-managment-app.firebaseapp.com",
    databaseURL: "https://my-project-managment-app.firebaseio.com",
    projectId: "my-project-managment-app",
    storageBucket: "my-project-managment-app.appspot.com",
    messagingSenderId: "392407288271"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;

