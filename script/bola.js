class Bola {
  constructor(x, y, visible = true, color = "red", vectorX = -1, vectorY = 1) {
    this._x = x;
    this._y = y;
    this._visible = visible;
    this._color = color;
    this._radio = juego.radioBola;
    this._velocidad = 1;
    this._vectorXY = [vectorX, vectorY];
  }

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

  get visible() {
    return this._visible;
  }

  set visible(value) {
    this._visible = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  get radio() {
    return this._radio;
  }

  set radio(value) {
    this._radio = value;
  }

  get velocidad() {
    return this._velocidad;
  }

  set velocidad(value) {
    this._velocidad = value;
  }

  get vectorXY() {
    return this._vectorXY;
  }

  set vectorXY(value) {
    this._vectorXY = value;
  }

  dibujar() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  toString() {
    return `Bola: 
      x = ${this.x},
      y = ${this.y},
      visible = ${this.visible},
      color = ${this.color},
      radio = ${this.radio},
      velocidad = ${this.velocidad},
      vectorXY = [${this.vectorXY.join(', ')}]`;
  }
}
