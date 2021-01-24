class Ball {
    constructor(x, y,height,angle) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.ellipse(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  