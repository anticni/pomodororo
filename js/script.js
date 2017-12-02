//global id variable as so it can be saved and reused for next input   
    var id= 0
function AddTable(){
    var table = document.getElementById("table")
    var tableRef = document.getElementById("table").getElementsByTagName('tbody')[0];
  
    var row = tableRef.insertRow(tableRef.rows.length)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var idNext = 1+id++;
    cell1.innerHTML = idNext;
    cell2.innerHTML = document.getElementById("task").value;

//clearing text input after submitting
    document.getElementById("task").value = "";

}

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
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
    setInterval(timer, 1000);
}

function fifteen(){
    var time = 60 * 15,
    display= document.querySelector("#countdown");
    startTimer(time, display);
}

function twentyfive(){
    var time = 60 * 25,
    display= document.querySelector("#countdown");
    startTimer(time, display);
}

function thirtyfive(){
    var time = 60 * 35,
    display= document.querySelector("#countdown");
    startTimer(time, display);
}