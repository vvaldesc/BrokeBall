class Pala {
    constructor(x, y, ancho, visible = false, tipo = 0, color = null) {
      this._x = x;
      this._y = y;
      this._width = juego.tamCasilla() * ancho;
      this._height = juego.tamCasilla();
      this._visible = visible;
      this._tipo = tipo;
      this._velocidad = velocidad;
  
      if (tieneImagen(tipo)) {
        try{
          this.imagen = document.createElement("img");
          this.imagen.src = imagenTipo(this._tipo);
        } catch (error) {
          console.error("Error buscando imagen:", error.message);
        }
      } else if (color){
        this._color = color;
      } else {
        console.error("error no hay color ni imagen");
      }
    }

    usarObjeto(){
        return juego.traducirObjeto();
    }
  
    dibujar() {
      if (this._imagen) {
        ctx.drawImage(this._imagen, this._x, this._y, this._width, this._height);
      } else if (this._color) {
        ctx.fillStyle = this._color;
        ctx.fillRect(this._x, this._y, this._width, this._height);
      }
    }
  }