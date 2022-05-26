nose_x=""
nose_y=""

function preload()  {
colwn_nose=loadImage("https://i.postimg.cc/Kvx1dskk/114-1147898-clown-nose-png-clip-art-clown-nose-transparent-removebg-preview.png")
} 

function  setup() {
    canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose" , gotposes)
}

function modelloaded() {
    console.log("posenet is initialised");
}


function gotposes(Results) {
if ( Results.length > 0) {
    console.log(Results)
    nose_x=Results[0].pose.nose.x
    nose_y=Results[0].pose.nose.y
    console.log("nosex=" , nose_x);
    console.log("nosey=" , nose_y);
}
  

}


function  draw()  {
  image(video,0,0,400,400);
  fill(255 , 0 , 0);
  stroke(255 , 0 , 0);
  //circle(nose_x,nose_y,20);

  image(colwn_nose , nose_x-20 , nose_y-20 , 30, 30)
}

function takeSnapshot() {
    save("picture.png");
}