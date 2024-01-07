class Pala {
  constructor(x, y, ancho, visible = false, tipo = 7, color = "yellow") {
    
    this._x = x;
    this._y = y;
    this._width = ancho;
    this._height = 1;
    this._visible = visible;
    this._tipo = tipo;
    this._velocidad = this.velocidadTipo();

    this._imagen = null;
    this._color = color;
    this._mulVelocidad = 1;

    this.moviendo = null;

/*
    if (tieneImagen()) {
      try {
        this._imagen = document.createElement("img");
        this._imagen.src = imagenTipo(this._tipo);
      } catch (error) {
        console.error("Error buscando imagen:", error.message);
      }
    } else if (color) {
      this._color = color;
    } else {
      console.error("error no hay color ni imagen");
    }*/
  }

  mover(e) {
      if(this.moviendo===null) this.moviendo = setInterval(() => {
        switch (e.key) {
          case 'ArrowLeft':
            // Mover hacia la izquierda
            this._x -= 1 /10 * this._mulVelocidad;
            break;
          case 'ArrowRight':
            // Mover hacia la derecha
            this._x += 1 /10 * this._mulVelocidad;
            break;
          // Puedes manejar otras teclas de flecha si es necesario
        }
      }, 1000 / MAXfps);
  }

  pararMovimiento() {
    clearInterval(this.moviendo);
    this.moviendo = null;
  }

  velocidadTipo(){
    switch (this._tipo) {
      case 7:
        return this._velocidad;
        break;
      case 8:
        return this._velocidad*2;
        break;
      case 9:
        return this._velocidad*3;
        break;
    
      default:
        break;
    }
  }

  tieneImagen() {
    return this._tipo >= 7 && this._tipo <= 9;
  }

  usarObjeto() {
    return juego.traducirObjeto();
  }

  dibujar() {
    if (this._imagen) {
      ctx.drawImage(this._imagen, this._x, this._y, this._width*tamCasilla, this._height*tamCasilla);
    } else if (this._color) {
      ctx.fillStyle = this._color;
      ctx.fillRect(this._x*tamCasilla, this._y*tamCasilla, this._width*tamCasilla, this._height*tamCasilla);
    }
  }
}