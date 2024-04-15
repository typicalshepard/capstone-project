import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBCQ5_9A8CcvgZtlt7GaL7PQS8mFA2recI",
  authDomain: "capstone-project-e60df.firebaseapp.com",
  databaseURL: "https://capstone-project-e60df-default-rtdb.firebaseio.com",
  projectId: "capstone-project-e60df",
  storageBucket: "capstone-project-e60df.appspot.com",
  messagingSenderId: "685671688286",
  appId: "1:685671688286:web:962f7766a5f37fe51f6ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Realtime Database instance
const database = getDatabase(app); // Pass the app instance to getDatabase

export default database;


