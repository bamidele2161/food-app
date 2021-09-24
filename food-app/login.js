
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

let signInButton = document.getElementById('signin')
signInButton.addEventListener('click', (e) => {
    //prevent Default form submission behaviour
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById('inputEmail')
    var password = document.getElementById('inputPassword')
    console.log(email.value);
    console.log(password.value);
    auth.signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        // location.relaod();
        //signed in
        var user = userCredential.user;
        console.log('user', user.email);
        alert(`signed in as ${user.email}`);
        window.location = 'order.html'
        
        
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        //alert('error code', errorCode)
        alert(errorMessage);
    });
})


auth.onAuthStateChanged((user) => {
    if(user) {
        var email = user.email
        var users = document.getElementById('user')
        var text = document.createTextNode(email);
        users.appendChild(text);
        console.log(users)
    }
    else{
        alert('no user signed in');
    }
})

// const signInWithEmailAndPassword = async (email, password) => {
//     try {
//         await app.auth().signInWithEmailAndPassword(email, password);
//     } catch(err) {
//         console.error(err);
//         alert(err.message);
//     }
// };