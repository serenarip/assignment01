function setup() {
  createCanvas(800,600);
  background(200,200,200);
}

function draw() {
   
  // wheel 
  
  fill(255,220,240);
  noStroke();
  ellipse(305,430,65,65);
  
  // body
  
  fill(255,182,212);
  noStroke();
  rect(260,310,90,120);
  
  fill(255,255,255);
  noStroke();
  rect(260,330,90,7);
  
  
  // neck
  
  strokeWeight(2);
  stroke(255,220,240);
  line(310,200,310,310);  
  
  strokeWeight(2);
  stroke(255,220,240);
  line(320,200,320,310);  
  
  strokeWeight(2);
  stroke(255,220,240);
  line(330,200,330,310);  
  
  // head
  strokeWeight(2);
  stroke(255,220,240);
  line(360,90,330,200);
  
  strokeWeight(2);
  stroke(255,220,240);
  line(260,150,290,180);
  
  strokeWeight(2);
  stroke(255,220,240);
  line(330,210,390,200);
  
  fill(255,182,212);
  noStroke();
  ellipse(width/5*2,200,100,100);
  
  fill(255,95,168);
  noStroke();
  ellipse((width/5*2)+10,190,30,30);
  
  fill(255,255,255);
  noStroke();
  ellipse((width/5*2)+10,190,5,5);
  
  fill(255,220,240);
  noStroke();
  ellipse(305,190,10,10);
  
  fill(255,220,240);
  noStroke();
  ellipse(340,170,8,8);
  
  fill(255,220,240);
  noStroke();
  ellipse(340,210,6,6);
  
  
  
  
  
  
}