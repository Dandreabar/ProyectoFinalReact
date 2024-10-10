import { initializeApp } from "firebase/app"
import  { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_Domain,
  projectId: "tienda-ematix",
  storageBucket: "tienda-ematix.appspot.com",
  messagingSenderId: "588134230079",
  appId: "1:588134230079:web:83410f413422748564b08a",
  measurementId: "G-JEKYEX9BGM"
};

const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app);
 