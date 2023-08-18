import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtDd7t9a8X5P7igQhLhxH-Skw0X56Rtmk',
  authDomain: 'clientform-a0ed9.firebaseapp.com',
  projectId: 'clientform-a0ed9',
  storageBucket: 'clientform-a0ed9.appspot.com',
  messagingSenderId: '296818860767',
  appId: '1:296818860767:web:cf97c4246873ed90e93f6a',
  measurementId: 'G-ZHGXMJJKRC'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
export default firebase;
