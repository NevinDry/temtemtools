import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyA3_MI1lzH9YomgSbvC09nXXA5Pwe3kPlg",
  authDomain: "temtemtools.firebaseapp.com",
  databaseURL: "https://temtemtools.firebaseio.com",
  projectId: "temtemtools",
  storageBucket: "",
  messagingSenderId: "934281914066",
  appId: "1:934281914066:web:8c86c85268805130"
};

// Initialize Firebase
try {
	firebase.initializeApp(firebaseConfig);
	firebase.firestore();
	console.log("Firebase Initialized");
} catch (err) {
	console.log("Error Initializing Firebase");
}

export default firebase;
