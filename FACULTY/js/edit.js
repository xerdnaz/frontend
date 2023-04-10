var popup = document.getElementById("popup");
var block1Button = document.getElementById("block1");
var block2Button = document.getElementById("block2");
var close = document.getElementsByClassName("close")[0];

block1Button.onclick = function() {
  popup.style.display = "block";
  document.getElementById("students").innerHTML = "<li>Student 1</li><li>Student 2</li><li>Student 3</li>";
  document.getElementById("schedule").innerHTML = "<li>Monday 10:00am - 11:00am</li><li>Wednesday 2:00pm - 3:00pm</li><li>Friday 10:00am - 11:00am</li>";
}

block2Button.onclick = function() {
  popup.style.display = "block";
  document.getElementById("students").innerHTML = "<li>Student 4</li><li>Student 5</li><li>Student 6</li>";
  document.getElementById("schedule").innerHTML = "<li>Tuesday 9:00am - 10:00am</li><li>Thursday 1:00pm - 2:00pm</li><li>Friday 2:00pm - 3:00pm</li>";
}

close.onclick = function() {
  popup.style.display = "none";
}
