class Paper {
  constructor() {
    var options = {
        isStatic: false,
        restitution:0.3,
        friction:0.5,
        density:1.5

    }
    this.body = Bodies.circle(200,620,25,options);
    this.image=loadImage("sprites/paper.png")
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(RADIUS);
    fill("pink");
    image(this.image,pos.x, pos.y, this.width, this.height);
  }
};