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
        pais: {
            required: true
        },
        provincia: {
            required: true
        },
        telefono: {
            required: true,
            minlength: 9
        },
        movil: {
            required: true,
            minlength: 9
        },
        correo: {
            required: true,
            email: true
        },
        estudio: {
            required: true
        },
        repetir: {
            required: true,
        }
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
        },
        pais: {
            required: "Por favor, seleccione su país"
        },
        provincia: {
            required: "Por favor, seleccione su provincia"
        },
        telefono: {
            required: "Por favor, ingrese su teléfono",
            minlength: "El teléfono debe tener al menos 9 caracteres"
        },
        correo: {
            required: "Por favor, ingrese su correo",
            email: "Por favor, ingrese un correo válido"
        },
        estudio: {
            required: "Por favor, seleccione su nivel de estudios"
        },
        repetir: {
            required: "Por favor, seleccione si desea repetir el curso"
        },

    }
})