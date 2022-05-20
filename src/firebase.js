// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyC23jlgeRAFjFglNuKTU8PWqGNvRNNY58A',
  authDomain: 'app-movies-55749.firebaseapp.com',
  projectId: 'app-movies-55749',
  storageBucket: 'app-movies-55749.appspot.com',
  messagingSenderId: '848485002083',
  appId: '1:848485002083:web:c34b6653938d3ea0fe0156',
};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

 
