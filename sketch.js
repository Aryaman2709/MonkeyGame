
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  bananaGroup = new Group;
  obstacleGroup = new Group;
  
}


function draw() {

  background("white");
  
  if(keyDown("space")&&monkey.y > 275){
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  survivalTime=Math.ceil(frameCount/frameRate())
  fill("black")
  textSize(20);
  text("Survival Time:" + survivalTime, 140,50)
  
  spawnBananas();
  
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas(){
  if(frameCount%80===0){
    banana = createSprite(400,Math.round(random(120,200),20,20));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 110;
    bananaGroup.add(banana);
  }
}


function spawnObstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(400,315,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.175;
    obstacle.velocityX = -4;
    obstacle.lifetime = 110;
    obstacleGroup.add(obstacle);
  }
}

