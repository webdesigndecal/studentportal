import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVaGVOKiA-poVbyfOuCCDwBCIHajcWUGU",
    authDomain: "wdd-portal-adf47.firebaseapp.com",
    projectId: "wdd-portal-adf47",
    storageBucket: "wdd-portal-adf47.appspot.com",
    messagingSenderId: "449552839172",
    appId: "1:449552839172:web:f7097dc57f1131adc27b51"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;