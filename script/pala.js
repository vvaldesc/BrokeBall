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
    this._mulVelocidad = 1/5;

    this._moviendo = null;
    this._direccion = null;
  }

  mover(e, LIM) {
    if (!this._moviendo || (this._moviendo === "izquierda" && e.key === 'ArrowLeft') || (this._moviendo === "derecha" && e.key === 'ArrowRight')) {
      this._moviendo = setInterval(() => {
        switch (e.key) {
          case 'ArrowLeft':
            // Mover hacia la izquierda
            if (this._x > 0) {
              this._x -= 1 * this._mulVelocidad;
              this._direccion = "izquierda";
            }
            break;
  
          case 'ArrowRight':
            // Mover hacia la derecha
            if ((this._x + this._width - 1) * tamCasilla < LIM) {
              this._x += 1 * this._mulVelocidad;
              this._direccion = "derecha";
            }
            break;
  
          // Puedes manejar otras teclas de flecha si es necesario
        }
      }, 1000 / MAXfps);
    }
  }

  pararMovimiento() {
    clearInterval(this._moviendo);
    this._moviendo = null;
    this._direccion = null;

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

  usarHabilidad(e, habilidadJSON) {
    switch (habilidadJSON.habilidad) {
      case 0:
        this.habilidadVelocidadPala();
        break;
      default:
        break;
    }
  }

  habilidadVelocidadPala(){
    // Establecer el color inicial y la multiplicación de velocidad
    this._color = "pink";
    this._mulVelocidad += 1/5;
    // Ejecutar las líneas después de 5 segundos
    setTimeout(() => {
      // Cambiar el color y ajustar la multiplicación de velocidad después de 5 segundos
      this._color = "yellow";
      this._mulVelocidad -= 1/5;
    }, 5000);
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