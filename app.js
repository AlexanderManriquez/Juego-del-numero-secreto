let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log (numeroSecreto); (se habilita para mostrar el número secreto en la consola)
//función que asigna el texto a un elemento HTML como títulos (h1) o párrafos (p)
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//función que permite jugar al usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//condición que define la victoria en el juego
    if (numeroDeUsuario === numeroSecreto) {
        //El usuario acertó, mostramos el texto a traves de la función que permite asignar texto a los elementos
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'oportunidad' : 'oportunidades'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else{ // si el usuario falla:
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
        }else{
        asignarTextoElemento('p','El número secreto es mayor');
        } //contador de veces que el usuario intentó
        intentos++;
        // se aplica la función para vaciar la caja de texto luego de cada intento
        limpiarCaja();
}
}
//función para vaciar la caja de texto
function limpiarCaja (){
    document.getElementById('valorUsuario').value = '';
}
//función para definir el número a adivinar
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon todos los números posibles llamamos a la función para asignar texto
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya sorteaste todos los números posibles');
    //De lo contario, seguimos jugando hasta completar la lista con el número máximo de elementos
    } else {
    //Si el número está generado en la lista
         if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
         } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
         }
        }   
}
//función que se muestra tras presionar botón "nuevo juego"
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Ingresa un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
} //función que reinicia el juego tras ganar, desactiva el boton "nuevo juego"
function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
//se habilita tras presionar botón nuevo juego
condicionesIniciales();
