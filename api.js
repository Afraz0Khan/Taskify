import { collection, addDoc, setDoc, doc } from '@firebase/firestore';
import app from './firebase';
import { getFirestore } from "firebase/firestore";


const db = getFirestore(app);

function add(collection, email, data) {
    try {
        setDoc(doc(db, collection, email), data);
    } catch (error) {
        console.log(error.message);
    }
    
}


export default add;