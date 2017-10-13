let height = 600;
let width = 600;

let centerX = width/2;
let centerY = height/2;
let radius = 150;

let core;
let particles = [];


function setup() {
  createCanvas(width,height);
  core = new Core(centerX,centerY);
  //Insert points
}

function draw() {
  background(0);
  //Core
  core.show();
  core.update();

  //Put the particle in a list
  for (let i = 0; i < 2; i++){
    particles.push(createParticle());
  }

  //Updating all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1); //Removes the particle
    }
  }
}

//Create particle in a random point of a circle
function createParticle(){
  let degree = random(0,360);
  let radians = degree * Math.PI/180;
  let x = centerX + radius * Math.cos(radians);
  let y = centerY + radius * Math.sin(radians);
  return new Particle(x,y);
}