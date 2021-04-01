var player 
var platform
var platformGroup 
var score = 0

function preload(){
  
 // backgroundImage = loadImage("image/bg1.png");
  boyy = loadImage("images/p1.gif");
  boyy2 = loadImage("images/p2.gif");
  boyy3 = loadImage("images/left.gif");
  bg = loadImage("images/bg.png");
  
  plat = loadImage("images/platform1.gif");

 
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  ground1 = createSprite(300,300);
  ground1.addImage(bg);
  ground1.scale = 1.5; 
 player = createSprite(200,400)
 player.addImage("b",boyy2)
platformGroup = createGroup();
starting = createSprite(200,500,150,20);
 //starting.addImage(plat);
 
}

function draw() {
  //background(bg);
  // moving ground
 drawSprites();
 player.collide(starting);
 starting.addImage(plat);
 textSize(15)
strokeWeight(15);
fill("red"); 
text("score"+score,1170,40);

 if (ground1.x < 0){
  ground1.x = ground1.width/2;
}



ground1.velocityX = -10;

 movingRight();
 movingLeft();
 jump();
// text(mouseX+","+mouseY,mouseX,mouseY)
 platforms();
}

function movingRight(){
  if(keyDown("right"))
  {player.x += 5
    player.addImage("b",boyy)
  }
  if(keyWentUp("right"))
  {
    player.addImage("b",boyy2)
  }
}

function movingLeft(){
  if(keyDown("left"))
 {player.x -= 5
   player.addImage("b",boyy3)
 }
 if(keyWentUp("left"))
 {
   player.addImage("b",boyy2)
 }
}

function jump(){
  if(keyWentDown("space")){
   player.velocityY =- 10;
  // player.y=player.y-150
  }
 // player.y=player.y+10
  player.velocityY = player.velocityY + 0.8 
  
  if(platformGroup.isTouching(player)){
    console.log("print");  
    score  =score+1;
    player.collide(platformGroup);
  }

}

function platforms(){
  if (frameCount % 100 === 0) {
    platform = createSprite(1400,470);
    platform.addImage(plat);
    platform.scale = 0.49;
    platform.velocityX=-(4+2*score/100)
    platform.y = Math.round(random(200,500));
    platformGroup.add(platform);
    if(platformGroup.y < 200){
      platform.velocityY = platform.velocityY + 3
    }
  }
  if (frameCount % 300 === 0) {
    starting.destroy();
  }
}