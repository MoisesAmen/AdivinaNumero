var randomNumber = Math.floor(Math.random() * 1000) + 1;
var messageElement = document.getElementById("message");
var submitButton = document.getElementById("submit-button");
var attemptCountElement = document.getElementById("attempt-count");
var attemptCount = 0;

console.log(randomNumber);

// Escuchar el envío del formulario
document.getElementById("number-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  
  // Incrementar el contador de intentos
  attemptCount++;
  attemptCountElement.textContent = attemptCount;
  
  // Obtener el número ingresado por el usuario
  var userNumber = parseInt(document.getElementById("numero").value);
  if (isNaN(userNumber)) {
    showMessage("No ha ingresado ningun número. \nPerdiste un intento por imbecil", "red");
  }else{
     if (userNumber === randomNumber) {
      showMessage("¡Felicitaciones! \nHas adivinado el número correctamente.", "green");
      createPlayAgainButton();
    } else if (userNumber < randomNumber) {
        showMessage("El número secreto es mayor que " + userNumber + ". ¡Inténtalo de nuevo!", "red");
    } else {
        showMessage("El número secreto es menor que "+ userNumber + ". ¡Inténtalo de nuevo!", "red");
    }
  }
 

});

function showMessage(message, color) {
  var boton = document.getElementById("miBoton");
  
    messageElement.textContent = message;
    messageElement.classList.remove("green", "red");
    messageElement.classList.add(color);  
  
    if(color === "red"){
      boton.disabled = true;
      // Ocultar el mensaje después de 3 segundos
      setTimeout(function() {
        messageElement.textContent = ""; // Limpiar el contenido del mensaje
        messageElement.classList.remove("red");
        messageElement.classList.add("neutro"); 
        
        boton.disabled = false;
      }, 3000);
    }    
}

  // Función para crear un nuevo botón de "Volver a jugar"
function createPlayAgainButton() {
  // Crear un nuevo elemento de botón
  var button = document.createElement("button");
  button.textContent = "Volver a jugar";
  
  // Agregar un evento de clic al botón
  button.addEventListener("click", function() {
    // Generar un nuevo número aleatorio
    randomNumber = Math.floor(Math.random() * 1000) + 1;
    console.log(randomNumber);
    // Reiniciar el contador de intentos
    attemptCount = 0;
    document.getElementById("attempt-count").textContent = attemptCount;
    // Limpiar el valor del input
    document.getElementById("numero").value = "";
    // Mostrar el formulario nuevamente y ocultar el botón
    document.getElementById("number-form").style.display = "block";
    button.style.display = "none";
    // Limpiar el mensaje
    messageElement.textContent = ""; // Limpiar el contenido del mensaje
    messageElement.classList.remove("green");
    messageElement.classList.add("neutro");
  });
  
  // Agregar el botón al contenedor
  var container = document.getElementById("button-container");
  container.appendChild(button);
}