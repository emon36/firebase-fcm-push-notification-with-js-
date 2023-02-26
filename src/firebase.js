import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from "firebase/messaging";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoSZlKI_LmVxlJ6cEEBQ4SmwWLuAeaFp4",
    authDomain: "node-api-e3f24.firebaseapp.com",
    projectId: "node-api-e3f24",
    storageBucket: "node-api-e3f24.appspot.com",
    messagingSenderId: "628064235934",
    appId: "1:628064235934:web:8e5b44eade62baa885268f",
    measurementId: "G-HXRD30MD20"
};

export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

