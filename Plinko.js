class Plinko{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,{isStatic : true});
        World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        fill(255,255,255);
        ellipse(this.body.position.x,this.body.position.y,10);

    }
}