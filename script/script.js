let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let textX = document.getElementById("posX");

let tablero = [
  [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 2, 2, 2],
  [2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
  [2, 0, 0, 2, 3, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 0],
  [2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0, 2, 2],
  [2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
  [2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
];




let tamCasilla = 50;


canvas.height = (50 * tablero.length) * 3;
canvas.width = (50 * tablero[0].length) * 3;

class Cuadrado {
  constructor(x, y, width, height, color, visible, src = null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.irDerecha = true;
    this.visible = true;
    this.imagen = document.createElement("img");
    this.imagen.src = src;
    this.llave=this.tieneLlave();
  }

  tieneLlave(){
      return false;
  }

  colisionConParedes(tablero, tecla) {
    debugger
    const celdaX = this.x;
    const celdaY = this.y;
  
    let nuevaCeldaX=celdaX;
    let nuevaCeldaY=celdaY;
  
    switch (tecla) {
      case "ArrowLeft":
        nuevaCeldaX = celdaX - 1;
        break;
      case "ArrowRight":
        nuevaCeldaX = celdaX + 1;
        break;
      case "ArrowUp":
        nuevaCeldaY = celdaY - 1;
        break;
      case "ArrowDown":
        nuevaCeldaY = celdaY + 1;
        break;
      default:
        break;
    }
  
    if (
      nuevaCeldaX >= 0 &&
      nuevaCeldaX < tablero[0].length &&
      nuevaCeldaY >= 0 &&
      nuevaCeldaY < tablero.length
    ) {
      if (tablero[nuevaCeldaY][nuevaCeldaX] === 2) {
        return true;
      } else if (tablero[nuevaCeldaY][nuevaCeldaX] === 3) {
        this.llave=true;
        tablero[nuevaCeldaY][nuevaCeldaX] = 2;
        tablero[tablero.length-1][tablero[0].length-1] = 4;
        return false;
      } else if(tablero[nuevaCeldaY][nuevaCeldaX] === 4 && this.llave) {
        console.log("ganado");
      }
    }
  
    return false;
  }
  

  mostrar() {
    ctx.drawImage(this.imagen, this.x*tamCasilla, this.y*tamCasilla, tamCasilla, tamCasilla);
  }

  mostrarColor() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, tamCasilla, tamCasilla);
  }

  mover(e) {
    if (!this.colisionConParedes(tablero, e.key)) {
      borrarTablero();
      pintarMapa();
      this.tieneLlave();
      switch (e.key) {
        case "ArrowLeft":
          if (this.x - 1 >= 0) {
            this.x = this.x - 1;
          }
          break;
        case "ArrowRight":
          if (this.x + 1 < tablero[0].length) {
            this.x = this.x + 1;
          }
          break;
        case "ArrowUp":
          if (this.y - 1 >= 0) {
            this.y = this.y - 1;
          }
          break;
        case "ArrowDown":
          if (this.y + 1 < tablero.length) {
            this.y = this.y + 1;
          }
          break;
        default:
          break;
      }
    }
  }
  
}

ctx.scale(3, 3);

pintarMapa();

let avatar = new Cuadrado(0, 0, tamCasilla, tamCasilla, "red", true, "descarga.jpeg");

function animarJuego() {
  textoEjes();
  if (avatar.llave) {
    texto("llave")
  }
  avatar.mostrar();

}

setInterval(animarJuego, 1000 / tamCasilla);

function textoEjes() {
  ctx.font = "italic 30px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("POS X" + avatar.x, 0, 100);

  ctx.font = "italic 30px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText("POS Y" + avatar.y, 0, 150);
}

function texto(txt) {
  ctx.font = "italic 30px Arial";
  ctx.fillStyle = "green";
  ctx.fillText(txt,0,200);
}

function pintarMapa() {
  let pngBundle=document.createElement("IMG");
  pngBundle.src="./tilemap.png";
  tablero.forEach((fila, rowIndex) => {
    fila.forEach((valor, colIndex) => {
      if (tablero[rowIndex][colIndex] === 2) {

        debugger
        ctx.drawImage(pngBundle, 64, 0, 32, 32, colIndex*tamCasilla, rowIndex*tamCasilla, tamCasilla, tamCasilla);

        /*ctx.fillStyle = "orange";
        ctx.fillRect(colIndex*tamCasilla, rowIndex*tamCasilla, tamCasilla, tamCasilla);*/
      } else if (tablero[rowIndex][colIndex] === 0) {
        ctx.fillStyle = "brown";
        ctx.fillRect(colIndex*tamCasilla, rowIndex*tamCasilla, tamCasilla, tamCasilla);        
      } else if (tablero[rowIndex][colIndex] === 3) {
        let imagenLlave = document.createElement("img");
        imagenLlave.src="llave.png";
        ctx.drawImage(imagenLlave, this.x*tamCasilla, this.y*tamCasilla, tamCasilla, tamCasilla);
      } else if (tablero[rowIndex][colIndex] === 4) {
        ctx.fillStyle = "green";
        ctx.fillRect(colIndex*tamCasilla, rowIndex*tamCasilla, tamCasilla, tamCasilla);
      }
    });
  });
}

function borrarTablero() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const mover = (e) => {
  avatar.mover(e);
};

document.addEventListener("keydown", mover);
