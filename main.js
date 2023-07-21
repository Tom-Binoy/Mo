data_set = ["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus",
            "axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear",
            "beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book",
            "bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly",
            "cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot",
            "castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud",
            "coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship",
            "cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck",
            "dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger",
            "fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer",
            
            "foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar",
            "hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse",
            "hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail",
            "kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse",
            "lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid",
            "microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom",
            "nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can","palm tree","panda",
            "pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck",
              
            "picture frame","pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato",
            "power outlet","purse","rabbit","raccoon","radio","rain","rainbow","rake","remote control","rhinoceros","rifle","river",
            "roller coaster","rollerskates","sailboat","sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver",
            "sea turtle","see saw","shark","sheep","shoe","shorts","shovel","sink","skateboard","skull","skyscraper","sleeping bag",
            "smiley face","snail","snake","snorkel","snowflake","snowman","soccer ball","sock","speedboat","spider","spoon",
            "spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stop sign","stove",
           
            "streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot",
            "teddy-bear","telephone","television","tennis racquet","tent","The Eiffel Tower","The Great Wall of China","The Mona Lisa", 
            "tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor","traffic light","train","tree",
            "triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing machine","watermelon",
            "waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag","strawberry",
            "hamburger","boomerang"]
time = 120;
score = 0;
thisd = "";
se = 0;

function preload(){
    clasifier = ml5.imageClassifier("DoodleNet",modelLoaded);
}

function setup(){
    canvas = createCanvas(500,400);

    canvas.mouseReleased(canca)

}
function draw(){
    
    strokeWeight(13)
    stroke(0)
    if(se == 1 ){
        if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
        }
    }
    else if(se !== 2 && se != 3){

        thisd = data_set[Math.floor(Math.random()*data_set.length+1)]
        thisd = cap(thisd);
        document.getElementById("drawthis").innerHTML = "You Should Draw :-: "+thisd;
        se = 2;
    }
    
}

function canca(){
    clasifier.classify(canvas,gotResult)
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        dr = cap(result[0].label);
       document.getElementById("Drawing").innerHTML = "Your Drawing:-: "+dr;
       document.getElementById("Accurcy").innerHTML = "Accuracy :-: "+Math.floor(result[0].confidence*100);
        TimerCheck(dr)
    }
}

function modelLoaded(){
    console.log(ml5.version)
}


function TimerCheck(e){
    if(time != 0){
        if(e == ""){
                time--
                document.getElementById("time").innerHTML="Time Left :-: "+time+"s";
                setTimeout(function() {

                   TimerCheck()
                }, 1000); 
        }
        else{
            if(e == thisd){
                score++
                document.getElementById("score").innerHTML = "Score :-: "+score;
                time = 160;
                document.getElementById("time").innerHTML="Time Left :-: "+time+"s";
            
                $('#myModalsuccess').modal('toggle');
                document.getElementById("startbtn").style.display = "inline"
                document.getElementById("clearbtn").style.display = "none";
                document.getElementById("imgds").innerHTML = e;
                e = "";
           }
           else{
                e = "";
                TimerCheck(e)
           }
            
        }
      
    }
    else{ 
        $('#myModalfail').modal('toggle');
        document.getElementById("startbtn").style.display = "inline"
        document.getElementById("imgdf").innerHTML = e;
        se = 3;
    }
}

function clearcan(){
    background("White");
}

function start(){
    document.getElementById("startbtn").style.display = "none";
    document.getElementById("clearbtn").style.display = "inline";
    TimerCheck()

    
    se = 1
    draw()
}

function cap(e){
    f = e[0].toUpperCase()
    e = e.replace(e[0] ,f );
    return e;
}

function retry(){
    $("#myModalfail").modal('toggle');
    time=120
    document.getElementById("time").innerHTML="Time Left :-: "+time+"s";
    clearcan()
}

function next(){
    $("#myModalsuccess").modal('toggle');
    clearcan()
}