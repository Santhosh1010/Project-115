function preload()
{

}

function setup()
{
        canvas = createCanvas(300, 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300, 300);
        video.hide();
    
        poseNet = ml5.poseNet(video, modelLoaded);
    
        poseNet.on('pose', gotPoses)
}

function draw()
{
    
}

function modelLoaded()
{
    console.log('Posenet is initialized.');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("mouth x = " + results[0].pose.mouth.x);
        console.log("mouth y = " + results[0].pose.mouth.y);
    }
}