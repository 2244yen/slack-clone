import { initializeApp } from 'firebase/app'

export function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCuW-Ymi-vf5-qYVGfwSL4vbAnu54pjEC0",
    authDomain: "slack-42ad8.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://slack-42ad8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "slack-42ad8",
    // storageBucket: "PROJECT_ID.appspot.com",
    // messagingSenderId: "SENDER_ID",
    // appId: "APP_ID",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    // measurementId: "G-MEASUREMENT_ID",
  };
  
  const app = initializeApp(firebaseConfig);
}