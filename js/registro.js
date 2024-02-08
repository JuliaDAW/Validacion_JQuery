$("#id_registrarse").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3
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
    }
})