
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
  engine = Engine.create();
	world = engine.world;
createCanvas(480,800)
 ground1 = new Ground(10,10,480,10)

  Engine.run(engine);
}

function draw() {
  



}
