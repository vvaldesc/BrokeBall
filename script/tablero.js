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
      this._matrizActual.forEach((fila, y) => fila.forEach((elemento, x) => {
        if (elemento >= 1 && elemento <= 3) {
          let cuadrado = new Cuadrado(x, y, true, elemento);
          jsonCuadrados.elemento.push(cuadrado);
          jsonCuadrados.x.push(x);
          jsonCuadrados.y.push(y);
        } else if (elemento >= 7 && elemento <= 9) {
          // LA PALA SIEMPRE INICIARÁ SIENDO TIPO 7
          if (x - 1 < this._width && this._matrizActual[y][x + 1] !== 7) {
            let pala = new Pala(x - anchoInicialPala + 1, y, anchoInicialPala, true, elemento);
            jsonarrPala.elemento = pala;
            jsonarrPala.ancho = anchoInicialPala;
            jsonarrPala.x = x;
            jsonarrPala.y = y;
          } else {
            anchoInicialPala++;
          }
        } else if (elemento === 10) {
          let bola = new Bola(x, y, true, "red");
          jsonBola.elemento = bola;
          jsonBola.x = x;
          jsonBola.y = y;
        }
      }));
      
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
    this._jsonElementos.Cuadrados.elemento.map((cuadrado) => cuadrado.dibujar());
    this._jsonElementos.bola.elemento.dibujar();
    this._jsonElementos.pala.elemento.dibujar();
  }

  comprobarColisionBola(){
    // la bola mide de radio 20

    //Hago estas comprobaciones en memoria de vídeo ya que
    //La bola se mueve pixel por pixel, no por posición de tablero

    let coordenadasBolaProximoTick = {
      x:
        this._jsonElementos.bola.x +
        this._jsonElementos.bola.elemento.vectorXY[0],
      y:
        this._jsonElementos.bola.y +
        this._jsonElementos.bola.elemento.vectorXY[1],
    };

    let colision = {
      objetoColisionado: null,
      vectorAcambiar: null,
    };

    //coordenadasBolaProximoTick.x+=1;
    //coordenadasBolaProximoTick.y-=1;


    //COLISION CON BLOQUE
    this._jsonElementos.Cuadrados.elemento.some((cuadrado) => {
      let xCuadrado = cuadrado._x;
      let yCuadrado = cuadrado._y;


      if (Math.abs(xCuadrado - coordenadasBolaProximoTick.x-this._jsonElementos.bola.elemento.radio/tamCasilla) < Math.abs(1)) {   
        if (Math.abs(yCuadrado - coordenadasBolaProximoTick.y-this._jsonElementos.bola.elemento.radio/tamCasilla) < Math.abs(1)) {
          
          //debugger


          // xCua 14  yCua 4  //  ptbx 14,49  ptby 2,51



          // sabiendo el vector unitario de la velocidad bola sé su dirección, esto me da mucha información
          //los dos ifs me indican que si la bola sigue su rumbo, entra dentro del cuadrado
          //sabiendo la posición del cuadrado y el vector V sé hacia donde hay que reflejar el mismo
          let posCuadrado = [xCuadrado,yCuadrado];
          let uVelocidad = this._jsonElementos.bola.elemento._vectorXY;
          let bolaProxTick = [coordenadasBolaProximoTick.x,coordenadasBolaProximoTick.y];
          let posBola = [this._jsonElementos.bola.x,this._jsonElementos.bola.y];

          let diferencialX = Math.abs(posCuadrado[0] - posBola[0]);
          let diferencialY = Math.abs(posCuadrado[1] - posBola[1]);

          diferencialX > diferencialY ? colision.vectorAcambiar="x" : colision.vectorAcambiar="y";

          colision.objetoColisionado = cuadrado;
          //colision.vectorAcambiar = "y"; //provisional
          console.log("colisionCuadradoy");
        return true; // This will stop the iteration
        }
      }
    
      return false;
    });
    if (colision.objetoColisionado && colision.vectorAcambiar) return colision;    

    if (coordenadasBolaProximoTick.y 
      + this._jsonElementos.bola.elemento.radio/tamCasilla + 0.1 >= 20){
        debugger
        if (coordenadasBolaProximoTick.x > this._jsonElementos.pala.elemento._x &&
            coordenadasBolaProximoTick.x < this._jsonElementos.pala.elemento._x + this._jsonElementos.pala.ancho) {

          console.log("colisionPala");
          debugger
          
          colision.vectorAcambiar = 
          coordenadasBolaProximoTick.y 
              + this._jsonElementos.bola.elemento.radio/tamCasilla 
              + 0.1 > 20.2 
                  ? "x" 
                  : "y";
      

          colision.elemento=this._jsonElementos.pala.elemento;
          return colision;
        }

    }

    if (
      coordenadasBolaProximoTick.x -
        this._jsonElementos.bola.elemento.radio / tamCasilla <
      -1
    ) {
      colision.objetoColisionado = this;
      console.log("Colisión Pared Izquierda");
      colision.vectorAcambiar = "x";
      return colision;
    } else if (
      coordenadasBolaProximoTick.x +
        this._jsonElementos.bola.elemento.radio / tamCasilla >
      this._width / tamCasilla + 1
    ) {
      colision.objetoColisionado = this;
      console.log("Colisión Pared Derecha");
      colision.vectorAcambiar = "x";
      return colision;
    } else if (
      coordenadasBolaProximoTick.y -
        this._jsonElementos.bola.elemento.radio / tamCasilla <
      -1
    ) {
      colision.objetoColisionado = this;
      console.log("Colisión Pared Superior");
      colision.vectorAcambiar = "y";
      return colision;
    } else if (
      coordenadasBolaProximoTick.y +
        this._jsonElementos.bola.elemento.radio / tamCasilla >
      this._height / tamCasilla + 1
    ) {
      colision.objetoColisionado = this;
      console.log("Colisión Pared Inferior");
      colision.vectorAcambiar = "y";
      return colision;
    }

    return null;
  }

  alterarVectorBola(colision) {
    if (colision) {
      switch (colision.vectorAcambiar) {
        case "x":
          this._jsonElementos.bola.elemento.vectorXY[0] *= -1;
          break;
        case "y":
          this._jsonElementos.bola.elemento.vectorXY[1] *= -1;
          break;
        default:
          break;
      }
    }
  }

  actualizarVidas(cuadrado) {
    cuadrado.quitarVida();
    if (cuadrado.vidas === 0) {
      cuadrado = null;
    }
  }

  actualizarTablero(){
    const colision = this.comprobarColisionBola();
    //COMPROBAR SI LA BOLA PUEDE SEGUIR EL MISMO VECTOR

    //depende de this.comprobarColisionBola()
    if (colision) {
        this.alterarVectorBola(colision);
        if (colision.elemento instanceof Cuadrado) {
            this.actualizarVidas(colision.elemento);
        }
    }
    let bolaAux = this._jsonElementos.bola.elemento;
    bolaAux.mover();
    this._jsonElementos.bola={ elemento : bolaAux, x : bolaAux._x, y : bolaAux._y};
    //this._jsonElementos.pala.elemento.dibujar();
  }

  animarTablero(){
    setInterval(() => {
      this.actualizarTablero();
      this.borrarTablero();
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
