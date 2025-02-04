//let titulo=document.querySelector('h1');
//titulo.innerHTML='Secret Number';


//let parrafo=document.querySelector('p');
//parrafo.innerHTML="Choose a number";

let numeroSecreto =0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function verificarIntento(){
    numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    console.log(numeroUsuario==numeroSecreto);
    
    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento("p",`¡Acertaste el número en ${intentos} ${(intentos===1)?"intento":"intentos"}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

        
    }else{
        //el usuario no acertó
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p',"El número debe ser menor");
        }else{
            asignarTextoElemento('p','El número debe ser mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}



function limpiarCaja(){
    document.querySelector('#valorUsuario').value="";
}



function condicionesIniciales(){
    asignarTextoElemento("h1","Secret Game");
    asignarTextoElemento("p",`Choose a number between 1-${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}


function reiniciarJuego(){
    //necesitamos limpiar la caja
    limpiarCaja();

    //indicar mensaje de intervalo de números
    //generar el número alteatorio
    //inicializar intentos
    condicionesIniciales();
    

    //desabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();







function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

}



function generarNumeroSecreto(){
   let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1; 
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);




   //si ya sorteamos todos los números, mostramos un mensaje y cerramos el juego
   if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');

   }else{
    //si el numeroGenerado, no está incluido en la lista, lo incluimos en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    
       }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
       }

   }
   
   






   
}