let i = 0; 
let placeholder = "";
const txt = "ENTER YOUR NAME"
const speed = 200;
const inputText = document.getElementById("inputtext");
const submit = document.getElementById("submitone");
const qoutes = document.getElementById("qoutebox");
let form = document.getElementById("form");
let input = document.getElementById("inputtext");
let message = document.getElementById("maintext");
let data = "";



function changeBackgroundAndQoutes(){
   const background = document.getElementById("wholepage");
   const qoute = document.getElementById("qoutes");
   let backgroundImages = ["url(/img/1.jpg)", "url(/img/4.jpg)", "url(/img/2.jpg)"];
   let qoutes = [
    "“Whether here or in the real world, you can cry when it hurts. There’s no rule that you can’t show feelings just because it’s a game.” -Kirito",
    "“Every day here is another one lost in the real world.” -Yuuki Asuna",
    "“It’s impossible to work hard for something you don’t enjoy.” -Silica",
    "“Stay alive you hear? I don’t care how you do it. Just stay alive until the end.” -Klein",
    "“Even in a world like this, he was really living.” -Asuna",
   ]
   let num = 0;
   let num_img = backgroundImages.length;
   let num_qoute = qoutes.length;

   setInterval(function(){
    qoute.innerHTML = qoutes[num++];
    if (num === num_qoute){
        num = 0;
    }
   }, 15000);

   setInterval(function(){
    background.style.background = backgroundImages[num++];
    background.style.backgroundSize = 'cover';
    if (num === num_img){
        num = 0;
    }
   }, 15000);
}
changeBackgroundAndQoutes();

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
    let rtClock = new Date();
    let hours = rtClock.getHours();
    let greetings = ( hours > 12 ) ? "Good Afternoon" : ( hours > 18 ) ? "Good Evening" : "Good Morning";
    message.innerHTML = greetings + "," + " " + data + "!";
    form.style.display = 'none';
    document.getElementById("clock").style.visibility = 'visible';
    qoutes.style.visibility = 'visible';
    
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

function realDate(){
    let date = new Date();
    let days = date.getDay();
    let months = date.getMonth();
    let daysNum = date.getUTCDate();
    let year = date.getFullYear();
    let displayDate = document.getElementById("day");
    let daysString = (days === 0) ? "Sunday" :
    (days === 1) ? "Monday" :
    (days === 2) ? "Tuesday" :
    (days === 3) ? "Wednesday" :
    (days === 4) ? "Thursday" :
    (days === 5) ? "Friday" :
    "Saturday";
    let monthsString = (months === 0) ? "January" :
    (months === 1) ? "February" :
    (months === 2) ? "March" :
    (months === 3) ? "April" :
    (months === 4) ? "May" :
    (months === 5) ? "June" :
    (months === 6) ? "July" :
    (months === 7) ? "August" :
    (months === 8) ? "September" :
    (months === 9) ? "October" :
    (months === 10) ? "November" :
    "December"
    displayDate.innerHTML = daysString + " " + monthsString + " " + daysNum + "," + " " + year;
}
realDate();
realtimeClock();

function toDoApp(){
    let newTask = document.getElementById("task");
    let taskInput = document.getElementById("todoinput")
    const addTask = document.getElementById("addtask");
    const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
    const deleteBtn = document.getElementById("deleteBtn");

    
    
    addTask.addEventListener("click", () =>{
        itemsArray.push(taskInput.value)
        localStorage.setItem("items", JSON.stringify(itemsArray))
        location.reload()
    })

    function displayTask(){
        let items = "";
        for(let i = 0 ; i < itemsArray.length; i++){
            items += `  <div id="newtask">
                          <input type="checkbox" name="newtask">
                          <label for="newtask">${itemsArray[i]}</label>
                          <img class="edit" id="edit" src="/img/edit-xxl.png">
                          <img class="delete" id="deleteBtn" src="/img/delete-xxl.png">
                        </div>`
        }
        newTask.innerHTML = items;
        activateDeleteListeners()
   }

   function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".delete")
    deleteBtn.forEach((dB, i) => {
      dB.addEventListener("click", () => { deleteItem(i) })
    })
  }

  function deleteItem(i){
    itemsArray.splice(i,1)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
  }
    displayTask()
    
    
    
}
toDoApp()
