const lenTrack = 50
let posicionActualUno = lenTrack - 1
let posicionActualDos = lenTrack - 1

let carroAzul = '🚙'
let carroRojo = '🚗'

const getDistance = () => Math.floor(Math.random() * 3)

function dibujarPista() {
  let pistaUno = new Array(lenTrack).fill('=')
  let pistaDos = new Array(lenTrack).fill('=')

  let avanceUno = Math.max(0, posicionActualUno - getDistance()) 
  let avanceDos = Math.max(0, posicionActualDos - getDistance()) 

  posicionActualUno = avanceUno
  posicionActualDos = avanceDos

  pistaUno[avanceUno] = carroRojo
  pistaDos[avanceDos] = carroAzul

  console.clear()
  console.log(pistaUno.join(''))
  console.log(pistaDos.join(''))
}



function iniciarCarrera() {
  if (posicionActualUno === 0 && posicionActualDos === 0) {
    console.log(`Empate! ambos carros llegaron al mismo tiempo`)
    clearInterval(intervalId)
    return
  }
  if (posicionActualUno === 0) {
    console.log(`el carro 🚗 es el ganador`)
    clearInterval(intervalId)
    return
  }
  if (posicionActualDos === 0) {
    console.log(`el carro 🚙 es el ganador`)
    clearInterval(intervalId)
    return
  }

  dibujarPista()
}


let intervalId = setInterval(iniciarCarrera, 500)