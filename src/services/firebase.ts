import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCxWWAfPrtmVlfiV3EA2oUJkv6w4EvCpm4",
  authDomain: "letmeask-ac0a8.firebaseapp.com",
  databaseURL: "https://letmeask-ac0a8-default-rtdb.firebaseio.com",
  projectId: "letmeask-ac0a8",
  storageBucket: "letmeask-ac0a8.appspot.com",
  messagingSenderId: "1050176319940",
  appId: "1:1050176319940:web:eca0c7a654a3cf7639b491",
  measurementId: "G-8YJMNGHPPW"
};

firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();
const database = firebase.database();

export { firebase, auth, database }