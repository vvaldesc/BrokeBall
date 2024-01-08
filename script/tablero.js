function traducirObjeto(numeroDeObjeto) {
  switch (numeroDeObjeto) {
    case 5:
      break;
    default:
      break;
  }
}

class Tablero {
  constructor(arrMatrices, vuX = 0, vuY = 1) {
    debugger
    this._nivel=0;
    this._vidas=3;
    this._arrMatrices = arrMatrices;

    this._matrizActual = arrMatrices[this._nivel];

    this._height = this._matrizActual.length;
    this._width = this._matrizActual[0].length;
    this._height = this._matrizActual.length*tamCasilla;
    this._width = this._matrizActual[0].length*tamCasilla;
    this._jsonElementos = this.inicializarTablero([vuX,vuY]);
    //this.mostrarTablero();
    this._animacionTablero = this.animarTablero();

  }

  inicializarTablero([vuX,vuY]) {
    debugger
    this._matrizActual = this._arrMatrices[this._nivel];
    let jsonCuadrados = {
      elemento: [],
      x: [],
      y: [],
      spawn: null,
      vectorSpawn: null,
    };

    let jsonBola = {
      elemento: null,
      x: null,
      y: null,
    };

    let jsonarrPala = {
      elemento: null,
      x: null,
      y: null,
      ancho: null,
    };
    let anchoInicialPala = 1;
    try {
      this._matrizActual.forEach((fila, y) =>
        fila.forEach((elemento, x) => {
          if (elemento >= 1 && elemento <= 3) {
            let cuadrado = new Cuadrado(x, y, true, elemento);
            jsonCuadrados.elemento.push(cuadrado);
            jsonCuadrados.x.push(x);
            jsonCuadrados.y.push(y);
          } else if (elemento >= 7 && elemento <= 9) {
            // LA PALA SIEMPRE INICIARÁ SIENDO TIPO 7
            if (x - 1 < this._width/tamCasilla && this._matrizActual[y][x + 1] !== 7) {
              let pala = new Pala(
                x - anchoInicialPala + 1,
                y,
                anchoInicialPala,
                true,
                elemento
              );
              jsonarrPala.elemento = pala;
              jsonarrPala.ancho = anchoInicialPala;
              jsonarrPala.x = x;
              jsonarrPala.y = y;
            } else {
              anchoInicialPala++;
            }
          } else if (elemento === 10) {
            let bola = new Bola(x, y, true, "red", vuX, vuY);
            jsonBola.elemento = bola;
            jsonBola.x = x;
            jsonBola.y = y;
            jsonBola.spawn = [x,y];
            jsonBola.vectorSpawn = [vuX, vuY];
          }
        })
      );
      if (
        jsonCuadrados.elemento.length === 0 ||
        jsonBola.elemento === null ||
        jsonarrPala.elemento === null
      ){
        throw new Error(
          "No se crearon instancias necesarias de Bola, arrPala o cuadrado"
        );
    }
      return {
        Cuadrados: jsonCuadrados,
        bola: jsonBola,
        pala: jsonarrPala,
      };
    } catch (error) {
      console.error(error);
    }
  }

  mostrarTablero() {
    //INSTANCIAR TODOS LOS OBJETOS DE NUEVO ME PARECE MENOS ÓPTIMO QUE EDITAR LAS INSTANCIAS EXISTENTES
    this._jsonElementos.Cuadrados.elemento.map((cuadrado) =>
      cuadrado.dibujar()
    );

    /*this._jsonElementos.Cuadrados.elemento.map((cuadrado) => {
      cuadrado.dibujar();
      this.dibujarPunto(cuadrado._x,cuadrado._y);
    });*/

    this._jsonElementos.bola.elemento.dibujar();
    //this.dibujarPunto(this._jsonElementos.bola.x,this._jsonElementos.bola.y);

    this._jsonElementos.pala.elemento.dibujar();
  }

  comprobarColisionBola() {
    // la bola mide de radio 20

    //Hago estas comprobaciones en memoria de vídeo ya que
    //La bola se mueve pixel por pixel, no por posición de tablero
    let coordenadasBolaProximoTick = {
      x:
        this._jsonElementos.bola.x +
        this._jsonElementos.bola.elemento.vectorXY[0] / 30,
      y:
        this._jsonElementos.bola.y +
        this._jsonElementos.bola.elemento.vectorXY[1] / 30,
    };

    let colision = {
      objetoColisionado: null,
      vectorAcambiar: null,
      index: null,
    };

    let vectorAux = this._jsonElementos.bola.elemento.vectorXY;
    let radioComprobarX = this._jsonElementos.bola.elemento.radio / tamCasilla;
    let radioComprobarY = this._jsonElementos.bola.elemento.radio / tamCasilla;
    if (vectorAux[0] > 0) radioComprobarX = -radioComprobarX;
    if (vectorAux[1] > 0) radioComprobarY = -radioComprobarY;

    this.dibujarPunto(
      this._jsonElementos.bola.x - radioComprobarX,
      this._jsonElementos.bola.y - radioComprobarY
    );

    console.log(this._matrizActual);
    console.log(Math.trunc(coordenadasBolaProximoTick.x - radioComprobarX));
    console.log(Math.trunc(coordenadasBolaProximoTick.y - radioComprobarY));

    //COLISIÓN CONTRA BORDES
    if (
      coordenadasBolaProximoTick.x -
        this._jsonElementos.bola.elemento.radio / tamCasilla <
      0
    ) {
      colision.objetoColisionado = this;
      console.log("Colisión Pared Izquierda");
      colision.vectorAcambiar = "x";
      return colision;
    } else if (
      coordenadasBolaProximoTick.x +
        this._jsonElementos.bola.elemento.radio / tamCasilla >
      this._width / tamCasilla
    ) {
      colision.objetoColisionado = this;
      console.log("Colisión Pared Derecha");
      colision.vectorAcambiar = "x";
      return colision;
    } else if (
      coordenadasBolaProximoTick.y -
        this._jsonElementos.bola.elemento.radio / tamCasilla <
      0
    ) {
      colision.objetoColisionado = this;
      console.log("Colisión Pared Superior");
      colision.vectorAcambiar = "y";
      return colision;
    } else if (
      coordenadasBolaProximoTick.y +
        this._jsonElementos.bola.elemento.radio / tamCasilla >
      this._height / tamCasilla
    ) {
      colision.objetoColisionado = this;
      console.log("Colisión Pared Inferior");
      colision.vectorAcambiar = "y";
      colision.lado = "inferior";
      return colision;
    }

    //COLISION CONTRA BLOQUE
    //NO ENTRA EL 7 (PALA) PORQUE ESA COMPROBACIÓN LA HARÉ EN MEMORIA DE VÍDEO
    let valorTableroColisionado =
      this._matrizActual[
        Math.trunc(coordenadasBolaProximoTick.y - radioComprobarY)
      ][Math.trunc(coordenadasBolaProximoTick.x - radioComprobarX)];
    if (
      valorTableroColisionado === 1 ||
      /*||
      valorTableroColisionado === 7*/
      valorTableroColisionado === 2 ||
      valorTableroColisionado === 3
    ) {
      if (
        valorTableroColisionado === 1 ||
        valorTableroColisionado === 2 ||
        valorTableroColisionado === 3
      ) {
        const resultado = this.encontrarInstanciaBloque(
          coordenadasBolaProximoTick,
          radioComprobarY,
          radioComprobarX,
          colision
        );

        colision.objetoColisionado = resultado.objetoColisionado;
        colision.index = resultado.index;
      }
      //else if (valorTableroColisionado === 7) colision.objetoColisionado = this._jsonElementos.pala.elemento;

      let xCuadrado = colision.objetoColisionado.x;
      let yCuadrado = colision.objetoColisionado.y;

      let centroCuadradoX = xCuadrado + tamCasilla / tamCasilla / 2;
      let centroCuadradoY = yCuadrado + tamCasilla / tamCasilla / 2;

      console.log("Pos bola y: " + this._jsonElementos.bola.y);
      console.log("Pos bola x: " + this._jsonElementos.bola.x);

      let vectorAbsoluto = this._jsonElementos.bola.elemento.vectorXY;
      console.log("Vector: " + vectorAbsoluto);

      //Reflexión:

      console.log(Math.abs(centroCuadradoY - this._jsonElementos.bola.y));
      if (
        Math.abs(centroCuadradoY - this._jsonElementos.bola.y) <
        this._jsonElementos.bola.elemento.radio / tamCasilla
      ) {
        colision.vectorAcambiar = "x";
      } else {
        colision.vectorAcambiar = "y";
      }
      return colision;
    }

    //COLISION PALA EN MEMORIA DE VÍDEO
    console.log(this._matrizActual[0].length - 1);
    console.log(coordenadasBolaProximoTick.x - radioComprobarY);

    if (
      coordenadasBolaProximoTick.y - radioComprobarY >
      this._matrizActual[0].length
    ) {
      if (
        coordenadasBolaProximoTick.x - radioComprobarX >
          this._jsonElementos.pala.elemento._x &&
        coordenadasBolaProximoTick.x -
          radioComprobarX -
          this._jsonElementos.pala.elemento._x <
          this._jsonElementos.pala.ancho
      ) {
        colision.vectorAcambiar = "y";
        colision.objetoColisionado = this._jsonElementos.pala;
        return colision;
      }
    }

    return null;
  }

  redondearVideoTablero(
    coordenadasBolaProximoTick,
    radioComprobarY,
    radioComprobarX,
    colision,
    invertir = false
  ) {
    let vectorAux2 = null;
    if (invertir) {
      if (colision.vectorAcambiar == "x") {
        vectorAux2 = [
          Math.trunc(coordenadasBolaProximoTick.x - radioComprobarX),
          Math.trunc(coordenadasBolaProximoTick.y - radioComprobarY),
        ];
      } else {
        vectorAux2 = [
          Math.trunc(coordenadasBolaProximoTick.x - radioComprobarX),
          Math.trunc(coordenadasBolaProximoTick.y - radioComprobarY),
        ];
      }
      return vectorAux2;
    } else {
      if (colision.vectorAcambiar == "x") {
        vectorAux2 = [
          Math.trunc(coordenadasBolaProximoTick.x - radioComprobarX),
          Math.round(coordenadasBolaProximoTick.y - radioComprobarY),
        ];
      } else {
        vectorAux2 = [
          Math.round(coordenadasBolaProximoTick.x - radioComprobarX),
          Math.trunc(coordenadasBolaProximoTick.y - radioComprobarY),
        ];
      }
      return vectorAux2;
    }
  }

  alterarVectorBola(colision) {
    if (colision) {
      switch (colision.vectorAcambiar) {
        case "x":
          this._jsonElementos.bola.elemento.vectorXY[0] *= -1;
          break;
        case "y":
          this._jsonElementos.bola.elemento.vectorXY[1] *= -1;
          if (colision.objetoColisionado.elemento instanceof Pala) {
            let vectorAntiguo = this._jsonElementos.bola.elemento.vectorXY;
            switch (colision.objetoColisionado.elemento._direccion) {
              case "derecha":
                vectorAntiguo[0] += 1;
                this._jsonElementos.bola.elemento.vectorXY = vectorAntiguo;
                break;
              case "izquierda":
                vectorAntiguo[0] -= 1;
                this._jsonElementos.bola.elemento.vectorXY = vectorAntiguo;
                break;
              default:
                break;
            }
          }
          break;
        default:
          break;
      }
    }
  }

  encontrarInstanciaBloque(
    coordenadasBolaProximoTick,
    radioComprobarY,
    radioComprobarX,
    colision,
    invertir = false
  ) {
    let vectorAux2 = this.redondearVideoTablero(
      coordenadasBolaProximoTick,
      radioComprobarY,
      radioComprobarX,
      colision,
      invertir
    );
    let index = 0;
    let enc = false;
    while (!enc && index < this._jsonElementos.Cuadrados.y.length) {
      let vectorAux = [
        this._jsonElementos.Cuadrados.x[index],
        this._jsonElementos.Cuadrados.y[index],
      ];

      if (vectorAux.every((value, i) => value === vectorAux2[i])) {
        enc = true;
        colision.objetoColisionado =
          this._jsonElementos.Cuadrados.elemento[index];
        return { objetoColisionado: colision.objetoColisionado, index: index };
      }

      index++;
    }
    if (!colision.objetoColisionado)
      return this.encontrarInstanciaBloque(
        coordenadasBolaProximoTick,
        radioComprobarY,
        radioComprobarX,
        colision,
        true
      );
  }

  resisteCuadradoColision(cuadrado) {
    return cuadrado.resiste();
  }

  perder(colision){
    if (colision.objetoColisionado instanceof Tablero)
      return colision.lado == "inferior";
  }

  finPartida(colision) {
    if (this.perder(colision)) {
      this._vidas-=1;
      if (this._vidas==0) {
        this.mostrarTexto("Has perdido");
        clearInterval(this._animacionTablero);
        this._animacionTablero = null;
        return true;
      }
      console.log("perdido");
      this._jsonElementos = this.inicializarTablero([-1,1]);
      return true;
    } else if (this._jsonElementos.Cuadrados.elemento.length == 0) {
      debugger
      console.log("ganado");
      this._vidas = 3
      this._nivel++;
      this._jsonElementos = this.inicializarTablero([-1,1]);
      return true;
    }
  }

  comprobarGanadoJuego(){
    if (this._nivel < MAXniveles ) {
      this._jsonElementos = this.inicializarTablero([-1,1]);
      this._vidas = 3
      this._animacionTablero = this.animarTablero();
    } else if (this._nivel === 2) {
      this.mostrarTexto("Has ganado");
    }
  }

  comprobarPerdidoJuego(){
    if (this._vidas === 0) {
      this.mostrarTexto("Has perdido");
    }
  }

  mostrarTexto(txt){
      ctx.font = "italic 30px Arial";
      ctx.fillStyle = "red";
      ctx.fillText(txt, 200, 150);
  }

  actualizarTablero() {
    //COMPROBAR SI LA BOLA PUEDE SEGUIR EL MISMO VECTOR
    const colision = this.comprobarColisionBola();

      //depende de this.comprobarColisionBola()
      if (colision) {
        if (this.finPartida(colision)) {
          console.log("fin");
          //this.comprobarPerdidoJuego();
          //this.comprobarGanadoJuego();
        } else {
          this.alterarVectorBola(colision);
          if (colision.objetoColisionado instanceof Cuadrado) {
            if (!this.resisteCuadradoColision(colision.objetoColisionado))
              this.eliminarCuadrado(colision.index);
          }
        }
      }

      let bolaAux = this._jsonElementos.bola.elemento;
      bolaAux.mover();
      this._jsonElementos.bola = {
        elemento: bolaAux,
        x: bolaAux._x,
        y: bolaAux._y,
      };
      //this._jsonElementos.pala.elemento.dibujar();
    }

  eliminarCuadrado(index) {
    this._matrizActual[this._jsonElementos.Cuadrados.y[index]][
      this._jsonElementos.Cuadrados.x[index]
    ] = 0;
    this._jsonElementos.Cuadrados.elemento.splice(index, 1);
    this._jsonElementos.Cuadrados.x.splice(index, 1);
    this._jsonElementos.Cuadrados.y.splice(index, 1);
  }

  animarTablero() {
    return this._jugando = setInterval(() => {
      this.actualizarTablero();
      this.borrarTablero();
      this.mostrarTablero();
    }, 1000 / MAXfps);
  }

  borrarTablero() {
    canvas.width = nivel_1[0].length * tamCasilla;
    canvas.height = nivel_1.length * tamCasilla;
  }

  hayCuadrados() {
    for (const fila of this._matrizActual) {
      for (const numero of fila) {
        if (numero == 1 || numero == 2 || numero == 3) return true;
      }
    }
    return false;
  }

  dibujarPunto(x, y) {
    ctx.beginPath();
    ctx.arc(x * tamCasilla, y * tamCasilla, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
  }
}
