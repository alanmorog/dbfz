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
    { id: 1, nombre: 'Grillo', puntos: 11, victorias: 4, derrotas: 1 },
    { id: 3, nombre: 'Pipi', puntos: 8, victorias: 3, derrotas: 1 },
    { id: 4, nombre: 'Dario', puntos: 12, victorias: 4, derrotas: 1 },
    { id: 5, nombre: 'Sergio', puntos: 5, victorias: 2, derrotas: 3 },
    { id: 6, nombre: 'Cuba', puntos: 10, victorias: 3, derrotas: 1 },
    { id: 7, nombre: 'Alan', puntos: 2, victorias: 0, derrotas: 4 },
    { id: 8, nombre: 'Gino', puntos: 3, victorias: 1, derrotas: 4 },
    { id: 8, nombre: 'Franco', puntos: 0, victorias: 0, derrotas: 1 }
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




document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los botones "Ver más"
    const btnVerMas = document.querySelectorAll('.btnVerMas');

    // Iterar sobre los botones
    btnVerMas.forEach(button => {
        button.addEventListener('click', function () {
            // Obtener la fila p1j1 (la fila que contiene el botón)
            const row = this.closest('tr');
            // Obtener todas las filas pelea1j1 que siguen a la fila p1j1
            let nextRow = row.nextElementSibling;

            // Alternar la visibilidad de las filas pelea1j1
            while (nextRow && nextRow.classList.contains('pelea1j1')) {
                if (nextRow.style.display === 'none' || !nextRow.style.display) {
                    nextRow.style.display = 'table-row'; // Mostrar fila
                    this.textContent = 'Ver menos'; // Cambiar el texto del botón
                } else {
                    nextRow.style.display = 'none'; // Ocultar fila
                    this.textContent = 'Ver más'; // Cambiar el texto del botón
                }
                nextRow = nextRow.nextElementSibling;
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los botones "Link no found"
    const btnVideo = document.querySelectorAll('.btnVideo');
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.close');
    const videoPlayer = document.getElementById('videoPlayer');

    // Función para abrir el modal
    function openModal(videoUrl) {
        videoPlayer.src = videoUrl; // Establece la URL del video en el iframe
        modal.style.display = 'block'; // Muestra el modal
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none'; // Oculta el modal
        videoPlayer.src = ''; // Detiene el video al cerrar el modal
    }

    // Evento para abrir el modal al hacer clic en un botón
    btnVideo.forEach(button => {
        button.addEventListener('click', function () {
            const videoUrl = this.getAttribute('data-video'); // Obtiene la URL del video del atributo data
            openModal(videoUrl);
        });
    });

    // Evento para cerrar el modal al hacer clic en la X
    closeBtn.addEventListener('click', function () {
        closeModal();
    });

    // Cierra el modal si se hace clic fuera del contenido
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
})


