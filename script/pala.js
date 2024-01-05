class Pala {
    constructor(x, y, ancho, visible = false, tipo = 0, color = null) {
      this.x = x;
      this.y = y;
      this.width = juego.tamCasilla() * ancho;
      this.height = juego.tamCasilla();
      this.visible = visible;
      this.tipo = tipo;
  
      if (tieneImagen(tipo)) {
        try{
          this.imagen = document.createElement("img");
          this.imagen.src = imagenTipo(this.tipo);
        } catch (error) {
          console.error("Error buscando imagen:", error.message);
        }
      } else if (color){
        this.color = color;
      } else {
        console.error("error no hay color ni imagen");
      }
    }

    usarObjeto(){
        return juego.traducirObjeto();
    }
  
    dibujar() {
      if (this.imagen) {
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
      } else if (this.color) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
  }