function traducirObjeto(numeroDeObjeto) {
  switch (numeroDeObjeto) {
    case 5:
      break;
    default:
      break;
  }
}

class Tablero{
  constructor(height = 0, width = 0, matrizActual) {
    this._height = height;
    this._width = width;
    this._matrizActual = matrizActual;
    this._jsonElementos = this.inicializarTablero();
    debugger
    this.animarTablero();
    this.toString();
  }

  inicializarTablero(){
    let jsonCuadrados = {
      elemento: [],
      x : [],
      y : []
    };

    let jsonBola = {
      elemento : null,
      x : null,
      y : null
    };

    let jsonarrPala = {
      elemento : null,
      x : null,
      y : null,
      ancho : null
    };

    let anchoInicialPala=1;
    try {
      this._matrizActual.map((fila, y) => fila.map((elemento, x) => {
        if (elemento >= 1 && elemento <= 3) {
          let cuadrado = new Cuadrado(x,y,true,elemento);
          jsonCuadrados.elemento.push(cuadrado);
          jsonCuadrados.x.push(x);
          jsonCuadrados.y.push(y);
        } else if (elemento >= 7 && elemento <= 9){
          // LA PALA SIEMPRE INICIARÁ SIENDO TIPO 7
          if (x-1<this._width && this._matrizActual[y][x+1]!=7) {
            let pala = new Pala(x-anchoInicialPala+1,y,anchoInicialPala,true,elemento);
            jsonarrPala.elemento = pala;
            jsonarrPala.ancho = anchoInicialPala;
            jsonarrPala.x = x;
            jsonarrPala.y = y;
          } else {
            anchoInicialPala++;
          }
        } else if (elemento == 10){
          let bola = new Bola(x,y,true,"red");
          jsonBola.elemento = bola;
          jsonBola.x=x;
          jsonBola.y=y;
        }
      }))
      if (jsonCuadrados.elemento.length === 0 || jsonBola.elemento === null || jsonarrPala.elemento === null)
       throw new Error("No se crearon instancias necesarias de Bola o arrPala o cuadrado");
      return {
        Cuadrados : jsonCuadrados,
        bola : jsonBola,
        pala : jsonarrPala
      }
    } catch (error) {
      console.error(error)
    }

  }

  mostrarTablero(){
    console.log("Mostrar"+this._jsonElementos);
    this._jsonElementos.Cuadrados.elemento.map((cuadrado) => cuadrado.dibujar());
    this._jsonElementos.bola.elemento.dibujar();
    this._jsonElementos.pala.elemento.dibujar();
  }

  actualizarTablero(){
    console.log("Mover"+this._jsonElementos);
    //this._jsonElementos.Cuadrados.elemento.map((cuadrado) => cuadrado.dibujar());

    //COMPROBAR SI LA BOLA PUEDE SEGUIR EL MISMO VECTOR
    this._jsonElementos.bola.elemento.mover();
    //this._jsonElementos.pala.elemento.dibujar();
  }

  animarTablero(){
    debugger
    setInterval(() => {
      this.borrarTablero();
      this.actualizarTablero();
      this.mostrarTablero();
    }, 1000/MAXfps);
  }

  borrarTablero(){
    canvas.width = nivel_1[0].length*tamCasilla;
    canvas.height = nivel_1.length*tamCasilla;
  }
  
  hayCuadrados() {
      for (const fila of this._matrizActual) {
        for (const numero of fila) {
          if (numero == 1 || numero == 2 || numero == 3 ) return true;
        }
      }
      return false;
  }

  toString() {
    const cuadradosStr = this._jsonElementos.Cuadrados.elemento.map(cuadrado => `[${cuadrado.x}, ${cuadrado.y}, ${cuadrado.otroAtributo}]`).join(', ');
    const bolaStr = `[${this._jsonElementos.bola.elemento.x}, ${this._jsonElementos.bola.elemento.y}, ${this._jsonElementos.bola.elemento.color}]`;
    const palaStr = `[${this._jsonElementos.pala.elemento.x}, ${this._jsonElementos.pala.elemento.y}, ${this._jsonElementos.pala.elemento.ancho}, ${this._jsonElementos.pala.elemento.otroAtributo}]`;

    return `Cuadrados: [${cuadradosStr}], Bola: ${bolaStr}, Pala: ${palaStr}`;
  }
}
