console.log("Hola mundo");

//elementos guardados en variables
var input_nombre = document.getElementById("name");
var input_email = document.getElementById("email");
var form = document.getElementById("formulario");

console.log(input_nombre);
console.log(input_email);

form.addEventListener("submit", validarFormulario)
  

function validarFormulario(event) {
     console.log("Botón de envío clickeado");
     event.preventDefault(); // Evita que el formulario se envíe automáticamente

     var valor_nombre = input_nombre.value;
     var valor_email = input_email.value;

     console.log(valor_nombre);
     console.log(valor_email);

     // Obtener valor del joystick
     var joystick = document.querySelector('input[name="joystick"]:checked');
     var joystickValor = joystick ? joystick.value : "No";

     // Obtener juego seleccionado
     var juego = document.getElementById("game").value;

     console.log("Joystick: " + joystickValor);
     console.log("Juego: " + juego);

     //respuestas mostradas
     elemento_feedback = document.getElementById("feedback");
     elemento_feedback.classList.add("oculto");
     elemento_feedback.innerHTML = "¡Gracias Jugador " + valor_nombre + "! Te enviaremos información a " + valor_email;
}