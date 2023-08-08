length1 = 0;
word = "Write Your Costomised 'Text' In The Below Input";

function setup(){
    canvas = createCanvas(500,650);
    canvas.position(100,100);
    canvas.center();
    
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
        length1 = floor(results[0].pose.leftWrist.x - results[0].pose.rightWrist.x);
        document.getElementById("wht").innerHTML = "Font Size of Your Text is "+length1;
    }
}
function draw(){
    background("rgba(255, 20, 145, 0.807)");
    textSize(length1);
    fill("white");
    text(word,10,250);
}
input = document.getElementById("input")
input.addEventListener("keydown",yes)

function yes(e){
    if(e.key == "Enter"){
        word = input.value;
        input.value = "";
    }
}
