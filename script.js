let i = 0; 
let placeholder = "";
const txt = "ENTER YOUR NAME"
const speed = 200;
let rtClock = new Date();
let hours = rtClock.getHours();
const inputText = document.getElementById("inputtext");
const submit = document.getElementById("submitone");
const qoutes = document.getElementById("qoutebox");
let form = document.getElementById("form");
let input = document.getElementById("inputtext");
let message = document.getElementById("maintext");
let message2 = document.getElementById("maintext2");
const dataStorage = localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : [];
console.log(dataStorage)



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
    dataStorage.push(input.value)
    localStorage.setItem("name", JSON.stringify(dataStorage))
    location.reload()
    
})

function displayName(){
    let data = dataStorage[0];
    let rtClock = new Date();
    let hours = rtClock.getHours();
    let greetings = ( hours >= 12 & hours < 17 ) ? "Good Afternoon" : ( hours >= 18 ) ? "Good Evening" : "Good Morning";
    message2.innerHTML = greetings + "," + " " + data + "!";
    form.style.display = 'none';
    document.getElementById("clock").style.visibility = 'visible';
    qoutes.style.visibility = 'visible';
    message2.style.visibility = 'visible';
    message.style.display = 'none';
    console.log(hours)
}
displayName()

function backBtn(){
  const backBtn = document.getElementById("backBtn");
  const clock2 = document.getElementById("clock2")
  backBtn.addEventListener("click", () =>{
    dataStorage.splice[0]
    message.style.display = 'block'
    document.getElementById("clock").style.visibility = 'hidden';
    message2.style.display = 'none';
    qoutes.style.visibility = 'hidden';
    form.style.display = 'block';
    clock2.style.display = 'none';
  })
}
backBtn ()


function realtimeClock(){
   let rtClock = new Date();
   let hours = rtClock.getHours();
   let minutes = rtClock.getMinutes();
   let seconds = rtClock.getSeconds();
   let amPM = ( hours >= 12) ? "PM" : "AM";
   const clock = document.getElementById("clock")
   const clock2 = document.getElementById("clock2")
   hours = ("0" + hours).slice(-2);
   minutes = ("0" + minutes).slice(-2);
   seconds = ("0" + seconds ).slice(-2);
   document.getElementById("clock").innerHTML = 
   hours + ":" + minutes + ":" + seconds + " " + amPM;
   let t = setTimeout(realtimeClock, 500);
   clock.addEventListener("click", () =>{
    clock.style.display = 'none';
    clock2.style.display = 'block';
   })
}

function realtimeClock2(){
  let rtClock = new Date();
  let hours = rtClock.getHours();
  let minutes = rtClock.getMinutes();
  let seconds = rtClock.getSeconds();
  let amPM = ( hours >= 12) ? "PM" : "AM";
  const clock = document.getElementById("clock")
  const clock2 = document.getElementById("clock2")
  hours = (hours > 12) ? hours - 12 : hours;
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds ).slice(-2);
  document.getElementById("clock2").innerHTML = 
  hours + ":" + minutes + ":" + seconds + " " + amPM;
  let t = setTimeout(realtimeClock2, 500);
  clock2.addEventListener("click", () =>{
    clock.style.display = 'block';
    clock2.style.display = 'none';
  })
}

realtimeClock();


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


function showTodo(){
  const todoBtn = document.getElementById("toDo");
  const todoBtn2 = document.getElementById("toDo2");
  const todoBox = document.getElementById("todobox");
  todoBtn.addEventListener("click", () =>{
    todoBox.style.display = "block";
    todoBtn.style.display = "none";
    todoBtn2.style.display = "block"
  })
}

function hideTodo(){
  const todoBtn = document.getElementById("toDo");
  const todoBtn2 = document.getElementById("toDo2");
  const todoBox = document.getElementById("todobox");
  todoBtn2.addEventListener("click", () =>{
    todoBox.style.display = "none";
    todoBtn.style.display = "block";
    todoBtn2.style.display = "none"
  })
}

showTodo();
hideTodo();

function toDoApp(){
    let newTask = document.getElementById("task");
    let taskInput = document.getElementById("todoinput")
    const addTask = document.getElementById("addtask");
    const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
    

    
    
    addTask.addEventListener("click", () =>{
        itemsArray.push(taskInput.value)
        localStorage.setItem("items", JSON.stringify(itemsArray))
        location.reload()
    })

    function displayTask(){
        let items = "";
        for(let i = 0 ; i < itemsArray.length; i++){
            items += `<div id="newtask">
                        <div class="input-controller">
                         <input type="checkbox" name="newtask" class="checkbox">
                         <textarea disabled for="newtask" class="text">${itemsArray[i]}</textarea>
                       </div>
                         <img class="edit" id="edit" src="/img/edit-xxl.png">
                         <img class="delete" id="deleteBtn" src="/img/delete-xxl.png">

                       <div class="update-controller">
                        <button class="saveBtn">SAVE</button>
                        <button class="cancelBtn">CANCEL</button>
                       </div>
                      </div>`
        }
        newTask.innerHTML = items;
        activateDeleteListeners()
        activateEditListeners()
        activateSaveListeners()
        activateCancelListeners()
        activateCheckboxListeners()
   }

   function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".delete")
    deleteBtn.forEach((dB, i) => {
      dB.addEventListener("click", () => { deleteItem(i) })
    })
  }

  function activateEditListeners(){
    const editBtn = document.querySelectorAll(".edit")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eB, i) => {
      eB.addEventListener("click", () => { 
        updateController[i].style.display = "block"
        inputs[i].disabled = false })
    })
  }

  function activateCheckboxListeners(){
    const checkBtn = document.querySelectorAll("checkbox")
    const inputs = document.querySelectorAll(".text")
    checkBtn.forEach((cB, i) => {
      cB.addEventListener("checked", () => { 
        inputs[i].style.textDecoration = "line-through" })
    })
  }

  function activateCancelListeners(){
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cB, i) => {
      cB.addEventListener("click", () => {
        updateController[i].style.display = "none"
        inputs[i].disabled = true
        inputs[i].style.border = "none"
      })
    })
  }
  

  function activateSaveListeners(){
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sB, i) => {
      sB.addEventListener("click", () => {
        updateItem(inputs[i].value, i)
      })
    })
  }

  function deleteItem(i){
    itemsArray.splice(i,1)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
  }

  function updateItem(text, i){
    itemsArray[i] = text
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
  }
    displayTask()
    
    
    
}
toDoApp()
