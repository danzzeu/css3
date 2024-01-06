function play() {
    const audio = document.getElementById("playsong");
    const button = document.getElementById("play");
  
    if (audio.paused) {
        audio.play();
        button.classList.add("bi-pause-circle-fill");
        button.classList.remove("bi-play-circle-fill");
    }else{
        audio.pause();
        audio.currentTime = 0
        button.classList.add("bi-play-circle-fill");
        button.classList.remove("bi-pause-circle-fill");
    }
}