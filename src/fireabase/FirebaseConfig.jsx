// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore';
// import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyDoJvalILWn6esetahpL9BGRT__B5azWvI",
//   authDomain: "myfirstapp-38751.firebaseapp.com",
//   projectId: "myfirstapp-38751",
//   storageBucket: "myfirstapp-38751.appspot.com",
//   messagingSenderId: "273202707457",
//   appId: "1:273202707457:web:5724f212508b5b82f31400"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const fireDB = getFirestore(app);
// const auth = getAuth(app);

// export {fireDB, auth}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEfNDHr-Yz3pdlmvMIH1wgJ0Hq_p_PrpA",
  authDomain: "myfirstapp-d5542.firebaseapp.com",
  projectId: "myfirstapp-d5542",
  storageBucket: "myfirstapp-d5542.appspot.com",
  messagingSenderId: "901720188359",
  appId: "1:901720188359:web:8c4ab763717968d28225e2",
  measurementId: "G-8TKSJ87HG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {analytics, fireDB, auth}