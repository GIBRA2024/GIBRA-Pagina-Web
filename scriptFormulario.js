function enviarWhatsApp() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("correo").value;
    const producto = document.getElementById("producto").value;
    const mensajeAdicional = document.getElementById("mensaje").value;
    const checkbox = document.getElementById("aceptarDatos");

    if (!checkbox.checked) {
        alert("Por favor acepta las políticas de tratamiento de datos")
        return;
    }

    // Validar que los campos obligatorios estén completos
    if (!nombre || !telefono || !producto) {
        alert("Por favor, completa todos los campos obligatorios antes de enviar.");
        return;
    }

    // Número de WhatsApp donde se enviará (formato internacional, sin '+')
    const numeroDestino = "573209891782"; // Cambia esto al número de tu negocio.

    // Construir el mensaje
    const mensajeCompleto = `Hola, mi nombre es ${nombre}. Mi teléfono es ${telefono}. Mi correo es ${email}. Estoy interesado en el producto o servicio: ${producto}. ${mensajeAdicional ? "Detalles adicionales: " + mensajeAdicional : ""}`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeCompleto);

    // Crear el enlace de WhatsApp
    const enlace = `https://api.whatsapp.com/send?phone=${numeroDestino}&text=${mensajeCodificado}`;

    // Redirigir al enlace
    window.open(enlace, "_blank");
}