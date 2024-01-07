class Cuadrado {
  constructor(x, y, visible = false, tipo = 0, color = "blue") {

    this._x = x;
    this._y = y;
    this._visible = visible;
    this._tipo = tipo;
    this._objeto = traducirObjeto(this.randomObjeto(this._tipo));
    this._vidas = this.vidasTipo();

    this._color = color;
    this._imagen = null;

    if (this.tieneImagen()) {
      try {
        this._imagen = document.createElement("IMG");
        this._imagen.src = "./assets/texturas/textureMap1.jpg";
        //extraccionImagen = this.imagenTipo();
      } catch (error) {
        console.error("Error buscando imagen:", error.message);
        this._color = "black";
      }
    } else if (color) {
      this._color = color;
    } else {
      console.error("error no hay color ni imagen");
    }
  }

  imagenTipo(){

    let lado = 272;
    let padding = 17;
    let separación = 28;
    let vectorInicio = [0,0]
    //17 es el margen
    //29 es la separacion
    //cada lado aumenta 272

    vectorInicio[0]+=padding;
    vectorInicio[1]+=padding;//punto de partida de la imágen


    switch (this._tipo) {
      case 1:
        vectorInicio[0]+=lado+separación+lado+separación+lado;
        break;
      case 2:
        vectorInicio[0]+=lado+separación+lado;
        vectorInicio[1]+=lado+separación+lado;
        break;
      case 3:
        vectorInicio[0]+=lado+separación+lado;
        break;
      default:
        break;
    }
    
    return {
      sx : vectorInicio[0],
      sy : vectorInicio[1],
      slado : lado,
    }


  }

  vidasTipo(){
    switch (this._tipo) {
      case 1:
        return 1
        break;
      case 2:
        return 2
        break;
      case 3:
        return 4
        break;
      default:
        break;
    }
  }

  randomObjeto(){
    switch (this._tipo) {
      case 1:
        return 10;
        break;
      case 2:
        return 10;
        break;
      case 3:
        return 10;
        break;
      default:
        break;
    }
  }

  tieneImagen() {
    return this._tipo >= 0 && this._tipo <= 3;
  }

  dibujar() {
    let extraccionImagen = this.imagenTipo();
    // para empezar con colores
    //this._imagen=null;
    if (this._imagen) {
      ctx.drawImage(this._imagen, extraccionImagen.sx, extraccionImagen.sy, extraccionImagen.slado, extraccionImagen.slado, this._x*tamCasilla, this._y*tamCasilla, tamCasilla, tamCasilla);
      
      /*ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = `rgba(0, 0, 0, ${ 0.20 *(this.vidasTipo() - this.vidas) })`; // Color negro semitransparente
      ctx.fillRect(this._x*tamCasilla, this._y*tamCasilla, tamCasilla, tamCasilla);*/
    
    } else if (this._color) {
      ctx.fillStyle = this._color;
      ctx.fillRect(this._x*tamCasilla, this._y*tamCasilla, tamCasilla, tamCasilla);
    }
  }

  quitarVida(){
    this._vidas--;
  }

  resiste () {
    debugger
    this.quitarVida();
    return this._vidas < 0;
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

  get lado() {
    return this._lado;
  }

  set lado(value) {
    this._lado = value;
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
