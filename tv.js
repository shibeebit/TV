const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');
const powerBtn = document.getElementById('power');
const screen = document.getElementById('screen');
const vids = ["vid1.mp4", "vid2.mp4", "vid3.mp4"];
let vidPlaying = 0;
let power = 0;

powerBtn.addEventListener('click', ()=>{
    if (power === 0){
        screen.innerHTML = '<video id="video" controls="controls"src="vid1.mp4"></video>';
        const video = document.getElementById('video');
        video.src = vids[vidPlaying];
        power = 1;
    } else if (power === 1) {
        screen.innerHTML = '<img src="black-screen.png">';
        power = 0;
    }
});

nextBtn.addEventListener('click', ()=>{
    if (vidPlaying<(vids.length-1)){
        vidPlaying++;
    } else{
        vidPlaying = 0;
    }
    video.src = vids[vidPlaying];
});

backBtn.addEventListener('click', ()=>{
    if (vidPlaying>0){
        vidPlaying--;
    } else{
        vidPlaying = vids.length-1;
    }
    video.src = vids[vidPlaying];
});


