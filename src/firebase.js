import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDCx8NVaS709s3QRTX_VNPd4elDBfTXsIU",
  authDomain: "first-firebase-e2545.firebaseapp.com",
  projectId: "first-firebase-e2545",
  storageBucket: "first-firebase-e2545.appspot.com",
  messagingSenderId: "583932390517",
  appId: "1:583932390517:web:6fc08c9b1d372bf1eb5c3c"
};
// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();  

export {db};
 