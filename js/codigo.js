 //Funcion aleatoria
 function aleatorio(min, max){ return Math.floor(Math.random() * (max - min + 1) + min)
 }
 
 //funcion eleccion
 function eleccion(jugada) {
     let resultado = ""
     if(jugada == 1) {
         resultado ="Piedra 💎"
     }else if(jugada == 2) {
         resultado = "Papel 📃"
     }else if(jugada == 3) {
         resultado = "Tijera ✂️"
     }else {
         resultado ="MAL ELEGIDO"
     }
     return resultado
 }
 // 1 es piedra, 2 es papel y 3 es tijera
 let jugador = 0
 let min = 1
 let max = 3
 let pc = 0
 let triunfos = 0
 let perdidas = 0

 while(triunfos < 3 && perdidas < 3) {
     pc = aleatorio(1,3)
     jugador = prompt("Elige: 1 para piedra, 2 para papel o 3 para tijera")
 
     alert("Tu eliges: " + eleccion(jugador))
     alert("El PC elige: " + eleccion(pc))
 
     // COMBATE

     if(pc == jugador) {
     alert("EMPATE")
     }
     else if(jugador == 1 && pc == 3) {
     alert("GANASTE")
     triunfos = triunfos + 1
     }
     else if(jugador == 2 && pc == 1) {
     alert("GANASTE")
     triunfos = triunfos + 1
     }
     else if(jugador == 3 && pc == 2) {
     alert("GANASTE")
     triunfos = triunfos + 1
     }
     else 
    {alert("PERDISTE")
    perdidas = perdidas + 1
    }   
 }
    alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
 
//resta = jugador - pc

//if(resta == 1 || resta == -2){
 //triunfos ++
 //alert("ganaste")
//} else if(resta == 0){
//  empates ++
 //alert("empataron")
//} else {
//  perdidas ++
 //alert("perdiste")
//}

// alert("Elegiste " + jugador)
 // if(jugador == 1) {
 //      alert("Elegiste piedra 💎")
 // }else if(jugador == 2) {
 //        alert("Elegiste papel 📃")
 // }else if(jugador == 3) {
 //        alert("Elegiste tijera ✂️")
 // }else {
 //   alert("Elegiste PERDER")
 // }
 // if(pc == 1) {
 //          alert("PC elige piedra 💎")
 // }else if(pc == 2) {
 //         alert("PC elige papel 📃")
 // }else if(pc == 3) {
 //        alert("PC elige tijera ✂️")
 // }

