class Ground {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
       this.ground=Bodies.rectangle(x,y,width,height,options);
        this.width=width,
        this.height=height;
        World.add(world,this.ground);
    }
    display(){
        var pos = this.ground.position;
        var angle= this.ground.angle;
        push ();
         fill("red");
         rectMode(CENTER);
         rect(this.ground.position.x,this.ground.position.y,ground.width,ground.height);
         pop();
    }
} 