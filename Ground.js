class Ground{
    constructor(){
        this.body = Bodies.rectangle(width/2,height-10,width+10,10,{isStatic : true});
        World.add(world,this.body);

    }

    display(){
        rectMode(CENTER);
        fill(255,255,255);
        rect(this.body.position.x,this.body.position.y,width+10,10);
    }

}