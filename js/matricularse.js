$.validator.addMethod("DNI", function(value) {
    return /^[0-9]{8}[A-Za-z]{1}$/.test(value);
}, "Por favor, ingrese un DNI válido");



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
            DNI: true
        },
        nacer: {
            required: true,
            date: true
        },
        pais: {
            required: true
        },
        cp: {
            required: true,
            number: true,
            minlength: 5,
            maxlength: 5
        },
        nacionalidad: {
            required: true
        },
        direccion: {
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
        repite: {
            required: true,
        },
        ordenador: {
            required: true,
        },
        centro: {
            required: true,
        },
        estudio: {
            required: true,
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
        repite: {
            required: "Por favor, seleccione si ha repetido"
        },
        ordenador: {
            required: "Por favor, seleccione si tiene ordenador"
        },
        centro: {
            required: "Por favor, seleccione su centro"
        },
        estudio: {
            required: "Por favor, seleccione su curso de interés"
        },
        nacionalidad: {
            required: "Por favor, seleccione su nacionalidad"
        },
        direccion: {
            required: "Por favor, ingrese su dirección"
        },
        cp: {
            required: "Por favor, ingrese su código postal",
            number: "Por favor, ingrese un código postal válido",
            minlength: "El código postal debe tener 5 caracteres",
            maxlength: "El código postal debe tener 5 caracteres"
        },
        movil: {
            required: "Por favor, ingrese su móvil",
            minlength: "El móvil debe tener al menos 9 caracteres"
        }

    },
    submitHandler: function(form) {
        form.submit();
    },
    invalidHandler: function(event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
            var message = errors == 1 ?
                'Por favor, corrija el error en el formulario' :
                'Por favor, corrija los ' + errors + ' errores en el formulario';
            $("div.error span").html(message);
            $("div.error").show();
        } else {
            $("div.error").hide();
        }
    }
})