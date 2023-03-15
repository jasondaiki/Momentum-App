let i = 0; 
let placeholder = "";
const txt = "ENTER YOUR NAME"
const speed = 200;
const inputText = document.getElementById("inputtext");
const submit = document.getElementById("submitone");
let form = document.getElementById("form");
let input = document.getElementById("inputtext");
let message = document.getElementById("maintext");
let data = "";


function changeBackground(){
   let background = document.getElementById("wholepage");
   let backgroundImages = ["url(/img/1.jpg)", "url(/img/4.jpg)", "url(/img/2.jpg)"];
   let num = 0;
   let num_img = backgroundImages.length;

   setInterval(function(){
    background.style.background = backgroundImages[num++];
    background.style.backgroundSize = 'cover';
    if (num === num_img){
        num = 0;
    }
   }, 15000);
}
changeBackground();

function type(){
    if(i < txt.length){
    placeholder += txt.charAt(i);
    document.getElementById("inputtext").setAttribute
    ("placeholder",placeholder);
    i++;
    setTimeout(type,speed);
};
}
type();

form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

submit.addEventListener("click", () =>{
    data = input.value;
    message.innerHTML = "Welcome," + " " + data + "!";
    form.style.display = 'none';
    document.getElementById("clock").style.visibility = 'visible';
})

function realtimeClock(){
   let rtClock = new Date();
   let hours = rtClock.getHours();
   let minutes = rtClock.getMinutes();
   let seconds = rtClock.getSeconds();
   let amPM = ( hours > 12) ? "PM" : "AM";
   hours = (hours > 12) ? hours - 12 : hours;
   hours = ("0" + hours).slice(-2);
   minutes = ("0" + minutes).slice(-2);
   seconds = ("0" + seconds ).slice(-2);
   document.getElementById("clock").innerHTML = 
   hours + ":" + minutes + ":" + seconds + " " + amPM;
   let t = setTimeout(realtimeClock, 500);
}
