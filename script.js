console.log("Hola mundo");

//elementos guardados en variables
var input_nombre = document.getElementById("name");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("submit");

console.log(input_nombre);
console.log(input_email);
console.log(input_submit);

input_submit.addEventListener("click", validarFormulario)
  

function validarFormulario(event) {
     console.log("Botón de envío clickeado");
     event.preventDefault(); // Evita que el formulario se envíe automáticamente

     var valor_nombre = input_nombre.value;
        var valor_email = input_email.value;

        console.log(valor_nombre);
        console.log(valor_email);

 //PlaceHolders
var placeholder_nombre = document.getElementById("name").placeholder;
var placeholder_email = document.getElementById("email").placeholder;
//respuesta de placeholder
placeholder_nombre.innerHTML = valor_nombre;
placeholder_email.innerHTML = valor_email;

//respuestas mostradas
elemento_feedback = document.getElementById("feedback");
elemento_feedback.classList.add("oculto");
elemento_feedback.innerHTML = "¡Gracias Jugador " + valor_nombre + "!";

}