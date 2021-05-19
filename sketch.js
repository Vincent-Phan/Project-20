var cat, catImg, garden, gardenImg, mouse, mouseImg, mouseAnim, catAnim, mouseHappy, catHappy

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png")
    mouseAnim = loadAnimation("images/mouse2.png","images/mouse3.png")
    catAnim = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseHappy = loadImage("images/mouse4.png");
    catHappy = loadImage("images/cat4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage("GARDEN", gardenImg);

    mouse = createSprite(200,600,30,30);
    mouse.addImage("mouse_passive", mouseImg);
    mouse.scale=0.22
    
    cat = createSprite(750,600,30,30)
    cat.addImage("cat_passive", catImg);
    cat.scale=0.25

}

function draw() {

    background(255);
    
    
    cat.debug=true;
    mouse.debug=true;
    //Write condition here to evalute if tom and jerry collide
    if(cat.x*2 - mouse.x < (cat.width - mouse.width)/2){
        cat.addImage("cat_happy", catHappy);
        mouse.addImage("mouse_happy", mouseHappy);
        cat.changeAnimation("cat_happy");
        mouse.changeAnimation("mouse_happy");
        cat.velocityX=0;
    }


    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode===LEFT_ARROW){
 mouse.addAnimation("mouse_Teasing", mouseAnim);
 mouse.changeAnimation("mouse_Teasing");
 mouse.frameDelay=5;

 cat.addAnimation("cat_walking", catAnim);
 cat.changeAnimation("cat_walking");
 cat.frameDelay=5;
 cat.velocityX=-3;
}
}