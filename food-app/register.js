const firebaseConfig = {
    apiKey: "AIzaSyBYwxYb2JcEnsFlN023OWZ965mwWKRPHCs",
    authDomain: "food-app-e7bb8.firebaseapp.com",
    projectId: "food-app-e7bb8",
    storageBucket: "food-app-e7bb8.appspot.com",
    messagingSenderId: "145868232394",
    appId: "1:145868232394:web:c2bd5d46a796e9d60d0633"
  };

  //initializing firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  //sellecting each id
  let signUpButton = document.getElementById('signup')
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  signUpButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('clicked');
      console.log(email.value, password.value);
      auth.createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
          location.reload();
          var user = userCredential.user;
          console.log('user', user.email);
          alert(`registered as ${user.email}`);
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('error code', errorCode)
          console.log('error message', errorMessage);
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

//   reset.addEventListener('click', (e) => {
//       e.preventDefault();
//       auth.sendPasswordResetEmail(email.value)
//       .then((success) => {
//             alert('password reset link sent!', success);
//       })
//       .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           console.log('error code', errorCode);
//           console.log('error message', errorMessage);
//       });
//   })