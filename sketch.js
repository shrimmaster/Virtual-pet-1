//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage,happyDogImage;

function preload()
{
  //load images here
  this.dogImage = loadImage("images/dog.png");
  this.happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  dog = createsprite(200,100,50,50);
  foodStock=database.ref('Food');
   foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(dogImage);


  }
  drawSprites();

    Text("Press Up_arrow key to feed ZOZO",200,90);
    textSize(60);
    fill(40);

  //add styles here

  
}

function readStock(data){
  foodS=data.val();

}

function writeStoke(x){
  
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })

}


