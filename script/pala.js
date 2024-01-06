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

  mover(){
    /**/
    return 0
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
    debugger
    if (this._imagen) {
      ctx.drawImage(this._imagen, this._x, this._y, this._width*tamCasilla, this._height*tamCasilla);
    } else if (this._color) {
      ctx.fillStyle = this._color;
      ctx.fillRect(this._x*tamCasilla, this._y*tamCasilla, this._width*tamCasilla, this._height*tamCasilla);
    }
  }
}

document.addEventListener("keydown",mover);