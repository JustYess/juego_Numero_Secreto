
let numeroSecreto = 0;
let contadorIntentos = 0;

let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function condicionesIniciales() {
        asignarTextoElemento('h1', 'Juego del número Secreto');
        asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        contadorIntentos = 1;
        return;
    }

function verificarIntento(){

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log(contadorIntentos);
    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${contadorIntentos} ${contadorIntentos==1 ? 'intento':'intentos'}`)
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        contadorIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   // console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);


}

condicionesIniciales();