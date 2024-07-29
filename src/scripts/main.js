//Array de ranking de jugadores

//let jugadores = []

/* const playerRanking = "../playerRanking.json"

const rankingStorage = async (playerRanking) =>{
    try {
        const rankingStorageFetch = await fetch(`${playerRanking}`)
        const rankingstog = await rankingStorageFetch.json()
        if (localStorage.getItem("rankingstog") == null){
            const rankingJSON = JSON.stringify(rankingstog)
            localStorage.setItem("rankingstog", rankingJSON.toLocaleLowerCase().trim())
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Atención...',
            text: 'Error al cargar los jugadores!',
            showConfirmButton: false,
            timer: 3000
        });
    }
}
 */

/* let passwordAdmnin = [{
    usuario: "alanmorog",
    pass: 249309
}]
 */
let jugadores = [
    { id: 1, nombre: 'Grillo', puntos: 3, victorias: 1, derrotas: 1 },
    { id: 2, nombre: 'Dimox', puntos: 0, victorias: 0, derrotas: 1 },
    { id: 3, nombre: 'Pipi', puntos: 3, victorias: 1, derrotas: 1 },
    { id: 4, nombre: 'Dario', puntos: 6, victorias: 2, derrotas: 0 },
    { id: 5, nombre: 'Sergio', puntos: 2, victorias: 1, derrotas: 1 },
    { id: 6, nombre: 'Cuba', puntos: 3, victorias: 1, derrotas: 0 },
    { id: 7, nombre: 'Alan', puntos: 1, victorias: 0, derrotas: 2 },
    { id: 8, nombre: 'Gino', puntos: 3, victorias: 1, derrotas: 1 }
    // Agrega más jugadores según sea necesario
];


/* jugadores.sort((a,b) => b.puntos - a.puntos) */
jugadores.sort((a, b) => {
    if (b.puntos !== a.puntos) {
        return b.puntos - a.puntos; // Orden descendente por puntos
    } else if (b.victorias !== a.victorias) {
        return b.victorias - a.victorias; // Orden descendente por victorias
    } else {
        return a.derrotas - b.derrotas; // Orden ascendente por derrotas
    }
});

let ranking = jugadores.map((jugador, index) => ({
    puesto: index + 1,
    id: jugador.id,
    nombre: jugador.nombre,
    puntos: jugador.puntos,
    victorias: jugador.victorias,
    derrotas: jugador.derrotas
}))

console.table(ranking)



// Datos de usuario de ejemplo (simula una base de datos o autenticación)
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'usuario', password: '12345' }
];

// Obtener elementos del DOM
const login = document.getElementById('login');
const menuOculto = document.getElementById('menuOculto');

// Escuchar el evento submit del formulario
login.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de usuario y contraseña
    const username = login.username.value;
    const password = login.password.value;

    // Verificar las credenciales
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Mostrar el menú oculto
        menuOculto.style.display = 'block';
        // Opcional: Puedes redirigir a otra página aquí si lo deseas
    } else {
        alert('Usuario o contraseña incorrectos');
    }

    // Limpiar campos del formulario (opcional)
    login.reset();
});



document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    const resultadoDiv = document.getElementById("resultado");

    // Crear la tabla y sus elementos
    const tabla = document.createElement("table");
    const cabecera = document.createElement("thead");
    const cuerpo = document.createElement("tbody");

    // Crear la fila de cabecera
    const filaCabecera = document.createElement("tr");
    const cabeceraPosicion = document.createElement("th");
    cabeceraPosicion.textContent = "Posición";
    const cabeceraNombre = document.createElement("th");
    cabeceraNombre.textContent = "Nombre";
    const cabeceraPuntos = document.createElement("th");
    cabeceraPuntos.textContent = "Puntos";
    const cabeceraVictorias = document.createElement("th");
    cabeceraVictorias.textContent = "Victorias";
    const cabeceraDerrotas = document.createElement("th");
    cabeceraDerrotas.textContent = "Derrotas";
    filaCabecera.appendChild(cabeceraPosicion);
    filaCabecera.appendChild(cabeceraNombre);
    filaCabecera.appendChild(cabeceraPuntos);
    filaCabecera.appendChild(cabeceraVictorias);
    filaCabecera.appendChild(cabeceraDerrotas);
    cabecera.appendChild(filaCabecera);

    // Iterar sobre el array y crear filas para cada elemento
    ranking.forEach(function (jugador) {
        const filaJugador = document.createElement("tr");
        const celdaPosicion = document.createElement("td");
        celdaPosicion.textContent = jugador.puesto;
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = jugador.nombre;
        const celdaPuntos = document.createElement("td");
        celdaPuntos.textContent = jugador.puntos;
        const celdaVictorias = document.createElement("td");
        celdaVictorias.textContent = jugador.victorias;
        const celdaDerrotas = document.createElement("td");
        celdaDerrotas.textContent = jugador.derrotas;
        filaJugador.appendChild(celdaPosicion);
        filaJugador.appendChild(celdaNombre);
        filaJugador.appendChild(celdaPuntos);
        filaJugador.appendChild(celdaVictorias);
        filaJugador.appendChild(celdaDerrotas);
        cuerpo.appendChild(filaJugador);
    });

    // Agregar cabecera y cuerpo a la tabla
    tabla.appendChild(cabecera);
    tabla.appendChild(cuerpo);

    // Agregar la tabla al elemento <div> resultado
    resultadoDiv.appendChild(tabla);

})
// Obtener el elemento donde se mostrará la tabla


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const navbar = document.getElementById('navbar');
    toggleButton.addEventListener('click', () => {
        navbar.classList.add('collapsed');
        if (navbar.classList.contains('collapsed')) {
            navbar.classList.remove('collapsed');
            navbar.classList.add('expanded');
        } else {
            navbar.classList.remove('expanded');
            navbar.classList.add('collapsed');
        }

        // Añadir event listeners a los enlaces del navbar
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbar.classList.contains('expanded')) {
                    navbar.classList.remove('expanded');
                    navbar.classList.add('collapsed');
                }
            });
        });
    });
});