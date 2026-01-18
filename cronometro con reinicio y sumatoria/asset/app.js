class Cronometro {
    constructor() {
        this.inicio = new Date();
    }

    obtenerTiempo() {
        const ahora = new Date();
        const diferencia = Math.floor((ahora - this.inicio) / 1000);
        const minutos = Math.floor(diferencia / 60);
        const segundos = diferencia % 60;
        return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    }

    reiniciar() {
        this.inicio = new Date();
    }
}

const miCronometro = new Cronometro();

function mostrarTiempo() {
    document.getElementById("salidaCronometro").innerText = 
        "Tiempo transcurrido: " + miCronometro.obtenerTiempo();
}

function reiniciarCronometro() {
    miCronometro.reiniciar();
    document.getElementById("salidaCronometro").innerText = "Cronómetro reiniciado: 0:00";
}
class Sumatoria {
    constructor(base) {
        this.base = base;
        this.acumulado = base;
        this.contenedor = document.getElementById("salidaSumatoria");
        
        const p = document.createElement("p");
        p.innerText = `Objeto creado con base inicial: ${this.base}`;
        this.contenedor.appendChild(p);
    }

    sumar() {
        const anterior = this.acumulado;
        this.acumulado += this.base;
        
        const p = document.createElement("p");
        p.innerText = `${anterior} + ${this.base} = ${this.acumulado}`;
        this.contenedor.appendChild(p);
    }
}

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
const miSumatoria = new Sumatoria(numeroAleatorio);

function ejecutarSumar() {
    miSumatoria.sumar();
}


