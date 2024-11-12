document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;

    
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

    
    if (errores.length > 0) {
        console.error("Errores:", errores);
    } else {
        
        console.log("Datos guardados correctamente:");
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Edad:", edad);

        
        alert("Formulario enviado correctamente. Ver los datos en la consola.");
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}