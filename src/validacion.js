document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;

    // Validaciones personalizadas
    let errores = [];

    if (nombre.trim() === "") {
        errores.push("El nombre es obligatorio.");
    }

    if (!validateEmail(email)) {
        errores.push("El email no es válido.");
    }

    if (edad <= 0) {
        errores.push("La edad debe ser mayor a 0.");
    }

    // Mostrar errores o guardar datos
    if (errores.length > 0) {
        console.error("Errores:", errores);
    } else {
        // Si no hay errores, muestra los datos en la consola
        console.log("Datos guardados correctamente:");
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Edad:", edad);

        // Aquí podrías enviar los datos a un servidor o hacer cualquier otra operación
        alert("Formulario enviado correctamente. Ver los datos en la consola.");
    }
});

// Función de validación de email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}