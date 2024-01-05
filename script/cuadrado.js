class Cuadrado {
  constructor(x, y, visible = false, tipo = 0, color = null) {
    this.x = x;
    this.y = y;
    this.width = juego.tamCasilla();
    this.height = juego.tamCasilla();
    this.visible = visible;
    this.tipo = tipo;
    this.objeto = juego.traducirObjeto(randomObjeto(this.tipo));
    this.vidas = vidasTipo();
    this.color = null;
    this.imagen = null;


    if (tieneImagen()) {
      try {
        this.imagen = document.createElement("img");
        this.imagen.src = imagenTipo(this.tipo);
      } catch (error) {
        console.error("Error buscando imagen:", error.message);
      }
    } else if (color) {
      this.color = color;
    } else {
      console.error("error no hay color ni imagen");
    }
  }

  tieneImagen(){
    return (this.tipo() >= 0 && this.tipo() <=3);
  }

  dibujar() {
    if (this.imagen) {
      ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
    } else if (this.color) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
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
