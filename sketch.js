var SERVE = 0;
var PLAY = 1;
var LEND = 2;
var WEND = 3;
var gameState = SERVE;
var score = 0;
var dog, dog_left, dog_right;
var play, playImg;
var bee, bee_left, bee_right;
var bee1, bee2, bee3, bee4, bee5, bee6, bee7, bee8, bee9;
var heart1, heart2, heart3, heartImg;
var gameOver, gameOverImg;
var lives = 3;
var restart, restartImg;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35;
var bone1, bone2, bone3, bone4, bone5, bone6, bone7, bone8, bone9, bone10, bone11, bone12, bone13, bone14, bone15, boneImg;
var house, houseImg;
var gameWin, gameWinImg;

var liveSound;
var winSound;

function preload() {
  dog_right = loadAnimation("images/dog.png");
  dog_left = loadAnimation("images/flipdog.png");
  playImg = loadImage("images/play.png");
  bee_left = loadAnimation("images/bee.png");
  bee_right = loadAnimation("images/flipbee.png");
  gameOverImg = loadImage("images/gameOver.webp");
  heartImg = loadImage("images/heart.png");
  restartImg = loadImage("images/restart.png");
  boneImg = loadImage("images/bone.png");
  houseImg = loadImage("images/house.png");
  gameWinImg = loadImage("images/gamewin.png");

  liveSound = loadSound("sounds/die.mp3");
  winSound = loadSound("sounds/win.wav");
}

function setup() {
  createCanvas(1100, 600);
  dog = createSprite(180, 550, 50, 50);
  dog.addAnimation("movingLeft",dog_left);
  dog.addAnimation("movingRight",dog_right);
  dog.scale = 0.15;
  dog.velocityX = 0
  dog.velocityY = 0;

  dog.setCollider("rectangle",0,0,dog.width-250,dog.height);
  dog.debug = false;

  play = createSprite(550, 400, 50, 50);
  play.addImage(playImg);
  play.scale = 0.1;

  bee1 = createSprite(830, 425, 10, 10);//horizontal
  bee1.addAnimation("movingLeft", bee_left);
  bee1.addAnimation("movingRight", bee_right);
  bee1.scale = 0.08;

  bee2 = createSprite(910, 100, 10, 10);//vertical
  bee2.addAnimation("movingLeft", bee_left);
  bee2.addAnimation("movingRight", bee_right);
  bee2.scale = 0.08;

  bee3 = createSprite(75, 80, 10, 10);//horizontal
  bee3.addAnimation("movingRight", bee_right);
  bee3.addAnimation("movingLeft", bee_left);
  bee3.scale = 0.08;

  bee4 = createSprite(930, 520, 10, 10);//horizontal
  bee4.addAnimation("movingLeft", bee_left);
  bee4.addAnimation("movingRight", bee_right);
  bee4.scale = 0.08;

  bee5 = createSprite(250, 250, 10, 10);//horizontal
  bee5.addAnimation("movingLeft", bee_left);
  bee5.addAnimation("movingRight", bee_right);
  bee5.scale = 0.08;

  bee6 = createSprite(690, 380, 10, 10);//vertical
  bee6.addAnimation("movingLeft", bee_left);
  bee6.addAnimation("movingRight", bee_right);
  bee6.scale = 0.08;

  bee7 = createSprite(200, 350, 10, 10);//vertical
  bee7.addAnimation("movingLeft", bee_left);
  bee7.addAnimation("movingRight", bee_right);
  bee7.scale = 0.08;

  bee8 = createSprite(530, 315, 10, 10);//horizontal
  bee8.addAnimation("movingRight", bee_right);
  bee8.addAnimation("movingLeft", bee_left);
  bee8.scale = 0.08;

  bee9 = createSprite(750, 360, 10, 10);//horizontal
  bee9.addAnimation("movingRight", bee_right);
  bee9.addAnimation("movingLeft", bee_left);
  bee9.scale = 0.08;
  
  gameOver = createSprite(550, 300, 1000, 600);
  gameOver.addImage(gameOverImg);

  gameWin = createSprite(550, 300, 1000, 600);
  gameWin.addImage(gameWinImg);

  heart1 = createSprite(30, 30, 20, 20);
  heart1.addImage(heartImg);
  heart1.scale = 0.3;

  heart2 = createSprite(80, 30, 20, 20);
  heart2.addImage(heartImg);
  heart2.scale = 0.3;

  heart3 = createSprite(130, 30, 20, 20);
  heart3.addImage(heartImg);
  heart3.scale = 0.3;

  restart = createSprite(550, 470, 30, 30);
  restart.addImage(restartImg);

  wall1 = createSprite(600, 550, 750, 10);
  wall1.shapeColor = "brown";
  wall2 = createSprite(75, 550, 100, 10);
  wall2.shapeColor = "brown";
  wall3 = createSprite(30, 300, 10, 500);
  wall3.shapeColor = "brown";
  wall4 = createSprite(970, 370, 10, 355);
  wall4.shapeColor = "brown";
  wall5 = createSprite(970, 75, 10, 50);
  wall5.shapeColor = "brown";
  wall6 = createSprite(500, 55, 950, 10);
  wall6.shapeColor = "brown";
  wall7 = createSprite(100, 450, 150, 7);
  wall7.shapeColor = "brown";
  wall8 = createSprite(140, 415, 7, 65);
  wall8.shapeColor = "brown";
  wall9 = createSprite(150, 385, 75, 7);
  wall9.shapeColor = "brown";
  wall10 = createSprite(110, 335, 7, 100);
  wall10.shapeColor = "brown";
  wall11 = createSprite(300, 500, 7, 100);
  wall11.shapeColor = "brown";
  wall12 = createSprite(350, 500, 100, 7);
  wall12.shapeColor = "brown";
  wall13 = createSprite(500, 350, 100, 7);
  wall13.shapeColor = "brown";
  wall14 = createSprite(100, 250, 150, 7);
  wall14.shapeColor = "brown";
  wall15 = createSprite(100, 190, 7, 125);
  wall15.shapeColor = "brown";
  wall16 = createSprite(140, 200, 80, 7);
  wall16.shapeColor = "brown";
  wall17 = createSprite(175, 160, 7, 75);
  wall17.shapeColor = "brown";
  wall18 = createSprite(500, 285, 7, 125);
  wall18.shapeColor = "brown";
  wall19 = createSprite(535, 275, 80, 7);
  wall19.shapeColor = "brown";
  wall20 = createSprite(565, 220, 7, 120);
  wall20.shapeColor = "brown";
  wall21 = createSprite(535, 160, 70, 7);
  wall21.shapeColor = "brown";
  wall22 = createSprite(750, 100, 7, 100);
  wall22.shapeColor = "brown";
  wall23 = createSprite(740, 100, 25, 7);
  wall23.shapeColor = "brown";
  wall24 = createSprite(720, 310, 7, 175);
  wall24.shapeColor = "brown";
  wall25 = createSprite(700, 400, 48, 7);
  wall25.shapeColor = "brown";
  wall26 = createSprite(870, 400, 7, 150);
  wall26.shapeColor = "brown";
  wall27 = createSprite(850, 325, 40, 7);
  wall27.shapeColor = "brown";
  wall28 = createSprite(833, 250, 7, 150);
  wall28.shapeColor = "brown";
  wall29 = createSprite(920, 450, 100, 7);
  wall29.shapeColor = "brown";
  wall30 = createSprite(230, 200, 7, 150);
  wall30.shapeColor = "brown";
  wall31 = createSprite(280, 200, 100, 7);
  wall31.shapeColor = "brown";
  wall32 = createSprite(310, 180, 7, 40);
  wall32.shapeColor = "brown";
  wall33 = createSprite(330, 160, 100, 7);
  wall33.shapeColor = "brown";
  wall34 = createSprite(300, 350, 7, 80);
  wall34.shapeColor = "brown";
  wall35 = createSprite(340, 385, 80, 7);
  wall35.shapeColor = "brown";

  bone1 = createSprite(270, 520, 30, 30);
  bone1.addImage(boneImg);
  bone1.scale = 0.1;

  bone2 = createSprite(170, 420, 30, 30);
  bone2.addImage(boneImg);
  bone2.scale = 0.1;

  bone3 = createSprite(330, 360, 30, 30);
  bone3.addImage(boneImg);
  bone3.scale = 0.1;

  bone4 = createSprite(360, 180, 30, 30);
  bone4.addImage(boneImg);
  bone4.scale = 0.1;

  bone5 = createSprite(530, 240, 30, 30);
  bone5.addImage(boneImg);
  bone5.scale = 0.1;

  bone6 = createSprite(690, 380, 30, 30);
  bone6.addImage(boneImg);
  bone6.scale = 0.1;

  bone7 = createSprite(960, 140, 30, 30);
  bone7.addImage(boneImg);
  bone7.scale = 0.1;

  bone8 = createSprite(800, 100, 30, 30);
  bone8.addImage(boneImg);
  bone8.scale = 0.1;

  bone9 = createSprite(150, 360, 30, 30);
  bone9.addImage(boneImg);
  bone9.scale = 0.1;

  bone10 = createSprite(930, 500, 30, 30);
  bone10.addImage(boneImg);
  bone10.scale = 0.1;

  bone11 = createSprite(330, 480, 30, 30);
  bone11.addImage(boneImg);
  bone11.scale = 0.1;

  bone12 = createSprite(500, 100, 30, 30);
  bone12.addImage(boneImg);
  bone12.scale = 0.1;

  bone13 = createSprite(200, 180, 30, 30);
  bone13.addImage(boneImg);
  bone13.scale = 0.1;

  bone14 = createSprite(500, 440, 30, 30);
  bone14.addImage(boneImg);
  bone14.scale = 0.1;

  bone15 = createSprite(750, 300, 30, 30);
  bone15.addImage(boneImg);
  bone15.scale = 0.1;

  house = createSprite(1030, 130, 30, 30);
  house.addImage(houseImg);
  house.scale = 0.5;
}
function draw() {
  background("lightblue");  
  if (gameState === SERVE) {
    dog.visible = false;
    bee1.visible = false;
    bee2.visible = false;
    bee3.visible = false;
    bee4.visible = false;
    bee5.visible = false;
    bee6.visible = false;
    bee7.visible = false;
    bee8.visible = false;
    bee9.visible = false;
    gameOver.visible = false;
    gameWin.visible = false;
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    restart.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    wall27.visible = false;
    wall28.visible = false;
    wall29.visible = false;
    wall30.visible = false;
    wall31.visible = false;
    wall32.visible = false;
    wall33.visible = false;
    wall34.visible = false;
    wall35.visible = false;
    bone1.visible = false;
    bone2.visible = false;
    bone3.visible = false;
    bone4.visible = false;
    bone5.visible = false;
    bone6.visible = false;
    bone7.visible = false;
    bone8.visible = false;
    bone9.visible = false;
    bone10.visible = false;
    bone11.visible = false;
    bone12.visible = false;
    bone13.visible = false;
    bone14.visible = false;
    bone15.visible = false;
    house.visible = false;
    textSize(30);
    fill("darkblue");
    stroke("darkblue")
    text("Help Daisy Find Her Way Back Home", 300, 50);
    text("You've got three lives! Avoid the bees and try to collect the bones!", 125, 100);

    if(mousePressedOver(play)){
      gameState = PLAY;
    }
  }
    if (gameState === PLAY){
      play.visible = false;
      dog.visible = true;
      bee1.visible = true;
      bee2.visible = true;
      bee3.visible = true;
      bee4.visible = true;
      bee5.visible = true;
      bee6.visible = true;
      bee7.visible = true;
      bee8.visible = true;
      bee9.visible = true;
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;  
      wall1.visible = true;
      wall2.visible = true;
      wall3.visible = true;
      wall4.visible = true;
      wall5.visible = true;
      wall6.visible = true;
      wall7.visible = true;
      wall8.visible = true;
      wall9.visible = true;
      wall10.visible = true;
      wall11.visible = true;
      wall12.visible = true;
      wall13.visible = true;
      wall14.visible = true;
      wall15.visible = true;
      wall16.visible = true;
      wall17.visible = true;
      wall18.visible = true;
      wall19.visible = true;
      wall20.visible = true;
      wall21.visible = true;
      wall22.visible = true;
      wall23.visible = true;
      wall24.visible = true;
      wall25.visible = true;
      wall26.visible = true;
      wall27.visible = true;
      wall28.visible = true;
      wall29.visible = true;
      wall30.visible = true;
      wall31.visible = true;
      wall32.visible = true;
      wall33.visible = true;
      wall34.visible = true;
      wall35.visible = true;
      bone1.visible = true;
      bone2.visible = true;
      bone3.visible = true;
      bone4.visible = true;
      bone5.visible = true;
      bone6.visible = true;
      bone7.visible = true;
      bone8.visible = true;
      bone9.visible = true;
      bone10.visible = true;
      bone11.visible = true;
      bone12.visible = true;
      bone13.visible = true;
      bone14.visible = true;
      bone15.visible = true;
      house.visible = true;

  edges = createEdgeSprites();
  dog.bounceOff(edges);
  dog.bounceOff(wall1);
  dog.bounceOff(wall2);
  dog.bounceOff(wall3);
  dog.bounceOff(wall4);
  dog.bounceOff(wall5); 
  dog.bounceOff(wall6);
  dog.bounceOff(wall7);
  dog.bounceOff(wall8);
  dog.bounceOff(wall9);
  dog.bounceOff(wall10);
  dog.bounceOff(wall11);
  dog.bounceOff(wall12);
  dog.bounceOff(wall13);
  dog.bounceOff(wall14);
  dog.bounceOff(wall15);
  dog.bounceOff(wall16);
  dog.bounceOff(wall17);
  dog.bounceOff(wall18);
  dog.bounceOff(wall19);
  dog.bounceOff(wall20);
  dog.bounceOff(wall21);
  dog.bounceOff(wall22);
  dog.bounceOff(wall23);
  dog.bounceOff(wall24);
  dog.bounceOff(wall25);
  dog.bounceOff(wall26);
  dog.bounceOff(wall27);
  dog.bounceOff(wall28);
  dog.bounceOff(wall29);
  dog.bounceOff(wall30);
  dog.bounceOff(wall31);
  dog.bounceOff(wall32);
  dog.bounceOff(wall33);
  dog.bounceOff(wall34);
  dog.bounceOff(wall35);

  textSize(25);
  stroke(25);
  fill("darkblue");
  text("Bones Collected: "+ score, 700, 40);
  if (bee1.x <= 160){
    bee1.changeAnimation("movingRight", bee_right);
    bee1.velocityX = 7;
    bee1.velocityY = 0;
    bee1.visible = false;
    
  }
  if (bee1.x >= 830){
    bee1.changeAnimation("movingLeft", bee_left);
    bee1.visible = true;
    bee1.velocityX = -7;
    bee1.velocityY = 0;
  }
  if (bee2.y >= 420){
    bee2.changeAnimation("movingRight", bee_right);
    bee2.velocityX = 0;
    bee2.velocityY = -7;
  }
  if (bee2.y <= 100){
    bee2.changeAnimation("movingLeft", bee_left);
    bee2.velocityX = 0;
    bee2.velocityY = 7;
  }
  if (bee3.x >= 700){
    bee3.changeAnimation("movingLeft", bee_left);
    bee3.velocityX = -7;
    bee3.velocityY = 0;
  }
  if (bee3.x <= 80){
    bee3.changeAnimation("movingRight", bee_right);
    bee3.velocityX = 7;
    bee3.velocityY = 0;
  }
  if (bee4.x >= 920){
    bee4.changeAnimation("movingLeft", bee_left);
    bee4.velocityX = -7;
    bee4.velocityY = 0;
  }
  if (bee4.x <= 350){
    bee4.changeAnimation("movingRight", bee_right);
    bee4.velocityX = 7;
    bee4.velocityY = 0;
  }
  if (bee5.x >= 480){
    bee5.changeAnimation("movingLeft", bee_left);
    bee5.velocityX = -7;
    bee5.velocityY = 0;
  }
  if (bee5.x <= 250){
    bee5.changeAnimation("movingRight", bee_right);
    bee5.velocityX = 7;
    bee5.velocityY = 0;
  }
  if (bee6.y >= 380){
    bee6.changeAnimation("movingLeft", bee_left);
    bee6.velocityX = 0;
    bee6.velocityY = -7;
  }
  if (bee6.y <= 80){
    bee6.changeAnimation("movingRight", bee_right);
    bee6.velocityX = 0;
    bee6.velocityY = 7;
  }
  if (bee7.y >= 350){
    bee7.changeAnimation("movingLeft", bee_left);
    bee7.velocityX = 0;
    bee7.velocityY = -7;
  }
  if (bee7.y <= 80){
    bee7.changeAnimation("movingRight", bee_right);
    bee7.velocityX = 0;
    bee7.velocityY = 7;
  }
  if (bee8.x >= 700){
    bee8.changeAnimation("movingLeft", bee_left);
    bee8.velocityX = -7;
    bee8.velocityY = 0;
  }
  if (bee8.x <= 530){
    bee8.changeAnimation("movingRight", bee_right);
    bee8.velocityX = 7;
    bee8.velocityY = 0;
  }
  if (bee9.x >= 830){
    bee9.changeAnimation("movingLeft", bee_left);
    bee9.velocityX = -7;
    bee9.velocityY = 0;
  }
  if (bee9.x <= 750){
    bee9.changeAnimation("movingRight", bee_right);
    bee9.velocityX = 7;
    bee9.velocityY = 0;
  }
  if (keyDown(UP_ARROW)) {
    dog.velocityX = 0;
    dog.velocityY = -7;
  } else {
    dog.velocityX = 0;
    dog.velocityY = 0;
  }
      
  if (keyDown(DOWN_ARROW)) {
    dog.velocityX = 0;
    dog.velocityY = 7;
  }

  if (keyDown(RIGHT_ARROW)) {
    dog.changeAnimation("movingRight",dog_right);
    dog.velocityX = 7;
    dog.velocityY = 0;
  }
      
  if (keyDown(LEFT_ARROW)) {
    dog.changeAnimation("movingLeft",dog_left);
    dog.velocityX = -7;
    dog.velocityY = 0; 
  }
  if (bone1.isTouching(dog)){
    score +=1;
    bone1.visible = false;
    bone1.x = 1300;
    bone1.y = 1200;
  }
  if (bone2.isTouching(dog)){
    score +=1;
    bone2.visible = false;
    bone2.x = 1300;
    bone2.y = 1200;
  }
  if (bone3.isTouching(dog)){
    score +=1;
    bone3.visible = false;
    bone3.x = 1300;
    bone3.y = 1200;
  }
  if (bone4.isTouching(dog)){
    score +=1;
    bone4.visible = false;
    bone4.x = 1300;
    bone4.y = 1200;
  }
  if (bone5.isTouching(dog)){
    score +=1;
    bone5.visible = false;
    bone5.x = 1300;
    bone5.y = 1200;
  }
  if (bone6.isTouching(dog)){
    score +=1;
    bone6.visible = false;
    bone6.x = 1300;
    bone6.y = 1200;
  }
  if (bone7.isTouching(dog)){
    score +=1;
    bone7.visible = false;
    bone7.x = 1300;
    bone7.y = 1200;
  }
  if (bone8.isTouching(dog)){
    score +=1;
    bone8.visible = false;
    bone8.x = 1300;
    bone8.y = 1200;
  }
  if (bone9.isTouching(dog)){
    score +=1;
    bone9.visible = false;
    bone9.x = 1300;
    bone9.y = 1200;
  }
  if (bone10.isTouching(dog)){
    score +=1;
    bone10.visible = false;
    bone10.x = 1300;
    bone10.y = 1200;
  }
  if (bone11.isTouching(dog)){
    score +=1;
    bone11.visible = false;
    bone11.x = 1300;
    bone11.y = 1200;
  }
  if (bone12.isTouching(dog)){
    score +=1;
    bone12.visible = false;
    bone12.x = 1300;
    bone12.y = 1200;
  }
  if (bone13.isTouching(dog)){
    score +=1;
    bone13.visible = false;
    bone13.x = 1300;
    bone13.y = 1200;
  }
  if (bone14.isTouching(dog)){
    score +=1;
    bone14.visible = false;
    bone14.x = 1300;
    bone14.y = 1200;
  }
  if (bone15.isTouching(dog)){
    score +=1;
    bone15.visible = false;
    bone15.x = 1300;
    bone15.y = 1200;
  }
  if (dog.x >= 1000){
    gameState = WEND;
    winSound.play();
  }
  }
  if (gameState === WEND){
    textSize(30);
    stroke("darkblue");
    fill("darkblue");
    //text("You Win!", 500, 50);
    text("Bones Collected: "+ score, 700, 40);

    heart1.visible = false;
    bee1.visible = false;
    bee2.visible = false;
    bee3.visible = false;
    bee4.visible = false;
    bee5.visible = false;
    bee6.visible = false;
    bee7.visible = false;
    bee8.visible = false;
    bee9.visible = false;
    dog.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    wall27.visible = false;
    wall28.visible = false;
    wall29.visible = false;
    wall30.visible = false;
    wall31.visible = false;
    wall32.visible = false;
    wall33.visible = false;
    wall34.visible = false;
    wall35.visible = false;
    gameWin.visible = true;
    gameOver.visible = false;
    restart.visible = true;
    bone1.visible = false;
    bone2.visible = false;
    bone3.visible = false;
    bone4.visible = false;
    bone5.visible = false;
    bone6.visible = false;
    bone7.visible = false;
    bone8.visible = false;
    bone9.visible = false;
    bone10.visible = false;
    bone11.visible = false;
    bone12.visible = false;
    bone13.visible = false;
    bone14.visible = false;
    bone15.visible = false;
    house.visible = false;

  if(mousePressedOver(restart)) {
      reset();
  }
  }
    if (gameState === LEND) {
      textSize(30);
    stroke("darkblue");
    fill("darkblue");
      text("Bones Collected: "+ score, 700, 40);
      heart1.visible = false;
      bee1.visible = false;
      bee2.visible = false;
      bee3.visible = false;
      bee4.visible = false;
      bee5.visible = false;
      bee6.visible = false;
      bee7.visible = false;
      bee8.visible = false;
      bee9.visible = false;
      dog.visible = false;
      wall1.visible = false;
      wall2.visible = false;
      wall3.visible = false;
      wall4.visible = false;
      wall5.visible = false;
      wall6.visible = false;
      wall7.visible = false;
      wall8.visible = false;
      wall9.visible = false;
      wall10.visible = false;
      wall11.visible = false;
      wall12.visible = false;
      wall13.visible = false;
      wall14.visible = false;
      wall15.visible = false;
      wall16.visible = false;
      wall17.visible = false;
      wall18.visible = false;
      wall19.visible = false;
      wall20.visible = false;
      wall21.visible = false;
      wall22.visible = false;
      wall23.visible = false;
      wall24.visible = false;
      wall25.visible = false;
      wall26.visible = false;
      wall27.visible = false;
      wall28.visible = false;
      wall29.visible = false;
      wall30.visible = false;
      wall31.visible = false;
      wall32.visible = false;
      wall33.visible = false;
      wall34.visible = false;
      wall35.visible = false;
      gameOver.visible = true;
      gameWin.visible = false;
      restart.visible = true;
      bone1.visible = false;
      bone2.visible = false;
      bone3.visible = false;
      bone4.visible = false;
      bone5.visible = false;
      bone6.visible = false;
      bone7.visible = false;
      bone8.visible = false;
      bone9.visible = false;
      bone10.visible = false;
      bone11.visible = false;
      bone12.visible = false;
      bone13.visible = false;
      bone14.visible = false;
      bone15.visible = false;
      house.visible = false;
  
    if(mousePressedOver(restart)) {
        reset();
    }
    }
    beeCollide();
    heartLives();
    drawSprites();
  }
function reset(){
  gameState = SERVE;
  play.visible = true;
  score = 0;
  lives = 3;
  play.visible = false;
      dog.visible = true;
      dog.x = 180;
      dog.y = 550;
      bee1.visible = true;
      bee2.visible = true;
      bee3.visible = true;
      bee4.visible = true;
      bee5.visible = true;
      bee6.visible = true;
      bee7.visible = true;
      bee8.visible = true;
      bee9.visible = true;
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;  
      wall1.visible = true;
      wall2.visible = true;
      wall3.visible = true;
      wall4.visible = true;
      wall5.visible = true;
      wall6.visible = true;
      wall7.visible = true;
      wall8.visible = true;
      wall9.visible = true;
      wall10.visible = true;
      wall11.visible = true;
      wall12.visible = true;
      wall13.visible = true;
      wall14.visible = true;
      wall15.visible = true;
      wall16.visible = true;
      wall17.visible = true;
      wall18.visible = true;
      wall19.visible = true;
      wall20.visible = true;
      wall21.visible = true;
      wall22.visible = true;
      wall23.visible = true;
      wall24.visible = true;
      wall25.visible = true;
      wall26.visible = true;
      wall27.visible = true;
      wall28.visible = true;
      wall29.visible = true;
      wall30.visible = true;
      wall31.visible = true;
      wall32.visible = true;
      wall33.visible = true;
      wall34.visible = true;
      wall35.visible = true;
      bone1.visible = true;
      bone2.visible = true;
      bone3.visible = true;
      bone4.visible = true;
      bone5.visible = true;
      bone6.visible = true;
      bone7.visible = true;
      bone8.visible = true;
      bone9.visible = true;
      bone10.visible = true;
      bone11.visible = true;
      bone12.visible = true;
      bone13.visible = true;
      bone14.visible = true;
      bone15.visible = true;
      house.visible = true;

      bone1.x = 270;
      bone1.y = 520;
      bone2.x = 170;
      bone2.y = 420;
      bone3.x = 330;
      bone3.y = 360;
      bone4.x = 360;
      bone4.y = 180;
      bone5.x = 530;
      bone5.y = 240;
      bone6.x = 690;
      bone6.y = 380;
      bone7.x = 960;
      bone7.y = 140;
      bone8.x = 800;
      bone8.y = 100;
      bone9.x = 150;
      bone9.y = 360;
      bone10.x = 930;
      bone10.y = 500;
      bone11.x = 330;
      bone11.y = 480;
      bone12.x = 500;
      bone12.y = 100;
      bone13.x = 200;
      bone13.y = 180;
      bone14.x = 500;
      bone14.y = 440;
      bone15.x = 750;
      bone15.y = 300;
}
function beeCollide(){
if (bee1.isTouching(dog)) {
    lives = lives - 1;
    liveSound.play();
    dog.x = 180;
    dog.y = 550;
}
if (bee2.isTouching(dog)) {
  lives = lives - 1;
  liveSound.play();
  dog.x = 180;
  dog.y = 550;
}
if (bee3.isTouching(dog)) {
  lives = lives - 1;
  liveSound.play();
  dog.x = 180;
  dog.y = 550;
}
if (bee4.isTouching(dog)) {
  lives = lives - 1;
  liveSound.play();
  dog.x = 180;
  dog.y = 550;
}
if (bee5.isTouching(dog)) {
  lives = lives - 1;
  liveSound.play();
  dog.x = 180;
  dog.y = 550;
}
if (bee6.isTouching(dog)) {
  lives = lives - 1;
  liveSound.play();
  dog.x = 180;
  dog.y = 550;
}
if (bee7.isTouching(dog)) {
  lives = lives - 1;
  liveSound.play();
  dog.x = 180;
  dog.y = 550;
}
if (bee8.isTouching(dog)) {
  lives = lives - 1;
  liveSound.play();
  dog.x = 180;
  dog.y = 550;
}
if (bee9.isTouching(dog)) {
  lives = lives - 1;
  liveSound.play();
  dog.x = 180;
  dog.y = 550;
}
}
function heartLives() {
  if (lives === 2) {
    heart3.visible = false;
  }
  if (lives === 1) {
    heart3.visible = false;
    heart2.visible = false;
  }
  if (lives === 0) {
    heart3.visible = false;
    heart2.visible = false;
    heart1.visible = false;
    gameState = LEND;
  }
}