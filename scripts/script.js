var video = document.getElementById("video1");
var flagPlay = 0;
var flagMute = 0;
var dataMute = 0;
function play(img){
    if(flagPlay==0){
        video.play();
        flagPlay = 1;
        document.getElementById("playPause").src = "../resources/pause.png";
    }else{
        video.pause();
        flagPlay = 0;
        document.getElementById("playPause").src = "../resources/play.png";

    }
}

function stop(){
    video.pause();
    video.currentTime = 0 ;
    video.playbackRate = 1;
    if(flagPlay == 1){
        document.getElementById("playPause").src = "../resources/play.png";
        flagPlay = 0;
    }
    ChangeIconVol();
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
    style.opacity = 100 + "%";
}

function OutVideo(style){
    console.log(style.opacity);
    style.opacity = 0 + "%";
    OutVol();
}

function OntoVol(){
    document.getElementById("intensityControl").style.opacity = 100 + "%";

}

function OutVol(){
    document.getElementById("intensityControl").style.opacity = 0 + "%";
}


function volume(){
    let vol =  document.getElementById("intensityControl").value;
    video.volume = vol;
    if(vol!=0){
      dataMute = vol;
    }
    ChangeIconVol()
}

function ChangeIconVol(){
    let vol =  document.getElementById("intensityControl").value;
    if(vol>0 && vol<0.5){
        document.getElementById("vol").src = "../resources/audio_intensity_one.png";
     } else if(vol>=0.5){
        document.getElementById("vol").src = "../resources/audio_intensity_two.png";

    }else{
        document.getElementById("vol").src = "../resources/audio_intensity_zero.png";

    }
}

function Mute(){
    console.log(dataMute);
    if(flagMute == 0){
        document.getElementById("intensityControl").value = 0;
        flagMute = 1;
    }else{
        document.getElementById("intensityControl").value = dataMute;
        flagMute = 0;
    }
    ChangeIconVol();
    volume();

}