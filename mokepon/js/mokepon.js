let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3

function iniciarJuego() {

    let sectionSelecionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSelecionarAtaque.style.display = "none" 
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonreiniciar = document.getElementById("boton-reiniciar")
    botonreiniciar.addEventListener("click", reiniciarJuego)
}
function seleccionarMascotaJugador() {
    
    let sectionSelecionarMascota = document.getElementById("seleccionar-mascota")
    sectionSelecionarMascota.style.display = "none"
    
    let sectionSelecionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSelecionarAtaque.style.display = "flex"
    
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } 
    else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else {
        alert("SELECCIONA UNA MASCOTA!!!!!!!")
    }
    seleccionarMascotaEnemigo()
}


function seleccionarMascotaEnemigo() {
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    let mascotaAleatoria = aleatorio(1,3)

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    aleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    aleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    aleatorioEnemigo()
}

function aleatorioEnemigo() {
    let ataqueRamdom = aleatorio(1,3)

    if (ataqueRamdom == 1) {
        ataqueEnemigo = "FUEGO"
    }else if (ataqueRamdom == 2) {
        ataqueEnemigo = "AGUA"
    }else {
        ataqueEnemigo = "TIERRA"
    }
    combate()
}   

function combate(){
   
   let spanVidasJugador = document.getElementById("vidasJugador")
   let spanVidasEnemigo = document.getElementById("vidasEnemigo")

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
        }
        else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
        }
        else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
        }
        else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
        }
        else 
       {crearMensaje("PERDISTE")
       vidasJugador --
       spanVidasJugador.innerHTML = vidasJugador
       } 
       
       revisarVidas()
}

function revisarVidas() {

    if(vidasJugador == 0) [
        crearMensajeFinal("!!! MUY MAL PERDISTE !!! ")
    ]
    else if(vidasEnemigo == 0) {
        crearMensajeFinal("Felicitaciones !!! GANASTE !!! 🏆🏆")
    }

}

function crearMensaje(resultado) {
   
   let sectionMensajes = document.getElementById("resultado")
   let AtaquesDelJugador = document.getElementById("ataques-del-jugador")
   let AtaquesDelEnemigo = document.getElementById("ataques-del-enemigo")

   //let notificacion = document.createElement("p")
   let nuevoAtaqueDelJugador = document.createElement("p")
   let nuevoAtaqueDelEnemigo = document.createElement("p")

   sectionMensajes.innerHTML = resultado
   nuevoAtaqueDelJugador.innerHTML = ataqueJugador
   nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


   // sectionMensajes.appendChild(notificacion)
    AtaquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    AtaquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
   
    let sectionMensajes = document.getElementById("resultado")
     
    //let parrafo = document.createElement("p") 
     sectionMensajes.innerHTML = resultadoFinal
 
     //sectionMensajes.appendChild(parrafo)

     let botonFuego = document.getElementById("boton-fuego")
     botonFuego.disabled = true
     let botonAgua = document.getElementById("boton-agua")
     botonAgua.disabled = true
     let botonTierra = document.getElementById("boton-tierra")
     botonTierra.disabled = true

     let sectionReiniciar = document.getElementById("reiniciar")
     sectionReiniciar.style.display = "block"
    
 }

 function reiniciarJuego() {
    location.reload()
 }

function aleatorio(min, max){ return Math.floor(Math.random() * (max - min + 1) + min)

}
window.addEventListener("load", iniciarJuego)