const sectionSelecionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonreiniciar = document.getElementById("boton-reiniciar")
const contenedorAtaques = document.getElementById("contenedorAtaques")
const sectionSelecionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("vidasEnemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const sectionMensajes = document.getElementById("resultado")
const AtaquesDelJugador = document.getElementById("ataques-del-jugador")
const AtaquesDelEnemigo = document.getElementById("ataques-del-enemigo")

let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let ataqueJugador = []
let mokepones = []
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let opcionDeMokepones
let ataquesMokepon
let ataquesMokeponEnemigo
let mascotaJugador
let ataqueEnemigo = []
let vidasEnemigo = 3
let vidasJugador = 3
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0


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
hipodoge.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🎋", id: "boton-tierra"},
)
capipepo.ataques.push(
    {nombre: "🎋", id: "boton-tierra"},
    {nombre: "🎋", id: "boton-tierra"},
    {nombre: "🎋", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},   
)
ratigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🎋", id: "boton-tierra"},
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
        
}
function secuenciaAtaque () {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
               ataqueJugador.push("FUEGO") 
               console.log(ataqueJugador)
               boton.style.background = "#112f58"
               boton.disabled = true
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA") 
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
             } else {
                ataqueJugador.push("TIERRA") 
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
             } 
             aleatorioEnemigo()
        })
     })      
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}
function aleatorioEnemigo() {
    let ataqueRamdom = aleatorio(0,ataquesMokeponEnemigo.length -1)
    if (ataqueRamdom == 0 || ataqueRamdom == 1) {
        ataqueEnemigo.push("FUEGO")
    }else if (ataqueRamdom == 2 || ataqueRamdom == 3) {
        ataqueEnemigo.push("AGUA")
    }else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
} 
function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()       
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }else if(ataqueJugador[index] == "FUEGO" && ataqueEnemigo[index] == "TIERRA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador   
         }else if(ataqueJugador[index] == "AGUA" && ataqueEnemigo[index] == "FUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador   
         }else if(ataqueJugador[index] == "TIERRA" && ataqueEnemigo[index] == "AGUA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador   
         }else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
         }
    }
       
       revisarVidas()
}
function revisarVidas() {
    if (victoriasJugador == victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!") 
    }else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("Felicitaciones !!! GANASTE !!! 🏆🏆")
    }else {
        crearMensajeFinal("!!! MUY MAL PERDISTE !!! ")
    }
    

}
function crearMensaje(resultado) {
   let nuevoAtaqueDelJugador = document.createElement("p")
   let nuevoAtaqueDelEnemigo = document.createElement("p")
   
   sectionMensajes.innerHTML = resultado
   nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
   nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    
    AtaquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    AtaquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
     sectionMensajes.innerHTML = resultadoFinal
     
     sectionReiniciar.style.display = "block" 
 }
 function reiniciarJuego() {
    location.reload()
 }
function aleatorio(min, max){ return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)