function actualizarReloj() {
    const horaElement = document.getElementById('hora');
    
    // Obtener la hora actual
    const fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    // Asegurarse de que los valores sean siempre de 2 dígitos (por ejemplo, 09 en lugar de 9)
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Mostrar la hora en el elemento HTML
    horaElement.textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llamar una vez para mostrar la hora de inmediato
actualizarReloj();