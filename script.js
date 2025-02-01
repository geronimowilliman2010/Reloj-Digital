function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours().toString().padStart(2, '0');
    let minutos = ahora.getMinutes().toString().padStart(2, '0');
    let segundos = ahora.getSeconds().toString().padStart(2, '0');

    document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;

    // Ajustar el tiempo de actualización para que sea exacto al segundo
    const milisegundosHastaElSiguienteSegundo = 1000 - ahora.getMilliseconds();
    setTimeout(actualizarReloj, milisegundosHastaElSiguienteSegundo);
}

// Llamada inicial para actualizar inmediatamente
actualizarReloj();