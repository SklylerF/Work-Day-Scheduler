var today = new Date()
var todaysDate = moment(today).format("MMM Do, YYYY");
$("Timeblocks").text(todaysDate);
$("#currentDay").append(todaysDate);
// current time



// local storage


var saveBtn = document.getElementById("btn insert");
var nineEl = document.getElementById("nine");


saveBtn.onclick = function () {
    const key = nineEl.value;
    console.log(key);

    localStorage.setItem("key",JSON.stringify(studentGrade));

    var answer = localStorage.getItem('key')
    var retrieveData = localStorage.getItem("answer");
    retrieveData

}
console.log(localStorage)