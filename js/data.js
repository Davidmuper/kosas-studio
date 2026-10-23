let usuario = [
    {
        id: "id1",
        nombre: "David Perez",
        correo: "correo@correo.com",
        telefono: "1234567890",
        contraseña: "12345"
    },
    {
        id: "id2",
        nombre: "Juan Perez",
        correo: "juan@correo.com",
        telefono: "0987654321",
        contraseña: "54321"
    }
]

export function buscarUsuario(correo, contraseña) {
   let auth = usuario.find((usuario)=> correo == usuario.correo && contraseña == usuario.contraseña)
   return auth
}

export function registrarUsuario() {

}

