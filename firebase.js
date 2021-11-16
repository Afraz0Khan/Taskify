// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4gkUJtwFX_-R7TvAaHevXq8n-PjZOU4U",
  authDomain: "done-web-5dba3.firebaseapp.com",
  projectId: "done-web-5dba3",
  storageBucket: "done-web-5dba3.appspot.com",
  messagingSenderId: "251655430744",
  appId: "1:251655430744:web:2db1459419e04a2aa5602d"
};

// Initialize Firebase
// let app;

// app = firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

// export { auth }

const app = initializeApp(firebaseConfig);



export { app };