var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	packageSprite=createSprite(width/3, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	box1=new Box(400,645,200,20);
	box2=new Box(300,605,20,100);
	box3=new Box(500,605,20,100);


	helicopterSprite=createSprite(width/3, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	 packageBody = Bodies.circle(width/3 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	//packageBody.position.x=helicopterSprite.x
	
	Engine.run(engine);
  
}


function draw() {
	background(0);
	
	rectMode(CENTER);
    box1.display();
    box2.display();
    box3.display();

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	  packageBody.position.x=helicopterSprite.x
      Body.setStatic(packageBody,false)
  }
  if(packageBody.position.y===200){

    if (keyCode === RIGHT_ARROW) {
     helicopterSprite.x= helicopterSprite.x+10;
	// packageSprite.x= helicopterSprite.x 
	 packageBody.position.x=helicopterSprite.x
   }
   if (keyCode === LEFT_ARROW) {
	 helicopterSprite.x= helicopterSprite.x-10;
	// packageSprite.x= helicopterSprite.x 
	 packageBody.position.x=helicopterSprite.x
   }
  }
}



