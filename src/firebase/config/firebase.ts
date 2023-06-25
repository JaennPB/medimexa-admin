import { initializeApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  production: false,
  apiKey: "AIzaSyDD-Bi5mnpuEkeNwzlqdhPN-ODfSQX6zg0",
  authDomain: "medimexa-back.firebaseapp.com",
  projectId: "medimexa-back",
  storageBucket: "medimexa-back.appspot.com",
  messagingSenderId: "376506424578",
  appId: "1:376506424578:web:9d61e0981dc00a5422b61b"
};

// Initialize Firebase

let app:any = null;
let db:any = null;
let auth:any = null;
let storage:any = null;


if (getApps().length < 1) {
  app = initializeApp(firebaseConfig)
}

db = getFirestore();
auth = getAuth();
storage = getStorage();

export {
  auth,
  db,
  storage
}
export default db;