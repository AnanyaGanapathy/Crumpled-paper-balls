var ball;
var ground;
var left_wall;
var right_wall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ball = Bodies.circle(50, 600, 20, ball_options)
World.add(world, ball)
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}



	//Create the Bodies Here.
ground = new Ground(400, 680, 800, 20)
left_wall = new Ground(500, 610, 20, 120)
right_wall = new Ground(750, 610, 20, 120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y, 20)
ground.display()
left_wall.display()
right_wall.display()

  drawSprites();
 
}

function keyPressed(){
	//if(keyCode === UP_ARROW) {
		if(keyDown('UP_ARROW')){
		Body.applyForce(ball, {x:0, y:0}, {x:45, y:0})
	}
}
