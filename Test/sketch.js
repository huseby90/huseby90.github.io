class ball{
  constructor(a,b,vx,vy,r){
    this.x = a
    this.y = b
    this.vx = vx //velocity i x retning
    this.vy = vy
    this.ax = 0
    this.ay = 0
    this.r = r
    this.m = 5 * r 

  
  }

  display(){
    circle(this.x,this.y,this.r)
  }

  updatePos(){
    this.vx += this.ax
    this.vy += this.ay

    this.x += this.vx
    this.y += this.vy

  }
  edges(){
    if (this.x < 0){
      this.vx *= -1
    }
    if (this.x > 400){
      this.vx *= -1
    }
    if (this.y > 400){
      this.vy *= -1
    }
    if (this.y < 0){
      this.vy *= -1
    }
  }

  applyForce(ForceX,ForceY){
      this.ax = ForceX / this.m  // F = ma
      this.ay = ForceY / this.m  // a = F/m

  }
}

const N = 20
let baller = []
for (let i = 0; i<N; i++){
  let x = Math.random()*400
  let y = Math.random()*400
  let vx = Math.random()*10 -5
  let vy = Math.random()*10 -5
  let r = Math.random()*30 + 10
  b = new ball(x,y,0,0,r)
  baller.push(b)
}


function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {

  for (let i = 0; i < baller.length; i++){
    baller[i].applyForce(0,5)

    if (mouseIsPressed == true){
      baller[i].applyForce(10,0)
  
    }
    baller[i].display()
    baller[i].updatePos()
    baller[i].edges()
  }
 
  


}
