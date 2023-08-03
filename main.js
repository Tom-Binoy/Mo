function setup(){
    canvas = createCanvas(300,300);
    canvas.position(100,100);
    video = createCapture(VIDEO);

    Posenet = ml5.poseNet(video, modelLoaded)
    Posenet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length != 0){
        console.log(results);
    }
}