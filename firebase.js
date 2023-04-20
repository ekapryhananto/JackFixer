// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDTQfhGz6wnVnA_GOJAuXqxNJmzTQrd_iE',
  authDomain: 'jackfixer-274d8.firebaseapp.com',
  projectId: 'jackfixer-274d8',
  storageBucket: 'jackfixer-274d8.appspot.com',
  messagingSenderId: '227354174301',
  appId: '1:227354174301:web:5dc474cb40267271ba7eb4',
  measurementId: 'G-VV21BJGKS4',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {auth};
