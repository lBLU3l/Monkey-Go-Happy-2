//Global Variables
var monkey, bImage, rImage, rGroup, bGroup, ground, backImage, jungle, score, player_running;


function preload(){
  
  backImage = loadImage ("jungle.jpg");
  
  player_running = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bImage = loadImage ("banana.png");
  
  rImage = loadImage ("stone.png");
  
}


function setup() {
  createCanvas(600,300);
  
  jungle = createSprite (300,150,600,300);
  jungle.addImage (backImage);
  jungle.scale = 1;
  jungle.x = jungle.width/2;
  jungle.velocityX = -4;
  
  
  monkey = createSprite (50,265)
  monkey.addAnimation ("running", player_running);
  monkey.scale = 0.1
  
  ground = createSprite (300, 290, 600,20)
  
  bGroup = createGroup();
  rGroup = createGroup();
  
  score = 0;
  
}


function draw(){
 background(255); 
  
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  if (rGroup.isTouching (monkey)){
    monkey.scale = 0.08;
  }
  
  if (bGroup.isTouching(monkey)){
    score = score +2;
    bGroup.destroyEach();
  }
  
  monkey.collide (ground);
  
  ground.visible = false;
  
  if (keyDown("space")&& monkey.y >= 225){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.7;
  
  spawnB();
  spawnR();

  switch (score){
      
    case 10: monkey.scale = 0.12;
      break;
      case 20: monkey.scale = 0.14;
      break;
      case 30: monkey.scale = 0.16;
      break;
      case 40: monkey.scale = 0.18;
      break;
      default:break;
  }
  
  drawSprites();
  
  stroke ("white");
  textSize (20);
  fill("white");
  text("Score: "+ score, 500,50);
  
}

function spawnB(){
  if(frameCount % 80 == 0){
    var b = createSprite (600, 200, 20,20)
    b.y = Math.round(random(140,270));
    b.velocityX = -4;
    b.addImage (bImage);
    b.scale = 0.04   
    
    b.lifetime = 150;
    
    bGroup.add(b);
  }
}

function spawnR(){
  if(frameCount % 120 == 0){
    var r = createSprite (600, 260, 20,20)
    r.velocityX = -5;
    r.addImage (rImage);
    r.scale = 0.15
    
    r.lifetime = 150;
       
    rGroup.add(r);
  }
}