import firebase from 'firebase/app';

require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyB8_ca5tiLxhHrGq2lCTsf7HElnfRYMEv4",
    authDomain: "react-native-1-9f000.firebaseapp.com",
    projectId: "react-native-1-9f000",
    storageBucket: "react-native-1-9f000.appspot.com",
    messagingSenderId: "954491643146",
    appId: "1:954491643146:web:b711d348bce5fa578c46f3",
    measurementId: "G-4H5H8N9JQ4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
