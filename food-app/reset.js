
const firebaseConfig = {
    apiKey: "AIzaSyBYwxYb2JcEnsFlN023OWZ965mwWKRPHCs",
    authDomain: "food-app-e7bb8.firebaseapp.com",
    projectId: "food-app-e7bb8",
    storageBucket: "food-app-e7bb8.appspot.com",
    messagingSenderId: "145868232394",
    appId: "1:145868232394:web:c2bd5d46a796e9d60d0633"
  };

//initializing firebase.
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

let forgotPassword = document.getElementById('forgot');
let email = document.getElementById('inputEmail');

forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked')
    console.log(email.value);
    auth.sendPasswordResetEmail(email.value)
    .then(() => {
        alert('reset link sent!')
        window.location='reset.html';
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('error code', errorCode);
        console.log('error message', errorMessage);
    })
})