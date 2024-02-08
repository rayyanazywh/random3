noseX = 0;
noseY = 0;

//function preload()
function preLoad(){
    clown_nose = loadImage('https://i.postimg.cc/NMzZg84X/nose.jpg');
}

//setup()
function setUp(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

// poseNet()
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.Y;
    }
}

// modelLoaded()
function modelLoaded() {
    console.log('PoseNet is Initialized');
}

// draw()
function draw(){
    Image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);

}

// take_snapshot
function take_snapshot(){
    save('myFilterImage.png');
}

