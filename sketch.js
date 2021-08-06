var hypnoticBall, database;
var position;
var form;
var track,ground,carimg1,carimg2,carimg3,carimg4;
var gamestate=0;
var playercount=0;
var allplayers;
var distance=0;
var player;

function preload(){
carimg1 = loadImage('../images/car1.png')
carimg2 = loadImage('../images/car2.png')
carimg3 = loadImage('../images/car3.png')
carimg4 = loadImage('../images/car4.png')
track = loadImage('../images/track.jpg')
ground = loadImage('../images/ground.png')
}

function setup(){
  createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  console.log(database);
  form = new Form()
  game = new Game()
  game.getState()
  game.start()
 }

function draw(){
  background("cyan");
  
    if(playercount===4){
      game.update(1)
    }
    if(gamestate===1){
      game.play()
    }
  
}

