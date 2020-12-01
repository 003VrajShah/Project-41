var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img,player_img1;
var basket1,basket2;
// create the variables for the score and displaying scores. and intialize with zero
var score;
function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  player_img1 = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  basket1=createSprite(100,500,40,40);
  basket2=createSprite(150,500,40,40);
  game.getState();
  game.start();
  
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}

function Score(){
  text("player1 :",900,50);
  if(fruitGroup.isTouching(basket1)){
    score++;
  }
  if(fruitGroup.isTouching(basket2)){
    score++;
  }
  text("player2 :",900,60);
}