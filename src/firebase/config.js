import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyC8_3bBr4xlDyx7Nwo3ZK-OrPtFSGnfPJQ",
//     authDomain: "gotwit-7f38c.firebaseapp.com",
//     projectId: "gotwit-7f38c",
//     storageBucket: "gotwit-7f38c.appspot.com",
//     messagingSenderId: "708236474581",
//     appId: "1:708236474581:web:de0c29e8f4a7c47b768a5c"
//   };
  const firebaseConfig = {
    apiKey: "AIzaSyBsFz-HZzsWFdWlmA87pBpqxnrrsQiSF8Q",
      authDomain: "gotwit-app.firebaseapp.com",
      projectId: "gotwit-app",
      storageBucket: "gotwit-app.appspot.com",
      messagingSenderId: "957411813825",
      appId: "1:957411813825:web:50f6aad6ae9ec3f6a4e740",
      measurementId: "G-2QGKZDN1WN"
    };
export default firebase.initializeApp(firebaseConfig)

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBsFz-HZzsWFdWlmA87pBpqxnrrsQiSF8Q",
//   authDomain: "gotwit-app.firebaseapp.com",
//   projectId: "gotwit-app",
//   storageBucket: "gotwit-app.appspot.com",
//   messagingSenderId: "957411813825",
//   appId: "1:957411813825:web:50f6aad6ae9ec3f6a4e740",
//   measurementId: "G-2QGKZDN1WN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);