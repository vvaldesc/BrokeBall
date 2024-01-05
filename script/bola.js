class Bola {
    constructor(x, y, visible = false, color = null) {
      this.x = x;
      this.y = y;
      this.width = juego.tamCasilla() * ancho;
      this.height = juego.tamCasilla();
      this.visible = visible;
      this.radio = juego.radioBola();
    }

    dibujar() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
  }