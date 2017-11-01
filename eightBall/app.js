document.getElementById("nameButton").addEventListener("click", userName);

function userName() {
    var txt;
    var person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
  }

document.getElementById("questionButton").addEventListener("click", question);

function question() {
    var txt;
    var userQuestion = prompt("What is your question?", "");
    if (userQuestion == null || userQuestion == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Your question is: " + userQuestion;
    }
    document.getElementById("question-print").innerHTML = txt;
  }

document.getElementById("ballButton").addEventListener("click", shake);
document.getElementById("ballButton").addEventListener("click", magicEight);

function shake() {
  var d = document.getElementById("shake");
  d.className += "animated shake";
}


function magicEight() {
    let randomNumber = Math.floor(Math.random() * 9);
    let eightBall = "";
    if(randomNumber === 0) {
      eightBall= 'It is certain';
    } else if (randomNumber === 1) {
      eightBall= 'It is decidedly so';
    } else if (randomNumber === 2) {
      eightBall= 'Reply hazy try again';
    } else if (randomNumber === 3) {
      eightBall= 'Cannot predict now';
    } else if (randomNumber === 4) {
      eightBall= "Don't count on it";
    } else if (randomNumber === 5) {
      eightBall= 'My sources say no';
    } else if (randomNumber === 6) {
      eightBall= 'Outlook not so good';
    } else if (randomNumber === 7) {
      eightBall= 'Signs point to yes';
    } else if (randomNumber === 8) {
      eightBall= 'Fuck You!';
    }
    document.getElementById("response").innerHTML = eightBall;
}

document.getElementById("reset").addEventListener("click", reset);

function reset() {
  document.getElementById("question-print").innerHTML = "";
  document.getElementById("response").innerHTML = "";
  var element= document.getElementById("shake");
  element.classList.remove("animated");
  var element= document.getElementById("shake");
  element.classList.remove("shake");
}
