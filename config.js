import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBqt3Ow3Yf208SK_tPE8nZj8cpa5TiRxvo",
    authDomain: "shoppingapp-19800.firebaseapp.com",
    databaseURL: "https://shoppingapp-19800.firebaseio.com",
    projectId: "shoppingapp-19800",
    storageBucket: "shoppingapp-19800.appspot.com",
    messagingSenderId: "561685498270",
    appId: "1:561685498270:web:fdc35d4c24c90eb6efee8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore() 