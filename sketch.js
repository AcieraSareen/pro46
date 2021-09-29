var form;
var girl;
var girlImg;
var bg;
var fbg;
var car;
var car1Img, car2Img, car3Img, car4Img;


function preload() {
//loading images
girlImg=loadImage("images/girl.jpg")
car1Img=loadImage("images/car.jpg")
car2Img=loadImage("images/car2.jpg")
car3Img=loadImage("images/car3.jpg")
car4Img=loadImage("images/car4.jpg")
bg=loadImage("images/bg2.jpg")
fbg=loadAnimation("images/formbg.jpg", "images/formbg2.jpg", "images/formbg3.jpg");


}

function setup() {
createCanvas(displayWidth - 20, displayHeight-30);

//creating sprite
girl=createSprite(30,displayHeight-30/2, 50,50);
girl.addImage("girl", girlImg);

car1=createSprite(50,50,60,40);
car1.addImage("car",car1Img);


 
form=new Form();

  
}

function draw() {
background(bg);
form.display();






drawSprites()
}