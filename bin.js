class Bin {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("sprites/bin.png")
    this.width = width;
    this.height = height
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    fill("red");
    image(this.image,pos.x, pos.y, this.width, this.height+110);
    pop();
    }
};








