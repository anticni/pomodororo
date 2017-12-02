// request notification permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted"){
    alert('Sorry, \nWe need permission for notifications so we can manage your workflow better. \n\nYou will only see this message once.');
    Notification.requestPermission();
}
});


//global id variable as so it can be saved and reused for next input   
    var id= 0
function AddTable(){
    var task=document.getElementById("task")
    if (task.value == '') {
         window.alert("Please enter a task");
    } else {

    var table = document.getElementById("table")
    var tableRef = document.getElementById("table").getElementsByTagName('tbody')[0];
  
    var row = tableRef.insertRow(tableRef.rows.length)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var idNext = 1+id++;
    cell1.innerHTML = idNext;
    cell2.innerHTML = document.getElementById("task").value;
    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    checkbox.id="checkbox";
    // checkbox.value = "pair";
    checkbox.setAttribute("onclick", "strike(this)");
    var cell3 = row.insertCell(2);
    cell3.appendChild(checkbox);

//clearing text input after submitting
    document.getElementById("task").value = "";
//unhide timer part
    document.getElementById("timers").style.display="block";
//unhide table
    document.getElementById("table").style.display="table";
}
}
function strike(elm) {
    if(elm.checked) {
        elm.parentNode.parentNode.setAttribute("style", "text-decoration: line-through; color:gray;");
    } else {
        elm.parentNode.parentNode.setAttribute("style", "text-decoration: none;");
    }
}

function notifyMeBreak() {
  if (Notification.permission !== "granted"){
    Notification.requestPermission();}
  else {
    var notification = new Notification('Hey', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: "Take a break, relax!",
    });

    notification.onclick = function () {
    window.focus();      
    };

  }

}

function notifyMeWork() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Hi', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: "You need to start working!",
    });

    notification.onclick = function () {
      window.focus();      
    };

  }

}

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
       
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
                 if (diff==0){

            console.log("done");
            document.getElementById('countdown').innerHTML = "Take a break!";
            document.getElementById("breakstuff").style.display="block";
            clearInterval(timing);
            var audio = new Audio('throat_clear.mp3');
            audio.play();
            window.focus();
            notifyMeBreak();
            takeiteasy();
            return;

        }
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }

    };
    // we don't want to wait a full second before the timer starts
    timer();
    var timing = setInterval(timer, 1000);
}

function startBreak(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
       
    function timepause() {
 
                 if (diff==0){

            console.log("done");
            document.getElementById('countdown').innerHTML = "Do more?";
            document.getElementById('takeabreak').innerHTML = "";
            document.getElementById("breakstuff").style.display="none";
            clearInterval(timing);
            
            //play audio after break is over
            var audio = new Audio('throat_clear.mp3');
            audio.play();
            notifyMeWork();
            window.focus();
            return;
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        }
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }

    };
    // we don't want to wait a full second before the timer starts
    timepause();
    var timing = setInterval(timepause, 1000);
}

function fifteen(){
    document.getElementById("fifteen").style.display = "none";    
    document.getElementById("thirtyfive").style.display = "none";
    document.getElementById("twentyfive").style.display = "none";
    document.getElementById("fifteen").value="Go!"
    document.getElementById("choice").style.display = "none";
    
    var time = 60 * 15,
    display= document.querySelector("#countdown");
    startTimer(time, display);
}

function twentyfive(){
    document.getElementById("fifteen").style.display = "none";
    document.getElementById("thirtyfive").style.display = "none";
    document.getElementById("twentyfive").style.display = "none";
    document.getElementById("twentyfive").value="Go!"
    document.getElementById("choice").style.display = "none";

    var time = 60 * 25,
    display= document.querySelector("#countdown");
    startTimer(time, display);
}
// set to mere seconds for testing purposes
function thirtyfive(){
    document.getElementById("fifteen").style.display = "none";
    document.getElementById("twentyfive").style.display = "none";
    document.getElementById("thirtyfive").style.display = "none";
    document.getElementById("thirtyfive").value="Go!"
    document.getElementById("choice").style.display = "none";


    var time = 5,
    display= document.querySelector("#countdown");
    startTimer(time, display);
}
function takeiteasy(){
    var time = 60 * 5,
    display= document.querySelector("#takeabreak");
    startBreak(time, display);
}
