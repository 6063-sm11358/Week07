let mImg;

function preload()
{
  mImg = loadImage("./abaporu.jpg")
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  
  image(mImg, width/2, height/2);
  noLoop();
}

function draw()
{
  background(220, 20, 120);
  noStroke();

  mImg.loadPixels();
  let spacing = 30;

  for(let y=0; y<mImg.height; y+=spacing)
  {
    for(let x=0; x<mImg.width; x+=spacing)
    {
      let pixelIndex = 4 * (y * mImg.width + x);
      let redVal = mImg.pixels[pixelIndex+0];
      let greenVal = mImg.pixels[pixelDensity+1];
      let blueVal = mImg.pixels[pixelDensity+2];

      fill(redVal,greenVal,blueVal);
      ellipse(x, y, spacing);
    }
  }
  mImg.updatePixels();
}
