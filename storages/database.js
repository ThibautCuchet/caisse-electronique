import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnRyuk4xLTAPgXlxxMl8oFPrde-0Mhj9k",
  authDomain: "friterie-54920.firebaseapp.com",
  databaseURL: "https://friterie-54920.firebaseio.com",
  projectId: "friterie-54920",
  storageBucket: "friterie-54920.appspot.com",
  messagingSenderId: "478221413888",
  appId: "1:478221413888:web:1792a7cd24a67adb04b2e5",
  measurementId: "G-VPMN3VV6K5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
