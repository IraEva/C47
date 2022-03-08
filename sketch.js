var Girl1,Girl2,Girl3,Girl4,Girl5,Girl6 ; 
var Girl;
var strawberry;
var grape, grapeImg, grapeGroup;
var knife;
var garden, gardenImg; 

function preload(){
  Girl_running = loadAnimation("Girl1.png","Girl2.png","Girl3.png","Girl4.png","Girl5.png","Girl6.png");
  strawberry = loadImage("Strawberry.png");
  grapeImg = loadImage("Grape.png");
  knife = loadImage("Knife.png");
  gardenImg = loadImage("garden.png");
}

function setup() {
  createCanvas(600, 600);

  garden = createSprite(200,180,400,20);
  garden.addImage("gardenImage",gardenImg);
  garden.x = garden.width /2;
  garden.velocityX = -4;
  garden.scale = 1.5
  
  Girl = createSprite(100,500,10,15);
  Girl.addAnimation("running",Girl_running);
  Girl.scale = 0.5;

  grapeGroup = new Group()
}

function draw() {
  background(200);

  spawnGrape()

  drawSprites()
}

function spawnGrape(){
  if(frameCount % 120 === 0 ) {
  grape = createSprite(600,500,15,20)
  grape.y = Math.round(random(200,400))
  grape.addImage (grapeImg)
  grape.velocityX = -2
  grape.scale = 0.1
  grapeGroup.add(grape)
  }
}













