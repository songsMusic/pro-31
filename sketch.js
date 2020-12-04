var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup() {
  var engine,world ;
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(470,470,800,10);
  createSprite(400, 200, 50, 50);
  

  //creating divisions 

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }



// creating plinkos 
for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,75));
}

for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,175));
}

 for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}

 for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,375));
}


 
 

}

function draw() {
  background(255,255,255);  

  // creating new particles after every 60 frames 


 if (frameCount%60===0){
  particles.push(new Particle(random(width/2 - 10 , width/2 + 10 , 10,10)))
}
  
// displaying all the objects created 

for(var j = 0; j < particles.length ; j++){
  particles[j].display();
}
for(var k = 0; k < divisions.length ; k++){
  divisions[k].display();
}
 
for(var a = 0; a < plinkos.length ; a++){
  plinkos[a].display();
}

Engine.update(engine) ; 
ground.display();
  drawSprites();
}