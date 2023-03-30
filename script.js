console.log("Welcome To Spotify");

let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.getElementById('masterplay');
let progressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName("songItem"));
let masterSongName= document.getElementById("masterSongName");
let songs=[
    {songName:"Let me Love You",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Closer",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Animals",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Complicated",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Believer",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Better",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Me and You",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Shaana Ban",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
]


songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src =  songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText= songs[i].songName;

});

//Now we set icon for pause and play

masterPlay.addEventListener("click",()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity=1;

}else{
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity=0;
}
});

// Listen to Events
audioElement.addEventListener("timeupdate",()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
});
progressBar.addEventListener("change",()=>{
  audioElement.currentTime=progressBar.value  * audioElement.duration/100;
});


const makeAllPlays = () =>{
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
element.classList.remove("fa-circle-pause");
element.classList.add("fa-circle-play");
gif.style.opacity=0;
});
};


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
element.addEventListener("click",(e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})
});

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=7;
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=7){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});