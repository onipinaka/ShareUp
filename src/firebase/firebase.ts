import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: 'AIzaSyAcW-nmpGGEcSo3WL0uSmKPbx7LQjLmyU8',
    authDomain: 'shareup-e8008.firebaseapp.com',
    projectId: 'shareup-e8008',
    storageBucket: 'shareup-e8008.firebasestorage.app',
    messagingSenderId: '210621028097',
    appId: '1:210621028097:web:043dd62dd49f64ce86ad00',
    measurementId: 'G-7PDJWYNRY0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);