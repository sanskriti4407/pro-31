const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  var canvas = createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  for(var x = 0; x <= width; x = x + 80){
    divisions.push(new Division(x, height-115));
  }

  for(var x = 40; x <= width; x = x+50){
    plinkos.push(new Plinko(x, 75));
  }

  for(var x = 15; x <= width; x = x+50){
    plinkos.push(new Plinko(x,125));
  }
  
  for(var x = 40; x <= width; x = x+50){
    plinkos.push(new Plinko(x, 175));
  }

  for(var x = 15; x <= width; x = x+50){
    plinkos.push(new Plinko(x,225));
  }

 
}

function draw() {
  Engine.update(engine);

  background(0);  

  ground.display();

  for(var d = 0; d < divisions.length; d++){
    divisions[d].display();
  }

  for(var d = 0; d < plinkos.length; d++){
    plinkos[d].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20,width/2+20),10))

  }

  for(var d = 0; d < particles.length; d++){
    particles[d].display();
  }

  drawSprites();
}