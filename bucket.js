class Bucket{
    constructor(x,y,width,height){
      var options={
         isStatic:true,

     }
    this.bucket=Bodies.rectangle(x,y,width,height,options);
    this.width=width,
    this.height = height;
    World.add(world,this.bucket);
    }
    display(){
        var pos = this.bucket.position;
        var angle=this.bucket.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        fill ("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}