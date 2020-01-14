var giantball;
var textures;
var texts;
let _text;
var graphics;
var xrotation;
var xrotation2;
var yrotation;
var position;
var date, hours, minutes, seconds;
var formattedTime;








function preload() {
  //giantball = loadModel("sphere.obj", true);
  textures = loadImage("1_earth_8k.jpg")
  texts = loadModel("REMESH1.obj", true);
  texts2 = loadModel("REMESH2.obj", true);
  position = getCurrentPosition();
  fonts = loadFont("GT-America-Standard-Light.otf");



}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  //graphics = createGraphics(400, 500);
  angleMode(DEGREES)

  date = new Date(position.timestamp);
  hours = date.getHours();
  minutes = "0" + date.getMinutes();
  seconds = "0" + date.getSeconds();

  formattedTime = hours + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);

  // myMap = mappa.tileMap();
  // // graphics.background(myMap);
  // myMap.overlay(graphics);


  // frameRate(30)
  // _text = createGraphics(100, 100);
  // _text.textFont('GT-America-Standard-Light.otf');
  // _text.textAlign(CENTER);
  // _text.textSize(1300);
  // _text.fill("white");
  // _text.text('click', 50, 50);

}



function draw() {
  background(0,0,0);

  _text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
	_text.textFont(fonts);
	_text.textAlign(CENTER);
	_text.textSize(133);
	_text.fill(255);
	_text.text("Latitude: " + position.latitude, width * 0.5, height * 2);
  _text.text("Longitude: " + position.longitude, width * 0.5, height * 2);
  _text.text("Current time: " + formattedTime, width * 0.5, height * 0.8);

  //
  //
  // // for (var i = 0; i < graphics.height; i += 10) {
  // //   // graphics.fill(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), random(255));
  // //   // graphics.rect(0, i, graphics.width, 10);
  // //   graphics.
  // // }
  //
  //
  var locX = height / 2;
  var locY = width / 2;
  //
  ambientLight(10, 10, 10);
  //directionalLight(255, 255, 255, 0, -1, 0);
  // //directionalLight(255, 255, 255, 1, 0, 0);
  // //directionalLight(255, 255, 255, 0, 0, -1);
  //
  // // if (mouseIsPressed) {
  // //   directionalLight(255, 255, 255, 0, 0, -1);
  // //   directionalLight(255, 255, 255, 0, 0, -1);
  // //   pointLight(0, 100, 0, locX, locY, locX);
  // //
  // // } else {
  // //   directionalLight(255, 255, 255, 0, -1, 0);
  // // }
  //
  directionalLight(255, 255, 255, cos(frameCount*0.2), 0, sin(frameCount*0.2));

  pointLight(255, 0, 0, -width/2, 0,0 );
  pointLight(255, 0, 0, -width/2, 0,0 );

  pointLight(255, 0, 0, 0, 0,width/2 );
  pointLight(255, 0, 0, 0, 0,width/2 );


  //pointLight(0, 100, 0, locX, locY, locX);
  //
  // noStroke(255);
  // // normalMaterial();
  // // specularMaterial(255);
  // // ambientMaterial(255);
  //
  // //if (frameCount%10!=0) {
  // // if (frameCount%35==0 || frameCount % 40 == 0) {
  // //   heart=60;
  // // }else {
  // //   heart=30
  // // }
  // // if (heart==39) {
  // //   heart-=9;
  // // }
  //
  //
  // //print(heart)
  // //print(frameCount)
  //
  // // }else if (frameCount%3==0){
  // //   heart-=3;
  // //   if (heart<=0) {
  // //     heart=0
  // //   }
  // //}
  // // for (var i = 0; i < array.length; i++) {
  // //   heart++
  // // }
  // //}
  //
  // // push();
  // // rotateY(frameCount * 0.05);
  // // rotateZ(frameCount * 0.005);
  // // ellipsoid(400, 10, 400, 400,50);
  // // pop();
  // var anglevar = frameCount * 0.05;
  // if (anglevar == 170) {
  //   anglevar -= anglevar;
  // } else if (anglevar == 15) {
  //   anglevar += anglevar;
  // }
  //
  // //fill(12, 200, 12)
  // //ambientMaterial(20,100,100);
  //
  xrotation = mouseX;
  xrotation = map(xrotation, 0, windowWidth, 0, 360);
  yrotation = mouseY;
  yrotation = map(yrotation, 0, windowHeight, -100,100);
  camera(cos(xrotation)*200, 0, sin(xrotation)*200, 0, yrotation, 0, 0, 1, 0);

  push();
  noStroke();

  specularMaterial(255)
  scale(5)
  translate(cos(frameCount*0.2)*200, cos(frameCount*0.2)*200, sin(frameCount*0.2)*1000);
  model(texts);
  pop();

  push();
  noStroke();

  specularMaterial(0)
  scale(9)
  translate(cos(frameCount*0.6)*600, 0, sin(frameCount*0.6)*1000);
  model(texts2);
  pop();

  push();
  noStroke();

  specularMaterial(0)
  scale(6)
  translate(cos(frameCount*0.3)*7000, 0, sin(frameCount*0.3)*1000);
  model(texts);
  pop();
  push();
  noStroke();

  specularMaterial(0)
  scale(1)
  translate(0, cos(frameCount*0.3)*300, sin(frameCount*0.3)*300);
  model(texts);
  pop();
  push();
  noStroke();


  specularMaterial(0)
  scale(1)
  translate(cos(frameCount*0.7)*400, sin(frameCount*0.7)*400, 0);
  model(texts);
  pop();

  push();
  noStroke();
  texture(textures);
  sphere(100, 24, 24);
  translate(0, 0, 0);
  pop();

  push();



  noStroke();
  translate(-cos(xrotation)*700, yrotation*10, sin(xrotation)*700)
  rotateY(270)
  texture(_text);
	plane(300, 300);

  pop();

// for (var i = 0; i < 4000; i++) {
//
//   noStroke();
//
//   specularMaterial(255);
//   translate(500, random(-height/2,height/2), random(-windowWidth/2,windowWidth/2));
//   sphere(20, 2, 2);
//
//
// }

}



//}
