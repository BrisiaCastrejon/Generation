import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB_tNCxjyBjaXqjvn8NBJJXDkB2IF0kErQ",
    authDomain: "generation-f110f.firebaseapp.com",
    databaseURL: "https://generation-f110f.firebaseio.com",
    projectId: "generation-f110f",
    storageBucket: "generation-f110f.appspot.com",
    messagingSenderId: "330788783755"
  };

const ConfigFire = firebase.initializeApp(config);

export{ConfigFire};