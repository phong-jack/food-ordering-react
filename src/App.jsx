import './App.css';
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import Message from './Message';
import axios from 'axios';


const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiaG90dG9EVEgiLCJyb2xlIjoic2hvcCIsImlzQWN0aXZlIjpmYWxzZSwic2hvcElkIjoxMDAwMDEyMTA4LCJpYXQiOjE3MTY1MTY2MzksImV4cCI6MTcxNjUxNzUzOX0.3ylCfLb9xkoWKUNSxfv5IH8aH88ZYQ8Z3HsQEyhnP0E';

const axiosClient = axios.create({
  baseURL: "http://[::1]:3000",
  headers: {
    Authorization: `bearer ${accessToken}`
  }
},);

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BN5tWYuOq6oRAKvfjrEIVhK8KIDlS4Ve1U0N853EXpGzz0qsJ0QHXK4hapQolI7rDxO9g5vGTsp5etkCzoO0JWc"
      });
      try {
        const res = await axiosClient.post("/api/notification/send-token", {
          notificationToken: token
        });
        console.log("response :: ", res);
      } catch (error) {
        console.log(error.response.data);
      }

    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }
  useEffect(() => {
    requestPermission();
  }, []);


  onMessage(messaging, (payload) => {
    const { title, body } = payload?.notification;

    console.log("incoming msg");
    toast.success(<Message notification={payload.notification} />);
    new Notification(title, { body });

  });

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default App;
