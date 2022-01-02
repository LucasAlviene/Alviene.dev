import { initializeApp } from 'firebase/app';

import firebaseConfig from '../firebase.json';
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage';
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const storage = getStorage();
export default app;
