let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
//console.log(numeroSecreto);
let numerosSorteados = [];

function asignarTextoElemento(elemento, texto){
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto;
};

condicionesIniciales();

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(typeof(numeroDeUsuario));
    console.log(`Intento: ${intentos}`);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    //console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else{
        // El usuario no acertó 
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número es menor");
        } else{
            asignarTextoElemento("p", "El número es mayor")
        };
        intentos++;
        limpiarCaja();

    };
    return;
};

//asignarTextoElemento("h1", "Juego del número secreto");
//asignarTextoElemento("p", "Indica un número del 1 al 10");

function  generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si ya sorteamos todos los números
    if (numerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números")
    } else{
        // Si el numero generado está incluido en la lista
        if (numerosSorteados.includes(numeroGenerado)){
            console.log(numeroGenerado);
            return generarNumeroSecreto();
        } else{
            numerosSorteados.push(numeroGenerado);
            console.log(`El número generado es ${numeroGenerado}`);
            console.log(`La lista sorteados luce ${numerosSorteados}`)
            return numeroGenerado;
        }}

    

};
function condicionesIniciales(){
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    asignarTextoElemento("h1", "Juego del número secreto");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto)
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";};

function reiniciarJuego(){
    // Limpiar caja
    limpiarCaja()
    // Indicar mensaje de intervalo de numero
    // Generar número aleatorio
    // Inicialicar el número de intentos
    condicionesIniciales();
    // Desabilitar el botón de nuevo juego 
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    
}