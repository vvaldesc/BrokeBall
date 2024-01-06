let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = nivel_1[0].length*tamCasilla;
canvas.height = nivel_1.length*tamCasilla;

console.log(nivel_1.length);
console.log(canvas.width+"  "+canvas.height);

/*canvas.width = 1000;
canvas.height = 1000;*/




debugger
const juego = new Juego();
