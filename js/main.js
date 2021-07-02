'use strict';
let menu = document.querySelector('.header ul');
let toggleIcon = document.querySelector('.toggle-menu');
let closeIcon = document.querySelector('.header ul i');

toggleIcon.onclick = function toggleMenu() {
    if (document.body.clientWidth < 768) {
    menu.classList.toggle('show');
    }
}
closeIcon.addEventListener('click', function(){
    if (document.body.clientWidth < 768) {
        menu.classList.remove('show');
    } 
});

let seasonArrow = document.querySelector('.season-arrow');
let locationArrow = document.querySelector('.location-arrow');
let seasonDiv = document.querySelector('.season  .list');
let locationDiv = document.querySelector('.location .list');

/* Function to Show Season div  */
seasonArrow.addEventListener('click' , function seaArrow(){
    seasonDiv.classList.toggle('visiable');
});

/* Function to Show Location div  */
locationArrow.addEventListener('click' , function locArrow(){
    locationDiv.classList.toggle('visiable');
});

let seasonSelect = document.querySelector('.season h3');
let locationSelect = document.querySelector('.location h3');


let chooseSeason = document.querySelectorAll('.season  .list ul li');
let chooseLocation = document.querySelectorAll('.location  .list ul li');

/* Choose Season List Value */
for (let i = 0; i < chooseSeason.length; i++){
    chooseSeason[i].addEventListener('click' , function chooseSea(){
     seasonSelect.textContent = chooseSeason[i].textContent;
     seasonDiv.classList.remove('visiable');
    });
}
/* Choose Location List Value */
for (let i = 0; i < chooseLocation.length; i++){
    chooseLocation[i].addEventListener('click' , function chooseLoc(){
     locationSelect.textContent = chooseLocation[i].textContent;
     locationDiv.classList.remove('visiable');
    });
}



/* Variables For Sliders   */
let moveRight = document.querySelector('.trek .move-right');
let moveLeft = document.querySelector('.trek .move-left');

let videoRight = document.querySelector('.trekkers-say .move-right');
let VideoLeft = document.querySelector('.trekkers-say .move-left');

let teamIcon = document.querySelector(' .team .advisor-big-container .move-right');
const teamSlides = document.querySelectorAll('.team .advisor-container .person');

let advisorIcon = document.querySelector('.advisor .advisor-big-container .move-right');
const advisorSlides = document.querySelectorAll('.advisor .advisor-container .person');

const slides = document.querySelectorAll('.roads .slide');
const videoSlides = document.querySelectorAll('.video-container .slide');

let x = 0;

/* Function to slide Sliders Divs To left */
moveLeft.addEventListener('click', function(){

x++;
for (let i = 0; i < slides.length; i++){
if(x==0) {slides[i].style.left = "0px";}
if(x==1) {slides[i].style.left = "-320px";}
if(x==2) {slides[i].style.left = "-640px";}
if(x==3) {slides[i].style.left = "-960px";}
if(x==4) {slides[i].style.left = "-1280px";}
if(x==5) {slides[i].style.left = "-1600px";}

if(x>5) {x=5;}
}
});

/* Function to slide Sliders Divs To Right */
moveRight.addEventListener('click', function(){
x--;
for (let i = 0; i < slides.length; i++){
if(x==0) {slides[i].style.left = "0px";}
if(x==1) {slides[i].style.left = "-320px";}
if(x==2) {slides[i].style.left = "-640px";}
if(x==3) {slides[i].style.left = "-960px";}
if(x==4) {slides[i].style.left = "-1280px";}

if(x < 0) {x=0;}
}
});


/* Function to slide Sliders Video To left */
VideoLeft.addEventListener('click', function(){

x++;
for (let i = 0; i < videoSlides.length; i++){
if(x==0) {videoSlides[i].style.left = "0px";}
if(x==1) {videoSlides[i].style.left = "-320px";}
if(x==2) {videoSlides[i].style.left = "-640px";}
if(x==3) {videoSlides[i].style.left = "-960px";}
if(x==4) {videoSlides[i].style.left = "-1280px";}
if(x==5) {videoSlides[i].style.left = "-1600px";}

if(x>5) {x=5;}
}
});

/* Function to slide Sliders Videos To Right */
videoRight.addEventListener('click', function(){
x--;
for (let i = 0; i < videoSlides.length; i++){
if(x==0) {videoSlides[i].style.left = "0px";}
if(x==1) {videoSlides[i].style.left = "-320px";}
if(x==2) {videoSlides[i].style.left = "-640px";}
if(x==3) {videoSlides[i].style.left = "-960px";}
if(x==4) {videoSlides[i].style.left = "-1280px";}

if(x < 0) {x=0;}
}
});

let imgRight = document.querySelector('.tth .move-right');
let imgLeft = document.querySelector('.tth .move-left');
const imgSlides = document.querySelectorAll('.tth-container .slide');


/* Function to slide Images Video To left */
imgLeft.addEventListener('click', function(){

x++;
for (let i = 0; i < imgSlides.length; i++){
if(x==0) {imgSlides[i].style.left = "0px";}
if(x==1) {imgSlides[i].style.left = "-320px";}
if(x==2) {imgSlides[i].style.left = "-640px";}
if(x==3) {imgSlides[i].style.left = "-960px";}
if(x==4) {imgSlides[i].style.left = "-1280px";}
if(x==5) {imgSlides[i].style.left = "-1600px";}

if(x>5) {x=5;}
}
});

/* Function to slide Images Videos To Right */
imgRight.addEventListener('click', function(){
x--;
for (let i = 0; i < imgSlides.length; i++){
if(x==0) {imgSlides[i].style.left = "0px";}
if(x==1) {imgSlides[i].style.left = "-320px";}
if(x==2) {imgSlides[i].style.left = "-640px";}
if(x==3) {imgSlides[i].style.left = "-960px";}
if(x==4) {imgSlides[i].style.left = "-1280px";}

if(x < 0) {x=0;}
}
});





/* Function to Slide  Teams Persons */
teamIcon.addEventListener('click', function(){
 x++;
 for (let i = 0; i < teamSlides.length; i++){
 if(x==0) {teamSlides[i].style.left = "0px";}
 if(x==1) {teamSlides[i].style.left = "-240px";}
 if(x==2) {teamSlides[i].style.left = "-460px";}
 if(x==3) {teamSlides[i].style.left = "-700px";}
 if(x==4) {teamSlides[i].style.left = "-920px";}
 if(x==5) {teamSlides[i].style.left = "-1150px";}
 if(x>5) {x=-1;}
 }
});

/* Function to Slide Advisor  Persons */
advisorIcon.addEventListener('click', function(){
x++;
for (let i = 0; i < advisorSlides.length; i++){
if(x==0) {advisorSlides[i].style.left = "0px";}
if(x==1) {advisorSlides[i].style.left = "-240px";}
if(x==2) {advisorSlides[i].style.left = "-460px";}
if(x==3) {advisorSlides[i].style.left = "-700px";}
if(x==4) {advisorSlides[i].style.left = "-920px";}
if(x==5) {advisorSlides[i].style.left = "-1150px";}
if(x>5) {x=-1;}
}
});




/* Make Button Play Video  */


let playBtn = document.querySelectorAll('.play-btn');
let closeBtn = document.querySelectorAll('.close-btn');
let videos = document.querySelectorAll('.video-parent .video');
let videoContent = document.querySelectorAll('.video-content');
let videoParent = document.querySelectorAll('.video-parent');



/* Function Toggle Video (Play / Pause) */

   for(let i = 0; i < playBtn.length; i++){
    playBtn[i].addEventListener('click' , function (){
    videos[i].play();
    videos[i].controls = true;
    videoContent[i].style.display = "none";
    closeBtn[i].style.display = "flex";
    playBtn[i].style.display = "none";
});

   };

    for(let i = 0; i < videos.length; i++){
        closeBtn[i].addEventListener('click' , function (){
        videos[i].pause();
        videos[i].style.poster= "block";
        videos[i].currentTime = 5;
        videos[i].controls = false;
        videoContent[i].style.display = "block";
        closeBtn[i].style.display = "none";
        playBtn[i].style.display = "flex";
   });
  };



/* Function loading */

let loadDiv =  document.querySelector('.container-load');

window.addEventListener('load' , function (){
        loadDiv.style.display = "none";
});

/* Explore Link To Serach in Goolge.com */


let explore = document.getElementById('explore');
explore.addEventListener('click' , function (){
 explore.setAttribute("href", "https://www.google.com/search?&ie=UTF-8&q=Himalaya trip from "+locationSelect.textContent+" on " +seasonSelect.textContent+"");

});
