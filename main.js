nose_x=0;
nose_y=0;

function preload(){

clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}


    function setup(){

        canvas = createCanvas(400,400)
        canvas.center();
        video=createCapture(VIDEO)
        video.size(400,400)
        video.hide()
        poseNet = ml5.poseNet(video,modelLoaded)
        poseNet.on('pose' ,gotResult)
    }

        function modelLoaded(){

            console.log("poseNet Working Sucessfuly")
        }

    function draw(){
        image(video,0,0,400,400 )
        //fill(255,0,0)
        //stroke(255,0,0)
        //circle(nose_x,nose_y,25)
        
       image(clown_nose,nose_x-10,nose_y-10,30,30);

    }

    function take_snapshot(){

        save("MyFilterImage.png")
    }

    function gotResult(result){

        if(result.length >0){
           nose_x=result[0].pose.nose.x
            nose_y=result[0].pose.nose.y
            console.log(result)
            console.log("nose x = " ,nose_x)
            console.log("nose y = ", nose_y)
        }
        }
