// 1 al 3 tipos de pared
// 7 al 9 tipos de pala
// 10 donde empieza la bola
//

const nivel_1 = 
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0],

];

const nivel_2 = 
[
  [0, 0, 0, 0, 0, 3, 2, 0, 2, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 2, 0, 2, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 2, 1, 1, 2, 2, 0, 0, 0, 2, 2, 1, 1, 2, 2],
  [1, 1, 1, 1, 3, 2, 0, 0, 0, 2, 3, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 3, 2, 0, 0, 0, 2, 3, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0],
];

const nivel_3 = 
[
  [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 0, 2, 0, 2, 2, 0, 2, 2, 0],
  [0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 0, 2, 0, 2, 2, 0, 2, 2, 0],
  [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0],
];

const MAXniveles = 3;
const MAXtipos = 4;
const MAXvidas = 3;
const MAXfps = 60;
const nombreJuego = "BrokeBall";
const tamCasilla = 30;
const tiempoInicial = 40;
const velocidadPala = 10;

class Juego{
  constructor(
    MAXniveles = 3,
    MAXtipos = 4,
    MAXvidas = 3,
    MAXfps = 120,
    nombreJuego = "BrokeBall",
    tiempoInicial = 40,
    tamCasilla = 30
  ) {
    this._nivelActual = 0;
    this._MAXniveles = MAXniveles;
    this._MAXtipos = MAXtipos;
    this._MAXvidas = MAXvidas;
    this._MAXfps = MAXfps;
    this._nombreJuego = nombreJuego;
    this._tiempoInicial = tiempoInicial;
    this._tamCasilla = tamCasilla;
    this._arrNiveles = [nivel_1,nivel_2,nivel_3]
    console.log(this._arrNiveles)

    this._Tablero = new Tablero (
      this._arrNiveles
      );
  }
  
  get nivelActual() {
    return this._nivelActual;
  }
  set nivelActual(value) {
    this._nivelActual = value;
  }

  // Getter y Setter para MAXniveles
  get MAXniveles() {
    return this._MAXniveles;
  }
  set MAXniveles(value) {
    this._MAXniveles = value;
  }

  // Getter y Setter para MAXtipos
  get MAXtipos() {
    return this._MAXtipos;
  }
  set MAXtipos(value) {
    this._MAXtipos = value;
  }

  // Getter y Setter para MAXvidas
  get MAXvidas() {
    return this._MAXvidas;
  }
  set MAXvidas(value) {
    this._MAXvidas = value;
  }

  // Getter y Setter para MAXfps
  get MAXfps() {
    return this._MAXfps;
  }
  set MAXfps(value) {
    this._MAXfps = value;
  }

  // Getter y Setter para nombreJuego
  get nombreJuego() {
    return this._nombreJuego;
  }
  set nombreJuego(value) {
    this._nombreJuego = value;
  }

  // Getter y Setter para tiempoInicial
  get tiempoInicial() {
    return this._tiempoInicial;
  }
  set tiempoInicial(value) {
    this._tiempoInicial = value;
  }

  // Getter y Setter para tiempoInicial
  get tamCasilla() {
    return this._tamCasilla;
  }
  set tamCasilla(value) {
    this._tamCasilla = value;
  }

  // Getter para Tablero
  get Tablero() {
    return this._Tablero;
  }

  toString() {
    return `Juego:
      nivelActual = ${this._nivelActual},
      MAXniveles = ${this._MAXniveles},
      MAXtipos = ${this._MAXtipos},
      MAXvidas = ${this._MAXvidas},
      MAXfps = ${this._MAXfps},
      nombreJuego = ${this._nombreJuego},
      tiempoInicial = ${this._tiempoInicial},
      tamCasilla = ${this._tamCasilla}`;
  }
}

