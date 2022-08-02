var musicIcon = document.getElementById('musicIcon');
var speed = document.getElementById('speed');
var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var totalTime = document.getElementById('totalTime');
var toggleButton = document.getElementById('toggleButton');
var volumeSlider = document.getElementById('volumeSlider');
var nextSong = document.getElementById('nextSong');
var forwardSong = document.getElementById('forwardSong');


var songs = [
      "halleuyia.mp3",
       "kaatupuravin_satham_kekuradhu(from-jesus-redeems).mp3",
       "Kiruba_Kiruba_l_Pr_Darwin_Ebenezer.mp3",
       "Nan_Alutha_Pothu_Ellam.mp3",
       "Singa_Kebiyil_Naan_RevVijay_Aaro.mp3",
       "Ummai_nambi_vanthaen_naa_vekkappada.mp3"
];

 var player = new Audio();
 var currentSong = 2;

 function loadPlayer()
 {
      player.src = '../musicplayerproject/songs/' + songs[currentSong];
      songTitle.textContent = songs[currentSong];
      nextSong.textContent = songs[(currentSong + 1) % songs.length];
      player.volume = volumeSlider.value;
      
 };

 function togglePlayer()
 {
      if(player.paused)
      {
      player.play();
      toggleButton.style.backgroundColor = 'red';
      toggleButton.classList.add('fa-pause');
      musicIcon.style.animation = 'rotation 5s linear 0s infinite';
      }
      else 
      {
            player.pause();
            toggleButton.style.backgroundColor = 'black';
            toggleButton.classList.remove('fa-pause');
            musicIcon.style.animation = 'none';
      }
 }

 function updatePlayerInfo()
 {
       totalTime.textContent = convertTime(player.duration);
       currentTime.textContent = convertTime(player.currentTime);
       speed.textContent = player.playbackRate + 'x';

       songSlider.max = player.duration;
       songSlider.value = player.currentTime;

       if(Math.floor(player.currentTime) == Math.floor(songSlider.max))
       {
           forwardSong.click();
       }
 };

 function convertTime(duration)
 {
       var mins = Math.floor(duration / 60);
       var secs = Math.floor(duration % 60);
       mins = mins < 10 ? '0' + mins : mins;
       secs = secs < 10 ? '0' + secs : secs;
       return mins + ':' + secs;
 }; 

 function jumpTo()
 {
      player.currentTime = songSlider.value;
 };

 function changeMusicIcon() 
{
      toggleButton.style.backgroundColor = 'red';
      toggleButton.classList.add('fa-pause');
      musicIcon.style.animation = 'rotation 5s linear 0s infinite';
};

 function previousSong()
 {
      currentSong--;
      if(currentSong < 0 )
      {
          currentSong = songs.length - 1;
      }
      loadPlayer();
      player.play();
      changeMusicIcon();
};

function nextsong()
{
      currentSong = (currentSong + 1) % songs.length;
      loadPlayer();
      player.play();
      changeMusicIcon();
};

function decPlayback() 
{
      player.playbackRate =  player.playbackRate - 0.25;
};


function incPlayback() 
{
      player.playbackRate =  player.playbackRate + 0.25;
};


//  volumn function 
 function updateVolume()
 {
      player.volume = volumeSlider.value;
 };
 
 setInterval(updatePlayerInfo, 1000);

 window.onload = loadPlayer();


//  popup show 

// document.querySelector('#close').addEventListener("click", function()
//   {
//       document.querySelector(".popup").style.display = "none";
//   });

//   window.addEventListener("load", function()
//   {
//       setTimeout(
//             function open(event)
//             {
//                  document.querySelector(".popup").style.display = "block";
//             }, 500
//       )
//   });
