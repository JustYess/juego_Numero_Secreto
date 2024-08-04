// // Challenges
// function hola(){
//     return console.log('¡Hola, Mundo!');
    
//     }
// hola();
// /****************************************************************/
// function saludo(nombre){
//     nombre = prompt('¿Cuál es tu nombre?');
//     return console.log(`¡Hola, ${nombre}!`);
    
//     }
// saludo();
// /****************************************************************/
// function doble(n1){
//     n1 = parseInt(prompt('Ingrese un número'));
//     return console.log(`El doble del número ingresado es ${n1*2} `);
// }
// doble();
// /****************************************************************/
// function promedio(n1,n2,n3){
//     n1 = parseInt(prompt('Ingrese un número'));
//     n2 = parseInt(prompt('Ingrese el segundo número'));
//     n3 = parseInt(prompt('Ingrese el tercer número'));
//     let avg = (n1+n2+n3)/3
//     return console.log(`El promedio de los números ingresados es ${avg}`);
// }
// promedio();
// /****************************************************************/
// function mayor(n1,n2){
//     n1 = parseInt(prompt('Ingrese un número'));
//     n2 = parseInt(prompt('Ingrese el segundo número'));
//     return console.log(`El número mayor es ${Math.max(n1,n2)}`);
// }
// mayor();

// function encontrarMayor(a, b) {
//     return a > b ? a : b;
//   }
  
//   let numeroMayor = encontrarMayor(15, 9);
//   console.log(numeroMayor);
// /****************************************************************/
// function multiplicar(n1){
//     n1 = parseInt(prompt('Ingrese un número'));
//     return console.log(`El resultado de multiplicar el número por si mismo es ${n1*n1}`);
// }
// multiplicar();

// function cuadrado(numero) {
//     return numero * numero;
//   }
  
//   let resultado = cuadrado(2);
//   console.log(resultado);

// /****************************************************************/
// /****************************************************************/
// Challenges
// - Crea una función que calcule el índice de masa corporal (IMC) 
// de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.


// function calcularIMC(peso,altura){
//     peso = parseFloat(prompt('Ingrese su peso'));
//     altura =parseFloat(prompt('Ingrese su altura'));
//     return console.log(`Tu IMC es ${peso/(altura*altura)}`);
// }

// calcularIMC();

// function calcularIMC2(peso,altura){
//     return console.log(`Tu IMC es ${peso/(altura*altura)}`);
// }

// let peso = 61;
// let altura2 = 1.60;
// let resultado2 = calcularIMC2(peso,altura2);
// console.log(`Tu peso ${peso} y tu altura ${altura2} te dan un IMC de ${resultado2}`)

// - Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// function factorial(n1){
//     if (n1===0 ||n1===1){
//         return 1;
//     }else{
//         return n1*factorial(n1-1)
//     }
// }

// let n1 = 5
// let resultado = factorial(n1);
// console.log(`El factorial de ${n1} es ${resultado}`)

// - Crea una función que convierta un valor en dólares, pasado como parámetro, 
// y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
// Para esto, considera la cotización del dólar igual a R$4,80.


// function convertidorMoneda(dolares){
//     let precioDolar = 4.80;
//     let reales = dolares*precioDolar;
//     return reales;
// }

// let cantidadDolares = 50;
// let cantidadReales = convertidorMoneda(cantidadDolares);
// console.log(`${cantidadDolares} dólares son R$ ${cantidadReales}`);

// - Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
// utilizando la altura y la anchura que se proporcionarán como parámetros.

// function calcularAreaYPerimetroRectangular(altura, anchura) {
//     var area = altura * anchura;
//     var perimetro = 2 * (altura + anchura);
//     console.log("Área: " + area);
//     console.log("Perímetro: " + perimetro);
//   }
//   // Ejemplo de uso
//   let altura = 3; // en metros
//   let anchura = 5; // en metros
//   calcularAreaYPerimetroRectangular(altura, anchura);

// - Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
// utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

// function calcularAreaYPerimetroCircular(radio) {
//     var pi = 3.14;
//     var area = pi * radio * radio;
//     var perimetro = 2 * pi * radio;
//     console.log("Área: " + area);
//     console.log("Perímetro: " + perimetro);
//   }
//   // Ejemplo de uso
//   let radio = 4; // en metros
//   calcularAreaYPerimetroCircular(radio);
  
// - Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

// function mostrarTablaDeMultiplicar(numero) {
//   for (var i = 1; i <= 10; i++) {
//     var resultado = numero * i;
//     console.log(numero + " x " + i + " = " + resultado);
//   }
// }
// // Ejemplo de uso
// let numero = 7;
// mostrarTablaDeMultiplicar(numero);

// /****************************************************************/
// /****************************************************************/
// Challenges

// // Crea una lista vacía llamada "listaGenerica".
// let listaGenerica = [];
// console.log(listaGenerica);

// // Crea una lista de lenguajes de programación llamada 
// //"lenguagesDeProgramacion con los siguientes elementos: 
// //'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
// console.log(lenguajesDeProgramacion);

// // Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
// // 'Java', 'Ruby' y 'GoLang'.
// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
// console.log(lenguajesDeProgramacion);

// // Crea una función que muestre en la consola todos los elementos
// // de la lista "lenguagesDeProgramacion.
// function mostrarLenguagesSeparadamente() {
//     for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
//       console.log(lenguajesDeProgramacion[i]);
//     }
//   }
//   mostrarLenguagesSeparadamente();


// // Crea una función que muestre en la consola 
// //todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// function mostrarLenguagesReversoSeparadamente() {
//     for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
//       console.log(lenguajesDeProgramacion[i]);
//     }
//   }
//   mostrarLenguagesReversoSeparadamente();

// // Crea una función que calcule el promedio de los elementos en una 
// //lista de números.
// function calcularMedia(lista) {
//   let suma = 0;
//   for (let i = 0; i < lista.length; i++) {
//     suma += lista[i];
//   }
//   return suma / lista.length;
// }

// let numeros = [10, 20, 30, 40, 50];
// let media = calcularMedia(numeros);
// console.log('Média:', media);

// // Crea una función que muestre en la consola el número más grande 
// //y el número más pequeño en una lista.
// function encontrarMayorMenor(lista) {
//     let mayor = lista[0];
//     let menor = lista[0];
  
//     for (let i = 1; i < lista.length; i++) {
//       if (lista[i] > mayor) {
//         mayor = lista[i];
//       }
//       if (lista[i] < menor) {
//         menor = lista[i];
//       }
//     }
  
//     console.log('Mayor:', mayor);
//     console.log('Menor:', menor);
//   }
  
//   let numeros2 = [15, 8, 25, 5, 12];
//   encontrarMayorMenor(numeros2);

// // Crea una función que devuelva la suma de todos 
// //los elementos en una lista.
// function calcularSuma(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//       suma += lista[i];
//     }
//     return suma;
//   }
  
//   let numeros3 = [15, 8, 25, 5, 12];
//   let suma = calcularSuma(numeros3);
//   console.log('Suma:', suma);

// // Crea una función que devuelva la posición en 
// //la lista donde se encuentra un elemento pasado como parámetro, 
// //o -1 si no existe en la lista.
// function encontrarIndiceElemento(lista, elemento) {
//     for (let i = 0; i < lista.length; i++) {
//       if (lista[i] === elemento) {
//         return i; // Retorna el índice del elemento encontrado
//       }
//     }
//     return -1; // Retorna -1 si el elemento no se encuentra en la lista
//   }

// Crea una función que reciba dos listas de números 
//del mismo tamaño y devuelva una nueva lista con la suma de los elementos 
//uno a uno.

// Crea una función que reciba una lista de números y
// devuelva una nueva lista con el cuadrado de cada número.

// /****************************************************************/
// /****************************************************************/
// /****************************************************************/

// let parrafo = document.querySelector('p');
//     parrafo.innerHTML = 'Indica un número del 1 al 10';

//let numeroSecreto = generarNumeroSecreto();
//let contadorIntentos = 1;

let numeroSecreto = 0;
let contadorIntentos = 0;
//console.log(numeroSecreto);
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// function mensajesIniciales() {
//     asignarTextoElemento('h1', 'Juego del número Secreto');
//     asignarTextoElemento('p', 'Indica un número del 1 al 100');
//         numeroSecreto = generarNumeroSecreto();
//     return;
// }

function condicionesIniciales() {
        asignarTextoElemento('h1', 'Juego del número Secreto');
        asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        contadorIntentos = 1;
        return;
    }

function verificarIntento(){
    //En esta sección se declara la función; encapsulamiento de una función
    //alert('Click desde el botón');
    //let numeroUsuario = document.querySelector('input'); // Seleccionar la etiqueta de tipo input
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); // Con el atributo .value retornamos el valor del elemento
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
    // console.log(numeroSecreto);
    // console.log(typeof (numeroSecreto));
    // console.log(numeroUsuario);
    // console.log(typeof (numeroUsuario));
    // console.log(numeroUsuario == numeroSecreto); // === Compara de igual manera el tipo de dato
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto () {
    // Math.floor para retornar solo la parte decimal
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        // Si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //Se genera un número nuevo a través de recursividad
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    // Limpiar la caja
    limpiarCaja();

    // Indicar mensaje de intervalo de números
    //mensajesIniciales();
    // Generar el número aleatorio
    //numeroSecreto = generarNumeroSecreto();
    // Inicializar el número intentos
    //contadorIntentos = 1;

    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número intentos
    condicionesIniciales();

    // Dejar el botón de nuevo juego deshabilitado
    // Se setea el atributo asignandole true
    document.querySelector('#reiniciar').setAttribute('disabled', true);


}

condicionesIniciales();
//Ejecución de la función
//intentoDeUsuario();