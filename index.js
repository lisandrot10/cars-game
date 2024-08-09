let pistaUno = new Array(50).fill("=");

let pistaDos = new Array(50).fill("=");

pistaUno.push("🚗");
pistaDos.push("🚙");

let posicionActualUno = pistaUno.indexOf("🚗");

let posicionActualDos = pistaDos.indexOf("🚙");

let intervalId = setInterval(iniciarCarrera, 500);

function dibujarPista() {
  console.log(pistaUno.join(""));
  console.log(pistaDos.join(""));
}

function iniciarCarrera() {
  let avanceUno = Math.floor(Math.random() * 3) + 1;
  let avanceDos = Math.floor(Math.random() * 3) + 1;
  console.clear();
  dibujarPista();

  let posicionActualUno = pistaUno.indexOf("🚗");
  let nuevaPosicionUno = Math.max(0, posicionActualUno - avanceUno);
  let posicionActualDos = pistaDos.indexOf("🚙");
  let nuevaPosicionDos = Math.max(0, posicionActualDos - avanceDos);

  if (posicionActualUno && posicionActualDos === 0) {
    console.log(`Empate! ambos carros llegaron al mismo tiempo`);
    clearInterval(intervalId);
  }
  if (posicionActualUno === 0) {
    console.log(`el carro 🚗 es el ganador`);
    clearInterval(intervalId);
  }
  if (posicionActualDos === 0) {
    console.log(`el carro 🚙 es el ganador`);
    clearInterval(intervalId);
  }

  pistaUno[posicionActualUno] = "=";
  pistaDos[posicionActualDos] = "=";
  pistaUno[nuevaPosicionUno] = "🚗";
  pistaDos[nuevaPosicionDos] = "🚙";
}
