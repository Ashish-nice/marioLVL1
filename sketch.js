var mario, mario_running, mario_collided;
var bg, bgImage;

function preload(){
    mario_running = loadAnimation ("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png")
    bgImage = loadImage ("images/bgnew.jpg")
}

function setup() {
    createCanvas(1000, 595);
    bg = createSprite (200, 250);
    bg.addImage (bgImage);
    bg.scale = 0.43;
    mario = createSprite (100, 510, 50, 70)
    mario.addAnimation ("running",mario_running)
    mario.scale = 0.28;
    ground = createSprite (100, 590, 400, 10);
    ground.visible = false;
    mario.debug = true;
}

function draw() {
    background ("black");

    if (keyDown("space"))
    {
        mario.velocityY = -15;
    }
    mario.velocityY = mario.velocityY+0.8;

    mario.collide(ground);

    drawSprites ();
}
