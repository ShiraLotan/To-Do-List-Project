
var arr = [];

backup()

function backup() {
    if (localStorage.getItem("arr") !== null) {
        arr = JSON.parse(localStorage.getItem("arr"))
    }
}

function savemission() {
    var mission = document.getElementById("exampleFormControlTextarea1").value;
    var date = document.forms["mainBoard"]["dateInput"].value;
    var time = document.forms["mainBoard"]["timeInput"].value;

    if (mission == "") {
        alert("Please fill in a task!");
    }
    else if (date == "") {
        alert("Please fill up the date")
    }
    else if (time == "") {
        alert("Please fill up the time")

    }
    else {

        arr.push(createObj(mission, date, time));
        localStorage.setItem("arr", JSON.stringify(arr));
        showNotes(mission, date, time)
    }
}

function showNotes(mission, date, time) {
    var cardDiv = document.getElementById("DivTest");
    var divName = document.createElement("div");
    var ExitBtn = document.createElement("button");

    divName.className = "NotesDesign";
    ExitBtn.onclick = removeNote;


    divName.innerHTML = "<span>" + mission + "</span> </br><span>" + date + "</span></br><span>" + time + "</span>";

    cardDiv.append(divName);
    divName.append(ExitBtn);
}



function removeNote() {
    parentElement.removeChild(this)

    localStorage.setItem("arr", JSON.stringify(arr));
}


function createObj(content, date, time) {
    var obj = {
        content: content,
        date: date,
        time: time
    }
    return obj;
}

