function enviarWhatsApp() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const producto = document.getElementById("producto").value;
    const mensajeAdicional = document.getElementById("mensaje").value;

    // Validar que los campos obligatorios estén completos
    if (!nombre || !telefono || !producto) {
        alert("Por favor, completa todos los campos obligatorios antes de enviar.");
        return;
    }

    // Número de WhatsApp donde se enviará (formato internacional, sin '+')
    const numeroDestino = "573225725739"; // Cambia esto al número de tu negocio.

    // Construir el mensaje
    const mensajeCompleto = `Hola, mi nombre es ${nombre}. Mi teléfono es ${telefono}. Estoy interesado en el producto o servicio: ${producto}. ${mensajeAdicional ? "Detalles adicionales: " + mensajeAdicional : ""}`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeCompleto);

    // Crear el enlace de WhatsApp
    const enlace = `https://api.whatsapp.com/send?phone=${numeroDestino}&text=${mensajeCodificado}`;

    // Redirigir al enlace
    window.open(enlace, "_blank");
}

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.body;
const bloqueo = document.createElement('div');

bloqueo.classList.add('bloqueo');
document.body.appendChild(bloqueo);

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    body.classList.add('no-scroll');
    bloqueo.classList.add('bloqueo-activo');
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Suaviza el desplazamiento
    });
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    body.classList.remove('no-scroll');
    bloqueo.classList.remove('bloqueo-activo');
})

