// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCectbZZr3-4cXTD6NOb_ZYWseajNoMrZk",
  authDomain: "assignment-9-event.firebaseapp.com",
  projectId: "assignment-9-event",
  storageBucket: "assignment-9-event.appspot.com",
  messagingSenderId: "702860548698",
  appId: "1:702860548698:web:5f79aa6e6ba71511431663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app