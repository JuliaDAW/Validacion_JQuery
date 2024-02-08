$("#id_matricularse").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3
        },
        apellido1: {
            required: true,
            minlength: 3
        },
        apellido2: {
            required: true,
            minlength: 3
        },
        dni: {
            required: true,
            minlength: 9
        },
        nacer: {
            required: true,
            date: true
        },
    },
    messages: {
        nombre: {
            required: "Por favor, ingrese su nombre",
            minlength: "El nombre debe tener al menos 3 caracteres"
        },
        apellido1: {
            required: "Por favor, ingrese su primer apellido",
            minlength: "El apellido debe tener al menos 3 caracteres"
        },
        apellido2: {
            required: "Por favor, ingrese su segundo apellido",
            minlength: "El apellido debe tener al menos 3 caracteres"
        },
        dni: {
            required: "Por favor, ingrese su DNI",
            minlength: "El DNI debe tener al menos 9 caracteres"
        },
        nacer: {
            required: "Por favor, ingrese su fecha de nacimiento",
            date: "Por favor, ingrese una fecha válida"
        }
    }
})