
let  et;
let img; //here
let  txt;
let boolean = overButton = false;
var myboolean = backwards=false;
var timeLapse=400;
let timeTrack;
let i;
let song;

let button;

function preload() {
  txt = loadImage('TextoTecFXpng.png');
  et = loadImage('etFXpng.png');  
  et.resize(258, 458);
  song =  loadSound("fabX.mp3");
 
}

function setup() {
 createCanvas(windowWidth, windowHeight);
  
    song.play();
   song.loop();
 

    // create the button
    myButton = createButton("hit me");// create button, give it some text


    x = width / 2 - myButton.width / 2;
    y = height / 2 - myButton.height / 2;
    // position the button
    myButton.position(270, 230, 100);

    // what is the callback for the button?
    myButton.mousePressed(link);

  //rect flash
  img = createImage(200, 200);  // here
  for (int [i] = 0; i < img.pixels.length; i++) {  
   var a = map(i, 0, img.pixels.length, 255, 0); //here
    img.pixels[i] = color(98, 204); //here
  }
    song.play();
   song.loop();
  song. setVolume(0.5)
  //images


}


function draw() {
  background(0);  // total canva black
  

  // rect flahing/blinking

  let m = millis();
  fill(m % 150);              
  rect(25, 25, 555, 555, 30);

  image(et, 130, 125 );
  image(txt, 50, 40);


  image(img, mouseX-img.width/3, mouseY-img.height/3); // here
  

  //button link to web page
   
  circle(290, 230, 30)
}
function link() {
  {
    window.open('https://www.youtube.com/playlist?list=PLLfjXK0h5ZJK01y34_ouFkU5wpFW5HyE7');
  }
}



function checkButtons() {
  if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY <300) {
    overButton = true;
  } else {
    overButton = false;
  }
}
