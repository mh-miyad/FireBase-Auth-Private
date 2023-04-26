// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRxcy5bxpbm_XiKWSRLu_7JlfPdZ_6Ddw",
  authDomain: "the-news-protector-a26de.firebaseapp.com",
  projectId: "the-news-protector-a26de",
  storageBucket: "the-news-protector-a26de.appspot.com",
  messagingSenderId: "421418110557",
  appId: "1:421418110557:web:cfbde91aae22e50c4d87b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app