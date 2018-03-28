// Variables
var nombre;
var apellido;
var email;
var usuario;
var password;
var boton;

// Asignacion
nombre =  document.getElementById('nombre');
apellido = document.getElementById('apellido');
email = document.getElementById('email');
usuario = document. getElementById('usuario');
password = document.getElementById('password');
boton = document.getElementById('btn-guardar');

//Mostar el elemento sellecionado
console.log(nombre);

// Funcion para mostra mensaje
function mostrarAlerta(mensaje)  {
  alert('El usuario realizo click soble el boton de envio');
};

// Asignacion de envento en el botón
boton.addEventListener('click', mostrarAlerta);
