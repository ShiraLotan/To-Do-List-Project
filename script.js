
var arr = [];


function backup() {
    if (localStorage.getItem("arr") != null) {
        arr = JSON.parse(localStorage.getItem("arr"))
    }
    for (var i = 0; i < arr.length; i++) {
        showNotes(arr[i].content, arr[i].date, arr[i].time)
    }
}

backup()


function savemission() {
    var mission = document.forms["mainBoard"]["exampleFormControlTextarea1"].value;
    document.forms["mainBoard"]["exampleFormControlTextarea1"].value = "";
    var date = document.forms["mainBoard"]["dateInput"].value;
    document.forms["mainBoard"]["dateInput"].value = "";
    var time = document.forms["mainBoard"]["timeInput"].value;
    document.forms["mainBoard"]["timeInput"].value = "";


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

    /************Creat Span**********/
    var Scontent = document.createElement("span")
    var Sdate = document.createElement("span")
    var Stime = document.createElement("span")

    Scontent.className = "Scontent";
    Sdate.className="Sdate";
    Stime.className = "Stime";

    Scontent.append(mission);
    Sdate.append(date);
    Stime.append(time);
    /********************************/

    divName.className = "NotesDesign";
    ExitBtn.className = "far fa-times-circle";
    ExitBtn.onclick = removeNote;

    divName.append(Scontent);
    divName.append(Sdate);
    divName.append(Stime);

    cardDiv.append(divName);
    divName.append(ExitBtn);
}



function removeNote(mission, date, time) {

    this.parentElement.parentElement.removeChild(this.parentElement);

    var note = this.parentElement.children[0].innerHTML;
    var date = this.parentElement.children[1].innerHTML;
    var time = this.parentElement.children[2].innerHTML;


    for (var i = 0; i < arr.length; i++) {
        if (note === arr[i].content && date === arr[i].date && time === arr[i].time) {
            var j = arr.indexOf(arr[i])
            arr.splice(j, 1)
            localStorage.setItem("arr", JSON.stringify(arr));
        }
    }
}


function createObj(content, date, time) {
    var obj = {
        content: content,
        date: date,
        time: time
    }
    return obj;
}

function deleteForm() {
    document.forms["mainBoard"]["exampleFormControlTextarea1"].value = "";
    document.forms["mainBoard"]["dateInput"].value = "";
    document.forms["mainBoard"]["timeInput"].value = "";
}

