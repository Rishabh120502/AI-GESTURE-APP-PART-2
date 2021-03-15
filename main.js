function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    
    canvas=createCanvas(600,500)
    canvas.position(600,150);
    
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose', gotPoses);
    }
    
    function draw(){
    background('#00FF00');
        
    }
    
    function modelLoaded(){
        console.log('poseNet is Initialised!!')
    }
    
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
        }
    }