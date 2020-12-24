class ground{
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,800,10,options);
        this.width = 800;
        this.height = 10;

    World.add(world,this.body); 
    };
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
        

    }
}