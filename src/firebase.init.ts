// src/firebase.init.ts


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { environment } from './environments/environment';

const firebaseApp = initializeApp(environment.firebase);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Export so other files can use them
export { auth, db };