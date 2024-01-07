class Bola{
  constructor(x, y, visible = true, color = "red", vectorX = -1, vectorY = 1) {
    this._x = x;
    this._y = y;
    this._visible = visible;
    this._color = color;
    this._radio = 15;
    this._velocidad = 1;
    this._vectorXY = [vectorX, vectorY];
    this._mulVelocidad = 2;
  }

  mover(){
    this._x+=this._vectorXY[0]/tamCasilla*this._mulVelocidad;
    this._y+=this._vectorXY[1]/tamCasilla*this._mulVelocidad;
  }
  
  dibujar() {
    ctx.beginPath();
    ctx.arc(this._x*tamCasilla, this._y*tamCasilla, this._radio, 0, 2 * Math.PI);
    ctx.fillStyle = this._color;
    ctx.fill();
    ctx.closePath();
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
