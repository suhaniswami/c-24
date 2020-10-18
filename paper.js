class Paper{
    constructor(x,y,radius){
        
       var options={
            isStatic:false,
            restitution:0.5,
            friction:0.3,
            density:1.2

        }
        this.paper=Bodies.circle(x,y,radius, options );
        this.radius=40;
        
        World.add(world,this.paper);

    }
    display(){
        var pos=this.paper.position;
        var angle= this.paper.angle
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        fill ("red");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}