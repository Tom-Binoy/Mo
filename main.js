length1 = 0;
text = "Write Your Costomised 'Text' In The Below Input";

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
        length1 = floor(results[0].pose.rightWrist.x - results[0].pose.leftWrist.x);
        document.getElementById("wht").innerHTML = "Font Size of Your Text is "+length1;
    }
}
function draw(){
    testSize(length1);
    fill("white");
    text(text,50,50);
}
input = document.getElementById("input")
input.addEventListener("keydown",yes)

function yes(e){
    if(e.key == "Enter"){
        text = input.value;
        input.value = "";
    }
}