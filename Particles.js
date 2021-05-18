class Particle{
    constructor(x,y){
        this.body = Bodies.circle(x,y,8,{restitution:0.6});
        this.color = color(random(0,255),random(0.255),random(0,255));
        World.add(world,this.body);

    }

    display(){
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, 8);

    }
}