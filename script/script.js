let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = nivel_1[0].length * tamCasilla;
canvas.height = nivel_1.length * tamCasilla;

console.log(nivel_1.length);
console.log(canvas.width + "  " + canvas.height);

/*canvas.width = 1000;
canvas.height = 1000;*/




const juego = new Juego();


document.addEventListener("keydown", function (e) {
  let LIMtablero = juego._arrNiveles[juego.nivelActual].length*juego.tamCasilla;
  juego.Tablero._jsonElementos.pala.elemento.mover(e, LIMtablero);
});

document.addEventListener("keyup", function () {
    juego.Tablero._jsonElementos.pala.elemento.pararMovimiento();
});
