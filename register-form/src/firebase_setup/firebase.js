// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAMC2z0StL7YfyGIKQ_2heah9xfYGslVzw",

  authDomain: "firstreactproject-80e51.firebaseapp.com",

  projectId: "firstreactproject-80e51",

  storageBucket: "firstreactproject-80e51.appspot.com",

  messagingSenderId: "664107583112",

  appId: "1:664107583112:web:f9dfc8581a99b2b7fb413d",

  measurementId: "G-6M00X5LNGE"

};




// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


export const firestore = getFirestore(app)