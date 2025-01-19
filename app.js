let numeroSecreto;
let intentos;
let almacenaDatos = [];
let numeroMaximo = 10;

condicionesIniciales();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = Number(document.getElementById('numeroUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es mayor...');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor...');
        }
        intentos++;
        limpiaCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado, almacenaDatos, almacenaDatos.length, numeroMaximo);
    if (almacenaDatos.length == numeroMaximo) {
        alert('Ya se sortearon todos los números posibles, el juego se reiniciará en ');
        alert('3');
        alert('2');
        alert('1');
        location.reload();
    } else {
        //si el numero generado está incluido en la lista
        if (almacenaDatos.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            almacenaDatos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
    
}

function limpiaCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function reiniciarJuego(){    
    condicionesIniciales();
}

function condicionesIniciales() {
    limpiaCaja();
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
    asignarTextoElemento('h1', 'Destiny Game');
    asignarTextoElemento('p', `Elije tu destino del 1 al ${numeroMaximo}`);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}