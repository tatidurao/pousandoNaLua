let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  //carregue imagens
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
//criar sprite lander e add imagem e scale
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  //colocar texto na tela para velocidade vertical
  pop();

  //configurar a descida da nave em y + gravidade
  
  drawSprites();
}


