import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



let firebaseConfig = {
    apiKey: "AIzaSyAoB_VDHxQJfiIfMrU7bwYddluqmuJqatM",
    authDomain: "finanstx-a6e0f.firebaseapp.com",
    projectId: "finanstx-a6e0f",
    storageBucket: "finanstx-a6e0f.appspot.com",
    messagingSenderId: "2850361142",
    appId: "1:2850361142:web:6d4fda760f6a3c29a02d97",
    measurementId: "G-H2JMFY9RH6"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
