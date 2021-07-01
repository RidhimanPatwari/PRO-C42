var issImage, spacebgImage, spacecraft1Image, spacecraft2Image, spacecraft3Image, spacecraft4Image;
var iss, spacecraft;
var hasDocked = false;

function preload() {
  issImage = loadImage("images/iss.png");
  spacebgImage = loadImage("images/spacebg.jpg");
  spacecraft1Image = loadImage("spacecraft1.png");
  spacecraft2Image = loadImage("spacecraft2.png");
  spacecraft3Image = loadImage("spacecraft3.png");
  spacecraft4Image = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage);
  iss.scale = 0.8;
  spacecraft = createSprite(400, 300, 50, 50);
  spacecraft.scale = 0.2;
  spacecraft.x = round(random(50, 750));
  spacecraft.depth = iss.depth;
  spacecraft.depth = spacecraft.depth - 1;
  console.log(iss.depth);
  console.log(spacecraft.depth);
}

function draw() {
  background(spacebgImage);

  spacecraft.addImage(spacecraft1Image);

  if (!hasDocked) {
    if (keyDown(LEFT_ARROW)) {
      spacecraft.addImage(spacecraft3Image);
      spacecraft.x -= 10;
    }
    if (keyDown(RIGHT_ARROW)) {
      spacecraft.addImage(spacecraft4Image);
      spacecraft.x += 10;
    }
    if (keyDown(UP_ARROW)) {
      spacecraft.y -= 10;
    }
    if (keyDown(DOWN_ARROW)) {
      spacecraft.addImage(spacecraft2Image);
    }
  }

  if (spacecraft.x >= 342 && spacecraft.x <= 352 && spacecraft.y >= 265 && spacecraft.y <= 275) {
    hasDocked = true;
    textSize(20);
    stroke("white");
    strokeWeight(1)
    text("Docking Successful!", 250, 350);
  }
  //x: 347 y: 270


  drawSprites();
}
