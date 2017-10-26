(function() {

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

  // Se crea una variable con el id imagencita
  var imgn = document.getElementById("imagencita");
  const btnLogout = document.getElementById('btnLogout');

  //al presionar el boton con id btnLogout ....
  btnLogout.addEventListener('click', e => {
  //cierro la sesión con la funcion y regreso a mi pagina inicial index.html  
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
       window.location.href = 'index.html';
    }).catch(function(error) {
      // An error happened.
    });

  });

  // Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      //con esto solo veo los datos de mi conexion a firebase
      console.log(firebaseUser);
    //se crean dos variables, una para traer el nombre e imagen de mi cuenta de google
     var miNombre = firebaseUser.displayName; 
     var myImage = firebaseUser.photoURL; 
     //aqui imprimo o visualizo mi contenido en html
      document.querySelector("h3.test").textContent = "Bienvenido " + miNombre; 
      imagencita.setAttribute("src", myImage);
    } else {
      window.location.href = 'index.html';
    }    
  });
}());