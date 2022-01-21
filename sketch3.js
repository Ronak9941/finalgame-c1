var logo,logoImg
var bgimg,play,about,back


function preload(){
bgimg= loadImage("wait.jpg")
logoimg=loadImage("logo.png")
//playimg=loadImage("button1.png")

}

function setup(){
createCanvas(windowWidth-20,windowHeight-20)

logo= createSprite(width/2,height/2)
logo.addImage(logoimg)
logo.scale=1.5;


//play= createSprite(100,100)
//play.addImage(playimg)



play.createImg("button1.png")
play.position(100,100)

/*about.createButton("about")
about.position(100,100)

back.createButton("back")
back.position(100,100)
*/


}

function draw(){
    background(bgimg)



    drawSprites();


}