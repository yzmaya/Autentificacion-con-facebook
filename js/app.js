(function () {
//Inicializar Firebase
  var config = {
      apiKey: "AIzaSyBOylNl-Ka7T5yo5EWl2KMaIqXu4cuj4fg",
    authDomain: "vue-test-e6acb.firebaseapp.com",
    databaseURL: "https://vue-test-e6acb.firebaseio.com",
    projectId: "vue-test-e6acb",
    storageBucket: "vue-test-e6acb.appspot.com",
    messagingSenderId: "920258140742"
  };
  firebase.initializeApp(config);

//creamos el objeto de autentificación de google  
var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('public_profile');

  // Le decimos que va a hacer nuestro boton con id btnGoogle
  btnFacebook.addEventListener('click', e => {
        //en seguida abrira un pop up indicando que usará la información básica de su perfil
        //(basicamente es boilerplate de la documentación de firebase)
        firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });


// Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser =>  {
//Si existe autenticación hacer.....
  if(firebaseUser) {
      console.log(firebaseUser);
      window.location.href = "home.html";
    } else {
      console.log('no logueadox');
     
    }    

});

} ());

