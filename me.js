// hover functions

function mouseover() {
  this.style.backgroundColor = "black";
  this.style.color = "white";
}

function mouseoutJS() {
  this.style.backgroundColor = "aliceblue";
  this.style.color = "black";
}
function mouseoutPY() {
  this.style.backgroundColor = "violet";
  this.style.color = "white";
}

// heading for the page

let heading = document.createElement("h1");
heading.textContent = "Voting System";
heading.style.color = "blue";

// heading for options

let heading2 = document.createElement("h2");
heading2.textContent = "Click on your favorite programming language to vote...";
heading2.style.color = "crimson";

// first option
let option1 = document.createElement("div");
option1.textContent = "JavaScript";
option1.value = 0;
option1.style.width = "20%";
option1.style.backgroundColor = "aliceblue";
option1.style.padding = "10px";
option1.style.fontSize = "22px";
option1.style.margin = "20px 0px ";
option1.style.cursor = "pointer";

option1.addEventListener("mouseover", mouseover);
option1.addEventListener("mouseout", mouseoutJS);

// second option
let option2 = document.createElement("div");
option2.textContent = "Python";
option2.value = 0;
option2.style.width = "20%";
option2.style.backgroundColor = "violet";
option2.style.color = "white";
option2.style.padding = "10px";
option2.style.fontSize = "22px";
option2.style.margin = "20px 0px ";
option2.style.cursor = "pointer";

option2.addEventListener("mouseover", mouseover);
option2.addEventListener("mouseout", mouseoutPY);

// bar widths




document.body.append(
    heading,
    heading2,
    option1,
    option2
   
  );

// calculate the values
let container = document.getElementById("Votes");
let totalVotes = 0;

function changeOption1Val() {
//   option1Bar.textContent++;
  
 option1.value++
 console.log(option1.value);
 let option1vote = document.getElementById('option1vote');
 option1vote.innerHTML = `total JS vote count is :   ${option1.value}`
  
}
function changeOption2Val() {
 
    option2.value++
    console.log(option2.value);
    let option1vote = document.getElementById('option2vote');
    option1vote.innerHTML = `total PY vote count is :   ${option2.value}`
}

option1.addEventListener("click", changeOption1Val);
option2.addEventListener("click", changeOption2Val);



