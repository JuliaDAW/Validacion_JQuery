$("#id_registrarse").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            remote: {
                url: "php/validarNombre.php",
                type: "post",
                data: {
                    nombre: function() {
                        return $("#nombre").val();
                    }
                }
            }
        },
        correo: {
            required: true,
            email: true
        },
        contrasenia: {
            required: true,
            minlength: 6
        },
        repetir: {
            required: true,
            equalTo: "#id_contrasenia"
        }
    },
    messages: {
        nombre: {
            required: "Por favor, ingrese su nombre",
            minlength: "El nombre debe tener al menos 3 caracteres",
            remote: "El nombre ya está en uso"
        },
        correo: {
            required: "Por favor, ingrese su correo",
            email: "Por favor, ingrese un correo válido"
        },
        contrasenia: {
            required: "Por favor, ingrese su contraseña",
            minlength: "La contraseña debe tener al menos 6 caracteres"
        },
        repetir: {
            required: "Por favor, repita su contraseña",
            equalTo: "Las contraseñas no coinciden"
        }
    }
})