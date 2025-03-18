// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim(); // Corregido: antes decía ariaValueMax

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución de la función
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya está en la lista.`);
        return;
    }
    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    imputAmigo.ariaValu = "";

    // Actualizar la lista en el HTML
    actualizarLista();
}

