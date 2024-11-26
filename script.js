console.log("Welcome To Spotify")

let songIndex=0;
let audioElement = new Audio('song1/.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('songItem')

let songs = [
    {songName : "Salam-e-Ishq" , filePath: "song1.mp3" , coverPath:"cover/1.jpg" },
    {songName : "Lambiyaan_Si_Judaiyaan_-_Raabta_320_Kbps" , filePath: "song2.mp3" , coverPath:"cover/2.jpg" },
    {songName : "Maahi_Ve_-_Kal_Ho_Naa_Ho_320_Kbps" , filePath: "song3.mp3" , coverPath:"cover/3.jpg" },
    {songName : "Raabta_(Title_Track)_-_Raabta_320_Kbps" , filePath: "song4.mp3" , coverPath:"cover/4.jpg" },
    {songName : "Salam-e-Ishq" , filePath: "songs5.mp3" , coverPath:"cover/5.jpg" },
    {songName : "Salam-e-Ishq" , filePath: "songs6.mp3" , coverPath:"cover/6.jpg" },
    {songName : "Salam-e-Ishq" , filePath: "songs7.mp3" , coverPath:"cover/7.jpg" },
    {songName : "Salam-e-Ishq" , filePath: "songs8.mp3" , coverPath:"cover/8.jpg" },
    {songName : "Salam-e-Ishq" , filePath: "songs9.mp3" , coverPath:"cover/9.jpg" },


]

songItems.forEach( (element) => {
    console.log(element,i);
    element.getElementsByClassName('img')[0].src = songs [i].filePath;
});


 // Handle play/pause click 
 masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } 
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
 })

//Listen to Events 
audioElement.addEventListener('timeupdate', ()=>  {
    //update Seek Bar
    progress= parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value= progress; 
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})