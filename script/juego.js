class Juego {
  constructor(
    MAXniveles = 3,
    MAXtipos = 4,
    MAXvidas = 3,
    MAXfps = 120,
    nombreJuego = "BrokeBall",
    tiempoInicial = 40,
    tamCasilla = 30
  ) {
    this.MAXniveles = MAXniveles;
    this.MAXtipos = MAXtipos;
    this.MAXvidas = MAXvidas;
    this.MAXfps = MAXfps;
    this.nombreJuego = nombreJuego;
    this.tiempoInicial = tiempoInicial;
    this.tamCasilla = tamCasilla;
  }

  traducirObjeto(){
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
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

  toString() {
    return `Juego: 
      MAXniveles = ${this._MAXniveles},
      MAXtipos = ${this._MAXtipos},
      MAXvidas = ${this._MAXvidas},
      MAXfps = ${this._MAXfps},
      nombreJuego = ${this._nombreJuego},
      tiempoInicial = ${this._tiempoInicial},
      tamCasilla = ${this._tamCasilla}`;
  }
}

const juego = new Juego();
console.log(juego.toString());
