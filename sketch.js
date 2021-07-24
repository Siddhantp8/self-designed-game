var PLAY = 1;
var END = 0;
var gameState = PLAY;


var boy;
var boyImg;

var ground;
var groundImg;


var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;



function preload(){
boyImg = loadImage("boy1.png")
groundImg = loadImage("ground2.png");


obstacle1 = loadImage("car1.png");
obstacle2 = loadImage("car2.png");
obstacle3 = loadImage("car3.png");
obstacle4 = loadImage("car4.png");

}

function setup() {
 
  boy = createSprite(400,340,50,50);
  boy.setCollider("rectangle", 0,0,100,50);
  boy.addImage(boyImg);
  boy.scale = 0.1

  ground = createSprite(500,500,800,10);
  ground.x = ground.width /2;
  ground.addImage(groundImg);

  invisibleGround = createSprite(500,500,900,10);
  invisibleGround.visible = false;

}

function draw() {
  createCanvas(1200,600)
  background(255,255,255);  
  

  boy.debug = true;
  ground.debug = true;
 
 boy.setCollider("rectangle", 20,10)

  boy.velocityY = boy.velocityY + 0.8

  if (gameState===PLAY){
  
    if(keyDown("space") && boy.y >= 420) {
      boy.velocityY = -12;
    }

    ground.velocityX = -3;

    if (ground.x <10){
      ground.x = ground.width/2;
    }

    
  
  }
  
  boy.collide(invisibleGround);
  boy.collide(ground);

 
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
   
    
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
             
    
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}





