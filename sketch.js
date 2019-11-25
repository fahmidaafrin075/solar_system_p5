let x = 0;
let y = 0;
let dim = 80.0;
let pg;
var b= 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
    pg = createGraphics(800,800);
   
}

function draw() {
  // put drawing code here
  background(0,0,b);
    
  //Draw the offscreen buffer to the screen with image()
  image(pg, 0, 0);
  //Draw the offscreen buffer to the screen with image()
  image(pg, 0, 0);

//sun
  fill("yellow");
  noStroke();
  ellipse(400,400,80,80);
    
//mercury
  fill("#E27C08");
  ellipse(310,400,12,12);
    
//venus
    fill("#FF35DA");
  ellipse(540,460,25,25);
    
//earth
  fill("#078D38");
  ellipse(230,300,30,30);
    
//moon
    fill("white");
  ellipse(190,290,7,7);
    
//mars
    fill("#F71425");
  ellipse(370,250,20,20);
    
  
//saturn
    fill("#8BC009");
  ellipse(510,290,40,40);
    
//Neptun
    fill("#7BE3EF");
  ellipse(670,500,37,37);

    
//uranus
    fill("#9308E2");
  ellipse(450,580,52,52);
    
//Neptun
    fill("#7BE3EF");
  ellipse(670,500,37,37);


//jupitar
    fill("#CDADC6");
  ellipse(230,590,100,100);
    
//reveal text
if (mouseX>width/2){
    
    text("Soler System",350,90);
    text("Sun",435,440);
    text("Mercure",255,417);
    text("Earth",250,320);
    text("Moon",150,305);
    text("Saturn",530,315);
    text("Uranus",475,610);
    text("Mars",385,270);
    text("Jupitar",270,640);
    text("Neptun",690,520);
    text("Venus",550,485);
    
    }
b = mouseX;
    ellipse(mouseX, mouseY,2,2);
     pg.ellipse(mouseX - 0, mouseY - 0, 2, 2);
}
