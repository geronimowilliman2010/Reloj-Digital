function actualizarHora() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const tiempo = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').innerHTML = tiempo;
}

setInterval(actualizarHora, 1000);