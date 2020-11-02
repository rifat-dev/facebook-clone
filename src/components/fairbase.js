// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCPgb02d1JdelwBkPcGNerPjIGnwguRTt4",
    authDomain: "facebook-clone-a0220.firebaseapp.com",
    databaseURL: "https://facebook-clone-a0220.firebaseio.com",
    projectId: "facebook-clone-a0220",
    storageBucket: "facebook-clone-a0220.appspot.com",
    messagingSenderId: "677112468637",
    appId: "1:677112468637:web:012466b9331508d08eb074",
    measurementId: "G-0S6582RWV3"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {provider,auth};

  export default db;

  