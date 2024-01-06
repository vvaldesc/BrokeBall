class Pala {
  constructor(x, y, ancho, visible = false, tipo = 7, color = "yellow") {
    debugger
    
    this._x = x;
    this._y = y;
    this._width = tamCasilla * ancho;
    this._height = tamCasilla;
    this._visible = visible;
    this._tipo = tipo;
    this._velocidad = this.velocidadTipo();

    this._imagen = null;
    this._color = null;
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
      ctx.drawImage(this._imagen, this._x, this._y, this._width, this._height);
    } else if (this._color) {
      ctx.fillStyle = this._color;
      ctx.fillRect(this._x, this._y, this._width*tamCasilla, this._height*tamCasilla);
    }
  }
}
