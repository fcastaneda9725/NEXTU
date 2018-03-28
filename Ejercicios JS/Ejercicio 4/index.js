// Variables
var nombre;
var apellido;
var email;
var usuario;
var password;
var boton;

// Asignacion
nombre =  document.getElementById('nombre').value;
apellido = document.getElementById('apellido').value;
email = document.getElementById('email').value;
usuario = document. getElementById('usuario').value;
password = document.getElementById('password').value;
boton = document.getElementById('btn-guardar');

//Mostar el elemento sellecionado
console.log(nombre);

// Funcion para mostra mensaje
function mostrarAlerta(mensaje)  {
  alert('El usuario realizo click soble el boton de envio');
};

// Asignacion de envento en el botón
boton.addEventListener('click', mostrarAlerta);
