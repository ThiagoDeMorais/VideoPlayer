let video = document.getElementById("video1");
let flag = 0;

function play(img){
    if(flag==0){
        video.play();
        flag = 1;
        document.getElementById("playPause").src = "../resources/pause.png";
    }else{
        video.pause();
        flag = 0;
        document.getElementById("playPause").src = "../resources/play.png";

    }
}

function stop(){
    video.pause();
    video.currentTime = 0 ;
    video.playbackRate = 1;
    if(flag == 1){
        document.getElementById("playPause").src = "../resources/play.png";
        flag = 0;
    }

}

function decrease(){
video.playbackRate *= 0.95;
}

function increase(){
    video.playbackRate *= 1.05;
}

function jump_back(){
    video.currentTime -= 5;
}

function jump_forward(){
    video.currentTime += 5
}


function OntoVideo(style){
    console.log(style);
    style.opacity = 100 + "%";
}

function OutVideo(style){
    console.log(style);
    console.log(style.opacity);
    style.opacity = 0 + "%";
}


function IncreaseOpacityContainer(){

}

function DecreaseOpacityContainer(){

}