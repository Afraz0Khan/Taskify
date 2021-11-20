import { setDoc, doc, getDoc, updateDoc, arrayUnion } from '@firebase/firestore';
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


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
 




async function add_user(email, data) {
    try {
        const data_doc = doc(db, 'users', email)
        await setDoc(data_doc, data);

    } catch (error) {
        console.log(error.message);
    }
}

async function ready_user(uid) {
    try{
        const data_doc = doc(db, 'user-data', uid)
        await setDoc(data_doc, {
            tasks: []
        })
    }
    catch(error) {
        console.log(error.message);
    }
}

async function ready_schedule(uid) {
    try{
        const data_doc = doc(db, 'user-data', uid)
        await updateDoc(data_doc, {
            schedule: []
        })
    }
    catch(error) {
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
    try {
        const user = auth.currentUser;
        const uid = user.uid;

        const reqDoc = doc(db, 'user-data', uid);
        const user_doc = await getDoc(reqDoc)

        return user_doc.data().tasks;
    }
    catch(error) {
        console.log(error.message);
    }
}

async function get_schedule_data(uid){
    try {
        const user = auth.currentUser;
        const uid = user.uid;

        const reqDoc = doc(db, 'user-data', uid);
        const user_doc = await getDoc(reqDoc)

        return user_doc.data().schedule;
    }
    catch(error) {
        console.log(error.message);
    }
}

    


export { add_user, add_task, get_data, ready_user, ready_schedule, get_schedule_data };
export { app };
export { auth };

