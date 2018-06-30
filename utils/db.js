import firebase from "firebase";

if (!firebase.apps.length) {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDewAPSfzjYg1yy2z2wz8D2TDZgovGYsLI",
    authDomain: "max-reps-73455.firebaseapp.com",
    databaseURL: "https://max-reps-73455.firebaseio.com",
    projectId: "max-reps-73455",
    storageBucket: "",
    messagingSenderId: "918562408360"
  };
  firebase.initializeApp(config);
}

export default firebase.database();
