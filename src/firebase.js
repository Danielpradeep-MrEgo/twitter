import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxVZzKRglx2XMG2tY_ln2GRgzCfEYyqvY",
  authDomain: "twitter-35712.firebaseapp.com",
  databaseURL: "https://twitter-35712.firebaseio.com",
  projectId: "twitter-35712",
  storageBucket: "twitter-35712.appspot.com",
  messagingSenderId: "1041044185211",
  appId: "1:1041044185211:web:3f8078fc8e3814956382de",
  measurementId: "G-PPCLRPRWFN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
