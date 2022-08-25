let span = document.querySelector(".up");
let button = document.querySelector(".sign1");
let button2 = document.querySelector(".sign2");

let myVideo = document.querySelector(".iframe-container")
let myVideo2 = document.querySelector(".iframe2-container")

let xButton = document.querySelector(".x-bottun")
let xButton2 = document.querySelector(".x-bottun2")

var vid = document.getElementById("vid"); 


window.onscroll = function () {
   console.log(this.scrollY);
  this.scrollY >= 620 ? span.classList.add("show") : span.classList.remove("show");
};


span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

button.onclick = function () {
   myVideo.classList.add("show");
};


xButton.onclick = function () { 
  myVideo.classList.remove("show");
} 

button2.onclick = function () {
  myVideo2.classList.add("show");
};


xButton2.onclick = function pauseVid() { 
 myVideo2.classList.remove("show");
 vid.pause(); 
} 