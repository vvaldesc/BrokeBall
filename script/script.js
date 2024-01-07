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
  debugger;
  juego._Tablero._jsonElementos.pala.elemento.mover(e);
});

document.addEventListener("keyup", function () {
    juego._Tablero._jsonElementos.pala.elemento.pararMovimiento();
});
