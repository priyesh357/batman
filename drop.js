class drop {
    constructor() {
      var options = {
        restitution:1,
        isStatic:false,
        friction:0.1,
      }
      this.x=x
      this.y=y
      this.body = Bodies.rectangle(x,y,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var maxDrops=100
      push();

      translate(pos.x,pos.y)
      
      for(var i=0; i<maxDrops; i++){
        maxDrops.push(new createDrop(random(0,400),random(0,400)));
      }
      
      ellipse(0, 0,);
      pop();
      if (this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
      }
    }
      
    
      
      
  };
