import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyASqc7lvR5ZLaSUQsUH3RW8q47yTqkJjDY",
    authDomain: "react-slack-clone-92bf6.firebaseapp.com",
    databaseURL: "https://react-slack-clone-92bf6.firebaseio.com",
    projectId: "react-slack-clone-92bf6",
    storageBucket: "react-slack-clone-92bf6.appspot.com",
    messagingSenderId: "867930483940"
  };
  firebase.initializeApp(config);
  
  export default firebase;