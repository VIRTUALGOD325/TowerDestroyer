
var ground, topGround;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(240,780,480,30);
  topGround = new Ground(240,750,480,30);

  division1 = new Division(0,750,20,40);
  division2 = new Division(70,750,20,40);

}

function draw() {
  background(255,255,255);  

  ground.display();
  topGround.display();

  division1.display();
  division2.display();

  drawSprites();
}