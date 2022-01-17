// Show current day in <p> of header
var currentTime = moment();
$("#currentDay").text("Today is: " + currentTime.format("MMM Do, YYYY"));
$("#currentDay").attr("class","display-4");