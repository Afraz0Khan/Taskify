import { collection, addDoc, setDoc, doc, getDoc, updateDoc, arrayUnion } from '@firebase/firestore';
import { getFirestore } from "firebase/firestore";

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
const auth = getAuth(app);
const db = getFirestore(app);
 




function add_user(collection, email, data) {
    try {
        setDoc(doc(db, collection, email), data);
    } catch (error) {
        console.log(error.message);
    }
    
}

async function add_task(data) {
    try {
        const user = auth.currentUser;
        const uid = user.uid;
        const data_doc = doc(db, 'user-data', uid);

        await updateDoc(data_doc, {
            tasks: arrayUnion(data)
        }, { merge: true });

    } catch (error) {
        console.log(error.message);
    }
}


async function get_data() {
    try{
        const user = auth.currentUser;
        const uid = user.uid;

        const reqDoc = doc(db, 'user-data', uid);
        const info = await getDoc(reqDoc);
        console.log(info.data());
    }
    catch(error) {
        console.log(error.message);
    }
}

    


export { add_user, add_task, get_data };
export { app };
export { auth };

