import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signInWithPopup, FacebookAuthProvider, } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdHF04QYPSlAATpMHtRnkRnP16Dx03IC8",
    authDomain: "loginpage-cc181.firebaseapp.com",
    projectId: "loginpage-cc181",
    storageBucket: "loginpage-cc181.appspot.com",
    messagingSenderId: "620326712139",
    appId: "1:620326712139:web:852cdc96f9f2607f576ece",
    measurementId: "G-V755B00Q7W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const facebookProvider = new FacebookAuthProvider();

const facebookBtn = document.getElementById("facebookBtn");

facebookBtn.addEventListener("click", (e) => {
    console.log("object");
    signInWithPopup(auth, facebookProvider)
        .then(() => {
            alert("success");
        })
        .catch((err) => {
            console.log(err);
        });
})