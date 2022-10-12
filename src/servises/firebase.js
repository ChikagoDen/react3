import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth"
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCl4XRiPzV_Afv6lHK-vSZDsW-qaxjUxUQ",
    authDomain: "fir-lesson-180a6.firebaseapp.com",
    projectId: "fir-lesson-180a6",
    storageBucket: "fir-lesson-180a6.appspot.com",
    messagingSenderId: "441606451149",
    appId: "1:441606451149:web:c4f39f987be27d7af99e84"
};

const  firebaseDb=firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
