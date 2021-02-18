var cat, caatani, catfrnd , catimg
var mouse, mouseani, mousefrnd, catimg
var ground  , groundimg
function preload() {
    //load the images here

    catimg = loadImage("images/cat1.png");
    catani = loadAnimation("images/cat2.png", "images/cat3.png")
    catfrnd = loadImage("images/cat4.png");


    mouseimg = loadImage("images/mouse1.png");
    mouseani = loadAnimation("images/mouse2.png", "images/mouse3.png");

    mousefrnd = loadImage("images/mouse3.png");

    groundimg  = loadImage("images/garden.png")

}

function setup(){
 createCanvas(1000,800)

    //create tom and jerry sprites here

    ground = createSprite(500,400);
    ground.addImage("groundimgage", groundimg);
    
    cat = createSprite(870,650,20,20)
    //cat.addImage("catimage", catimg);
    cat.addAnimation("catanimation", catani);
    //cat.addImage("catfriend", catfrnd)
    cat.scale = 0.15

    mouse = createSprite(100,650,20,20);
    mouse.addImage("mouseimage", mouseimg)
    //mouse.addAnimation("mouseanimation", mouseani)
    mouse.scale = 0.2

}

function draw() {

    //background(255);
    //Write condition here to evalute if tom and jerry collide

    ISTOUCHINGS();

    if(keyDown("space")){

    
    //cat.changeAnimation("catanimation",caatani);
    cat.velocityX = -2;

    }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode=== LEFT_ARROW){

    cat.velocityX = -5;
    cat.addAnimation("catrunnig", catimg);
    cat.chamgeAnimation("catimg")

    mouse.addAnimation("mouseanimation",  mouseani);
    mouse.changeAnimation("mouseanimation")
 }

}
 

function ISTOUCHINGS(){

    if(cat.x - mouse.x < mouse.width/2 + mouse.widht/2 && mouse.x - cat.x < mouse.width/2 + cat.width/2 ){

        cat.addImage("catfrnds" ,catfrnd);
        mouse.changeImage("mousefrnds", mousefrnd);


    
   
    }

}