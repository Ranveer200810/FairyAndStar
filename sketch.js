var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, IM;
var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	IM = loadAnimation( "images/fairyImage1.png", "images/fairyImage2.png");
	sound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 650);

	//write code to play fairyVoice sound
	sound.play();

	//create fairy sprite and add animation for fairy
    fairy = createSprite(400, 475, 30, 30);
	fairy.scale = 0.2;
	fairy.addAnimation("1", IM);
//	fairy.debug = true;
	fairy.setCollider("rectangle", 450, 0, 200, 200);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
 // var edges = createEdgeSprites;
 // fairy.bounceOff(edges);

 // fairy.velocityX = 0;

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if (star.isTouching(fairy)) {
	  Matter.Body.setStatic(starBody,true);
	  fairy.velocityX = 0;
	  sound.stop();
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === LEFT_ARROW) {
        fairy.velocityX = -2;
	}
	
	if (keyCode === RIGHT_ARROW) {
        fairy.velocityX = 2;
	}
}
