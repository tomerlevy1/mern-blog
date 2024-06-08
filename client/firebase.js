// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-2b9a4.firebaseapp.com',
  projectId: 'mern-blog-2b9a4',
  storageBucket: 'mern-blog-2b9a4.appspot.com',
  messagingSenderId: '1089725149624',
  appId: '1:1089725149624:web:8feaf450dfbec6e4119f4d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
