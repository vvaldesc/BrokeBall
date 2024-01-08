let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let main = document.getElementById("canvas").nextElementSibling;
let botonStart = document.getElementById("botonStart");




function empezarJuego(e) {
  main.style.display="none";

  canvas.style.display="block";
  canvas.width = nivel_1[0].length * tamCasilla;
  canvas.height = nivel_1.length * tamCasilla;
  
  console.log(nivel_1.length);
  console.log(canvas.width + "  " + canvas.height);

  const juego = new Juego();
  
  document.addEventListener("keydown", function (e) {
    debugger
    let LIMtablero = juego._arrNiveles[juego.nivelActual][juego.nivelActual].length*juego.tamCasilla;
    juego.Tablero._jsonElementos.pala.elemento.mover(e, LIMtablero);
  });
  
  document.addEventListener("keyup", function () {
      juego.Tablero._jsonElementos.pala.elemento.pararMovimiento();
  });
}





botonStart.addEventListener("click", empezarJuego);