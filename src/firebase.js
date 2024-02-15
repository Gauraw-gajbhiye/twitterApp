import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBk8YNClT6CSHspZee0p46KUsSh9Dog3gc",
    authDomain: "twitterclone-cd294.firebaseapp.com",
    projectId: "twitterclone-cd294",
    storageBucket: "twitterclone-cd294.appspot.com",
    messagingSenderId: "830735769427",
    appId: "1:830735769427:web:a224ead6ddab2331d50ba6",
    measurementId: "G-0M1K4J2HXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export componates for use in another file**
export { db, storage, auth, analytics };
