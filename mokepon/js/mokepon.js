const sectionSelecionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonreiniciar = document.getElementById("boton-reiniciar")

const sectionSelecionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya = document.getElementById("ratigueya")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidasJugador")
let spanVidasEnemigo = document.getElementById("vidasEnemigo")

const sectionMensajes = document.getElementById("resultado")
const AtaquesDelJugador = document.getElementById("ataques-del-jugador")
const AtaquesDelEnemigo = document.getElementById("ataques-del-enemigo")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5)
let capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5)
let ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5)

mokepones.push(hipodoge,capipepo,ratigueya)
hipodoge.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🎋", id: "boton-tierra"}
)
capipepo.ataques.push(
    {nombre: "🎋", id: "boton-tierra"},
    {nombre: "🎋", id: "boton-tierra"},
    {nombre: "🎋", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"}   
)
ratigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🎋", id: "boton-tierra"}
)

function iniciarJuego() {
    sectionSelecionarAtaque.style.display = "none" 
    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonreiniciar.addEventListener("click", reiniciarJuego)
}
function seleccionarMascotaJugador() { 
    sectionSelecionarMascota.style.display = "none"
    sectionSelecionarAtaque.style.display = "flex"
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
    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
        }
        else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo + " vidas"
        }
        else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo + " vidas"
        }
        else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo + " vidas"
        }
        else 
       {crearMensaje("PERDISTE")
       vidasJugador --
       spanVidasJugador.innerHTML = vidasJugador + " vidas"
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
   let nuevoAtaqueDelJugador = document.createElement("p")
   let nuevoAtaqueDelEnemigo = document.createElement("p")
   sectionMensajes.innerHTML = resultado
   nuevoAtaqueDelJugador.innerHTML = ataqueJugador
   nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    AtaquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    AtaquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
     sectionMensajes.innerHTML = resultadoFinal
     botonFuego.disabled = true
     botonAgua.disabled = true
     botonTierra.disabled = true
     sectionReiniciar.style.display = "block" 
 }
 function reiniciarJuego() {
    location.reload()
 }
function aleatorio(min, max){ return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)