import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-6rbrZFUILOPDkzQekqKinCglczfDtDM",
    authDomain: "react-19970.firebaseapp.com",
    projectId: "react-19970",
    storageBucket: "react-19970.appspot.com",
    messagingSenderId: "385473747471",
    appId: "1:385473747471:web:103b6b391629568a39617a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);