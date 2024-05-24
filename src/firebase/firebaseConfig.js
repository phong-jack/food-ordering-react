import { initializeApp } from 'firebase/app';
import { getMessaging } from "firebase/messaging";

//Firebase Config values imported from .env file
const firebaseConfig = {
  apiKey: "AIzaSyAhGdmVkQMCRb2DF5vuM78WpFCJzPMnSX0",
  authDomain: "food-ordering-notification.firebaseapp.com",
  projectId: "food-ordering-notification",
  storageBucket: "food-ordering-notification.appspot.com",
  messagingSenderId: "641792637965",
  appId: "1:641792637965:web:63c4b88015c1acf9eee944",
  measurementId: "G-9JF1LT80FN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging service
export const messaging = getMessaging(app);