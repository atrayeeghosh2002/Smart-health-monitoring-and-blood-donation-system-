// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF-npj7pHN0UYGrrxJT8DW2ydtf6rKRCk",
  authDomain: "smart-health-monitor-6a303.firebaseapp.com",
  projectId: "smart-health-monitor-6a303",
  storageBucket: "smart-health-monitor-6a303.appspot.com",
  messagingSenderId: "847698031835",
  appId: "1:847698031835:web:5626f4bede8183eb0d88fe",
  // httpProxy: "http://172.16.199.20:8080",
  // httpsProxy: "http://172.16.199.20:8080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const redb = getDatabase();