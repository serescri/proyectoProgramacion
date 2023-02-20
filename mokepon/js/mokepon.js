const sectionSelecionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonreiniciar = document.getElementById("boton-reiniciar")
const contenedorAtaques = document.getElementById("contenedorAtaques")
const sectionSelecionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidasJugador")
let spanVidasEnemigo = document.getElementById("vidasEnemigo")

const sectionMensajes = document.getElementById("resultado")
const AtaquesDelJugador = document.getElementById("ataques-del-jugador")
const AtaquesDelEnemigo = document.getElementById("ataques-del-enemigo")

let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let contenedorTarjetas = document.getElementById("contenedorTarjetas")
let mokepones = []
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let ataqueJugador
let opcionDeMokepones
let ataquesMokepon
let mascotaJugador
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

//mokepones.push(hipodoge,capipepo,ratigueya)
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
mokepones.push(hipodoge,capipepo,ratigueya)


function iniciarJuego() {
    sectionSelecionarAtaque.style.display = "none"

    mokepones.forEach((Mokepon) => {

        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.nombre}>
        <label class="tarjeta-mokepon" for=${Mokepon.nombre}>
        <p>${Mokepon.nombre}</p>
        <img src=${Mokepon.foto} alt=${Mokepon.nombre}></label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
    })
    
    sectionReiniciar.style.display = "none"
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    botonreiniciar.addEventListener("click", reiniciarJuego)
}
function seleccionarMascotaJugador() { 
    sectionSelecionarMascota.style.display = "none"
    sectionSelecionarAtaque.style.display = "flex"
    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } 
    else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }
    else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }
    else {
        alert("SELECCIONA UNA MASCOTA!!!!!!!")
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }  
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
        })
        botonFuego = document.getElementById("boton-fuego")
        botonAgua = document.getElementById("boton-agua")
        botonTierra = document.getElementById("boton-tierra")
        botones = document.querySelectorAll(".BAtaque")

        botonFuego.addEventListener("click", ataqueFuego)
        botonAgua.addEventListener("click", ataqueAgua)
        botonTierra.addEventListener("click", ataqueTierra)
        
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
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