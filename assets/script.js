setInterval(getCurrentTime, 1000);

//////////

var currentDay = $("#currentDay");
var date = $("<div>");

//////////

function getCurrentTime() {
    date.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    currentDay.append(date);
};

//////////

function liveTime() {
    var today = new Date();
    var currentHour = today.getHours();
    console.log("current hour : " + currentHour);
    for (var i = 9; i < 18; i++) {
        if (i == currentHour) {
            document.getElementById("t" + i).setAttribute("class", "present");
        } else if (i < currentHour) {
            document.getElementById("t" + i).setAttribute("class", "past");
        } else if (i > currentHour) {
            document.getElementById("t" + i).setAttribute("class", "future");
        };
    };
};

//////////

function pgRdy() {
    event.preventDefault();
    liveTime();
    
};

//////////

var entry = [];

function getFromLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

/////////

function saveEntry(key, value) {
    entry[key] = value;
    alert("Entry Saved.");
    console.log(key, value);
    getFromLocal();
};

