let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let main = document.getElementById("canvas").nextElementSibling;
let menu = main.children[0];
let divfinal = main.children[1];
let divfinalPerdido = main.children[2];
let botonStart = document.getElementById("botonStart");

divfinal.style.display="none";
divfinalPerdido.style.display="none";

function generarVectorAleatorio() {
  let x, y;
  do {
    x = Math.floor(Math.random() * 21) - 10;
    y = Math.floor(Math.random() * 21) - 10;
  } while (x === 0 && y === 0); // Repetir si ambos son cero
  return [x, y];
}

function empezarJuego(e) {
  menu.style.display="none";
  main.style.display="none";


  canvas.style.display="block";
  canvas.width = nivel_1[0].length * tamCasilla;
  canvas.height = nivel_1.length * tamCasilla;
  
  console.log(nivel_1.length);
  console.log(canvas.width + "  " + canvas.height);

  const juego = new Juego();
  
  document.addEventListener("keydown", function (e) {
    let LIMtablero = juego._arrNiveles[juego.nivelActual][juego.nivelActual].length*juego.tamCasilla;
    juego.Tablero._jsonElementos.pala.elemento.mover(e, LIMtablero);
  });
  
  document.addEventListener("keyup", function () {
      juego.Tablero._jsonElementos.pala.elemento.pararMovimiento();
  });

  document.addEventListener("keydown", function (e) {
    if(e.key === " ") juego.Tablero._jsonElementos.pala.elemento.usarHabilidad(e, {habilidad: 0});
  });
}

botonStart.addEventListener("click", empezarJuego);