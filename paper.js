class paper{
    constructor(x,y){
        var options = {
            'restitution': 0.8,
            'density' : 0.7,
            'friction' : 1.0
        };
        this.body = Bodies.circle(x,y,25)
        this.radius = 25;

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    };
   
}
