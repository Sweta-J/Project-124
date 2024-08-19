function setup() {
    canvas = createCanvas(500, 450);
    canvas.position(700, 125);
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background('#969A97')
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}