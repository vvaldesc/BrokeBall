class Cuadrado {
  constructor(x, y, visible = false, tipo = 0, color = null) {
    this._x = x;
    this._y = y;
    this._width = juego.tamCasilla();
    this._height = juego.tamCasilla();
    this._visible = visible;
    this._tipo = tipo;
    this._objeto = juego.traducirObjeto(randomObjeto(this._tipo));
    this._vidas = vidasTipo();
    this._color = null;
    this._imagen = null;


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
    }
  }

  tieneImagen(){
    return (this._tipo >= 0 && this._tipo <=3);
  }

  dibujar() {
    if (this._imagen) {
      ctx.drawImage(this._imagen, this._x, this._y, this._width, this._height);
    } else if (this._color) {
      ctx.fillStyle = this._color;
      ctx.fillRect(this._x, this._y, this._width, this._height);
    }
  }



  //GETTERS // SETTERS
  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    this._visible = value;
  }

  get tipo() {
    return this._tipo;
  }

  set tipo(value) {
    this._tipo = value;
  }

  get objeto() {
    return this._objeto;
  }

  set objeto(value) {
    this._objeto = value;
  }

  get vidas() {
    return this._vidas;
  }

  set vidas(value) {
    this._vidas = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  get imagen() {
    return this._imagen;
  }

  set imagen(value) {
    this._imagen = value;
  }
}
