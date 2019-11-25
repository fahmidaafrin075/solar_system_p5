var b= 0;

function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here
  background(0,0,b);

//sun
  fill("yellow");
  noStroke();
  ellipse(250,250,50,50);
    
//mercury
  fill("#E27C08");
  ellipse(260,400,10,10);
    
    
//venus
    
//earth
  fill("#56C84B");
  ellipse(150,150,20,20);
    
//mars
//jupitar
//saturn
//uranus
    fill("#9308E2");
  ellipse(280,400,40,40);
    
//Neptun


    


//reveal text
if (mouseX>width/2){
    text("Sun",270,285);
    text("Earth",170,160);
  
    }
b = mouseX;
}

