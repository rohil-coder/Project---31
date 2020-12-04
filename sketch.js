const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() 
{
  createCanvas(480, 800);
  ground = new Ground();
  for (var k = 0; k <= width; k = k + 0) 
  {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 80) 
  {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 160) 
  {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 240) 
  {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 320) 
  {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 400) 
  {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 480) 
  {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 40; j <= width; j = j+50) 
  {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width-10; j = j+50) 
  {
    plinkos.push(new Plinko(j, 175));
  }
  for (var l = 40; l <= width; l = l+50) 
  {
    plinkos.push(new Plinko(l, 75));
  }
  for (var l = 15; l <= width-10; l = l+50) 
  {
    plinkos.push(new Plinko(l, 175));
  }
  if (frameCount%60===0) 
  {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
}

function draw() 
{
  background(255); 
  for (var j = 0; j < particles.length; j++) 
  {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }
  for (var l = 0; j < plinkos.length; l++) 
  {
    plinkos[l].display();
  }
}