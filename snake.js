class Snake {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.size = 20;
    this.step = 5;
    this.atas = false;
    this.bawah = false;
    this.kanan = false;
    this.kiri = false;
  }
  
  tampilkan() {
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  gerak() {
    if(this.atas) this.pos.y = this.pos.y - this.step;
    if(this.bawah) this.pos.y = this.pos.y + this.step;
    if(this.kanan) this.pos.x = this.pos.x + this.step;
    if(this.kiri) this.pos.x = this.pos.x - this.step;
  }
  
  tembus() {
    if(this.pos.x < 0) this.pos.x = width;
  }
}
